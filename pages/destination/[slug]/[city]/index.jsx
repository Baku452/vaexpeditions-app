/* eslint-disable react/no-danger */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Banner2, DestinationItem, NavBarFixed, PackageItem } from '@/components/index';
import { activities, navSubDestinations } from '@/core/index';
import { Base } from '@/layouts/index';

import styles from '../../index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function City({
  city,
  destinations,
  packagetypes,
  notifications,
  SSRDestination,
  SSRPackages,
}) {
  const router = useRouter();
  useEffect(() => {}, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      pixels={600}>
      <Head>
        <title>{city?.title} - Va Expeditions</title>
        <meta name="description" content={city?.summary} />
        <meta name="keywords" content />
      </Head>
      <Banner2 title={city.title} image={PUBLIC_API + city.image} alt={city.title} />

      <NavBarFixed items={navSubDestinations} />
      <section id="overview" className="p-3 containerBox">
        <div className={`containerBox ${styles.text}`}>
          <h2 className="title2 text-center py-4">Overview of {city.title}</h2>
          <div className="lh-29" dangerouslySetInnerHTML={{ __html: city?.content }} />
        </div>
      </section>

      <section id="holidays" className="p-3 background2 overflow-hidden">
        <div className="containerBox ">
          <h2 className="title2 py-4">{city?.title} Holidays</h2>
          <div className="row py-4">
            {SSRPackages.length > 0 &&
              SSRPackages.map(item => (
                <div key={item.slug} className="d-flex col-12 col-sm-6 col-lg-4 mb-4 ">
                  <PackageItem
                    key={item.slug}
                    title={item.title}
                    days={item.days}
                    slug={item.slug}
                    type={item.type_name}
                    thumbnail={PUBLIC_API + item.thumbnail}
                    featured={item.featured}
                    packagetypes={packagetypes}
                    activity={activities.map(act =>
                      act.id.toString() === item.activity_name.toString()
                        ? act.label
                        : null,
                    )}
                  />
                </div>
              ))}
          </div>

          <div className="text-center mx-auto fs-26 link fw-bold">
            <Link
              href={`/destination/${SSRDestination.slug}/search?where_to_go=${city.id}`}>
              <a className={`${styles.boton} p-2 my-4 link`} type="button">
                SHOW MORE
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="what-to-do" className="p-3 containerBox">
        <div className={`containerBox row col-12 p-4 ${styles.text}`}>
          <div className="col-12">
            <h2 className="title2 p-3">What to Do in {city?.title} </h2>
          </div>
          {city.items
            ? city.items.map(item => (
                <div
                  key={item?.id.toString()}
                  className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                  <DestinationItem
                    title={item.title}
                    content={item.content}
                    thumbnail={PUBLIC_API + item.image}
                  />
                </div>
              ))
            : null}
        </div>
      </section>
      <section id="when-to-go" className="p-3 background2">
        <div className="containerBox ">
          <div className="row p-4">
            <div className="col-12">
              <h2 className="title2 py-4">When To Go {city?.title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="city" className="col-12 containerBox py-4 position-relative ">
        <Tabs defaultActiveKey="Overview">
          <Tab eventKey="Overview" title="Overview">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 text-center py-4">Overview of {city.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: city?.content }} />
              </div>
              <div />
            </div>
          </Tab>
          <Tab disabled eventKey="holidays" title={`${city.title} Holidays`}>
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Holidays in {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab disabled eventKey="hotels" title="Hotels">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Hotels in {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="what-to-do" title="What to Do">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">What to Do in {city?.title} </h2>
              </div>
              {city.items
                ? city.items.map(item => (
                    <div
                      key={item?.id.toString()}
                      className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                      <DestinationItem
                        title={item.title}
                        content={item.content}
                        thumbnail={PUBLIC_API + item.image}
                      />
                    </div>
                  ))
                : null}
            </div>
          </Tab>
          <Tab disabled eventKey="when-to-go" title="When To Go">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">When To Go {city?.title}</h2>
              </div>
            </div>
          </Tab>
        </Tabs>
      </section> */}
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/cities/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { city: item.slug, slug: item.slug_destination },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const fetchDestination = await fetch(`${PUBLIC_API}/destinations/${params.slug}`);
  const SSRDestination = await fetchDestination.json();

  const fetchCity = await fetch(
    `${PUBLIC_API}/destinations/city/${params.slug}/${params.city}`,
  );
  const city = await fetchCity.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const fetchpackages = await fetch(
    `${PUBLIC_API}/packages/${params.slug}/city/${params.city}`,
  );
  const SSRPackages = await fetchpackages.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      city,
      destinations,
      packagetypes,
      notifications,
      SSRDestination,
      SSRPackages,
    },
    revalidate: 60,
  };
}

export default City;
