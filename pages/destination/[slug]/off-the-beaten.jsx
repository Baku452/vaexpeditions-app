/* eslint-disable react/no-danger */
import Head from 'next/head';

import { DestinationItem } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function OfftheBeatenDest({
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  SSRDestination,
  packagesOfftheBeaten,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Off the Beaten - {SSRDestination.title}</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      {/* <Banner2
        title={`Off The Beaten Paths in ${SSRDestination.title}`}
        image="/images/off-the-beaten.jpg"
        alt={SSRDestination.title}
      /> */}
      <section className="row containerBox py-4">
        <div className="col-12 p-4">
          <h1 className="text-center">Off the Beaten Track in {SSRDestination.title}</h1>
        </div>
        {packagesOfftheBeaten.length > 0 &&
          packagesOfftheBeaten.map(item => (
            <div
              key={item?.id.toString()}
              className="d-flex col-12 col-md-6 col-lg-4 mb-4">
              <DestinationItem
                title={item.title}
                summary={item.summary}
                slug={{
                  pathname: `/package/${item.slug}`,
                }}
                thumbnail={PUBLIC_API + item.thumbnail}
              />
            </div>
          ))}
      </section>
    </Base>
  );
}
export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/everyone/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const fetchDestination = await fetch(`${PUBLIC_API}/destination/${params.slug}`);
  const SSRDestination = await fetchDestination.json();

  const fetchPackages = await fetch(
    `${PUBLIC_API}/packages/off-the-beaten/${params.slug}`,
  );
  const packagesOfftheBeaten = await fetchPackages.json();

  return {
    props: {
      notifications,
      destinations,
      packagetypes,
      packagesAll,
      SSRDestination,
      packagesOfftheBeaten,
    },
    revalidate: 1,
  };
}

export default OfftheBeatenDest;
