/* eslint-disable react/no-danger */
import Head from 'next/head';

import {
  Divider,
  Faqs,
  Itineraries,
  OptionalReting,
  PricesAndDates,
  RelatedTrips,
  Slide,
  StikyBox,
  TripOverview,
  WhatsIncluded,
} from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Package({ pack, destinations, packagetypes }) {
  console.log('object', pack);
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Head>
        <meta name="description" content={pack?.summary} />
        <meta name="keywords" content={pack?.keywords} />
      </Head>
      {pack?.images?.length > 0 && (
        <Slide images={pack.images} title={pack.title} pagination={false} />
      )}

      <div className="container aside">
        <div className="row" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <StikyBox />
          <div className="col-12 col-lg-9 column-left">
            <TripOverview pack={pack} />
            <Itineraries itineraries={pack?.itineraries} />
            <Divider />

            <WhatsIncluded
              include={pack?.whats_included}
              exclude={pack?.whats_not_included}
            />
            <Divider />
            <PricesAndDates dates={pack?.dates_prices} />
            <Divider />

            {pack?.optionals.length > 0 && <OptionalReting optionals={pack?.optionals} />}
            <Divider />

            {pack?.faqs.length > 0 && <Faqs faqs={pack?.faqs} />}
            <Divider />

            {pack?.related_packages.length > 0 && (
              <RelatedTrips packages={pack?.related_packages} />
            )}
          </div>
        </div>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/packages/list/`);
  const packages = await response.json();

  const paths = packages.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/package/${params.slug}`);
  const pack = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  return { props: { pack, destinations, packagetypes } };
}

export default Package;
