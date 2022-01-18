/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Banner2, DestinationItem, Divider } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function OfftheBeaten({
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  country,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Off the Beaten - {country.name} - Va Expeditions</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <Banner2
        title={`Off The Beaten Track in ${country.name}`}
        image="/images/off-the-beaten.jpg"
        alt={country.title}
      />
      <section className="row container mx-auto py-4">
        <div className="col-12 p-4">
          <h1 className="text-center">Off the Beaten Track in {country.name}</h1>
        </div>
        <div className="col-12 p-3">
          <p>
            If you are looking for something a little bit different to the regular tours
            and want to have unique and different experiences on your vacation, our “off
            the beaten track” programmes may be just be what you are looking for.
            Experience the lesser -visited destinations in each country and make your
            holiday a unique experience with the safeguard that we are with you, every
            step of the way. Whether you choose Mexico or Peru, we have the perfect
            adventure for you!
          </p>
        </div>

        <Divider />

        {country.destinations.length > 0 &&
          country.destinations &&
          country.destinations.map(item => (
            <div
              key={item?.id.toString()}
              className="d-flex col-12 col-md-6 col-lg-4 mb-4">
              <DestinationItem
                title={item.title}
                summary={item.summary}
                slug={{
                  pathname: `/destination/${item.slug}`,
                  // pathname: `/destination/${item.slug}/off-the-beaten`,
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
  const response = await fetch(`${PUBLIC_API}/countries/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const countryResponse = await fetch(`${PUBLIC_API}/countries/${params.slug}`);
  const country = await countryResponse.json();

  return {
    props: {
      notifications,
      destinations,
      packagetypes,
      packagesAll,
      country,
    },
    revalidate: 60,
  };
}

export default OfftheBeaten;
