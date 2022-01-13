/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { DestinationItem, Slide } from '@/components/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({
  country: SSRCountry,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
}) {
  const router = useRouter();

  useEffect(() => {
    const destinationActiveItems = [];
    if (router?.query?.destination) {
      const destinationsActive = router?.query?.destination.split(',');
      // setCheckedDestination(destinationsActive);

      destinationsActive.forEach(active => {
        destinations.forEach(destination => {
          const destinationActiveItem = destination.destinations.find(
            item => String(item.id) === active,
          );
          if (destinationActiveItem) destinationActiveItems.push(destinationActiveItem);
        });
      });
    }
  }, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Slide
        title={SSRCountry.name}
        images={SSRCountry.images}
        navigation
        pagination={false}
        isHome
        isDestination
      />
      <Head>
        <title>Va Expeditions - {SSRCountry.name}</title>
        <meta name="Description" content="Explore Multidestinations with VAExpeditions" />
      </Head>
      <section id="tours_all" className="row containerBox">
        <div className="col-12 py-4 row d-flex ">
          <div className="row p-4 order-md-2">
            <div className="col-12">
              <h2 className="title">Destinations in {SSRCountry.name}</h2>
            </div>
            {SSRCountry.destinations.length > 0 &&
              SSRCountry.destinations.map(item => (
                <div
                  key={item?.id.toString()}
                  className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                  <DestinationItem
                    title={item.title}
                    summary={item.summary}
                    slug={{
                      pathname: `/destination/${item.slug}`,
                    }}
                    thumbnail={PUBLIC_API + item.thumbnail}
                  />
                </div>
              ))}
          </div>
          <div className={`row p-4 order-md-1 ${styles.text}`}>
            <div className="col-12 col-lg-8">
              <h1 className="title">Overview of {SSRCountry.name}</h1>
              <div
                className={` ${styles.content} pe-5`}
                dangerouslySetInnerHTML={{ __html: SSRCountry?.content }}
              />
            </div>
            <div
              className={`col-12 col-lg-4 p-4 ${styles.quote}`}
              dangerouslySetInnerHTML={{ __html: SSRCountry?.quote }}
            />
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/countries/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const countryResponse = await fetch(`${PUBLIC_API}/countries/${params.slug}`);
  const country = await countryResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      country,
      destinations,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default Search;
