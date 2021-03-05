/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import fetch from 'cross-fetch';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import {
  Divider,
  Faqs,
  Itineraries,
  OptionalReting,
  OptionalTours,
  PricesAndDates,
  RelatedTrips,
  Slide,
  StikyBox,
  Title,
  TripOverview,
  WhatsIncluded,
} from '@/components/index';
import { packages, packagesOptional } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Package({ pack, destinations, packagetypes, notifications }) {
  const [packagesList, setPackagesList] = useState([]);
  const [packagesOptionals, setPackagesOptionals] = useState([]);

  async function fetchOptional() {
    let { destination } = pack;
    if (destination === 14 || destination === 6 || destination === 11) destination = 4;

    const query = { destination };
    const querySet = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');

    const queryParams = querySet ? `?${querySet}` : '';
    const { result } = await packagesOptional({ queryParams });
    if (result && packagesOptionals.length === 0) {
      setPackagesOptionals(result?.data);
    }
  }

  async function fetchPackages() {
    const { activity, package_type, destination } = pack;
    const query = { activity, package_type, destination };

    const querySet = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');

    const queryParams = querySet ? `?${querySet}` : '';

    const { result } = await packages({ queryParams });
    if (result && packagesList.length === 0) {
      setPackagesList(result.data);
    }
  }
  useEffect(() => {
    fetchPackages();
    fetchOptional();
  }, []);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        <meta name="description" content={pack?.summary} />
        <meta name="keywords" content={pack?.keywords} />
      </Head>
      {pack?.images?.length > 0 && (
        <Slide
          images={pack.images}
          title={pack.title}
          subtitle={pack.days}
          pagination={false}
        />
      )}

      <div className="container aside">
        <div className="row" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <StikyBox pack={pack} />
          <div className="col-12 col-lg-9 column-left">
            <TripOverview pack={pack} />

            <Itineraries itineraries={pack?.itineraries} />

            <Divider />

            <WhatsIncluded
              include={pack?.whats_included}
              exclude={pack?.whats_not_included}
            />

            <Divider />

            {pack?.dates_prices.length > 0 && (
              <>
                <PricesAndDates dates={pack?.dates_prices} />
                <Divider />
              </>
            )}

            {pack?.optionals.length > 0 && (
              <>
                <OptionalReting optionals={pack?.optionals} />
                <Divider />
              </>
            )}

            {pack?.faqs.length > 0 && (
              <>
                <Faqs faqs={pack?.faqs} />
                <Divider />
              </>
            )}

            <OptionalTours packages={packagesOptionals.slice(0, 6)} pack={pack} />
            <Divider />
            <RelatedTrips packages={packagesList.slice(0, 7)} pack={pack} />
            <Divider />
            {pack.old_overview && (
              <div name="old-overview" className="container pt-5 pb-5">
                <Title title="Related Overview" />
                <div
                  className="col-12 fs-16 lh-29"
                  dangerouslySetInnerHTML={{ __html: pack?.old_overview }}
                />
              </div>
            )}
            <Divider />
            {pack?.old_itinerario && (
              <Itineraries
                name="old-itinerario"
                title="Related Itinerary"
                itineraries={pack?.old_itinerario}
              />
            )}
          </div>
        </div>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/packages/list/`);
  const packagesResponse = await response.json();

  const paths = packagesResponse.map(item => ({
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

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return { props: { pack, destinations, packagetypes, notifications } };
}

export default Package;
