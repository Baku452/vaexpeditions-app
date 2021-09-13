/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import fetch from 'cross-fetch';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import {
  CintaNegra,
  ContactPackage,
  Divider,
  Faqs,
  Itineraries,
  OptionalTours,
  PricesAndDates,
  RelatedTrips,
  Slide,
  StikyBox,
  TripOverview,
  WhatsIncluded,
} from '@/components/index';
import { activities, levelActivity, packages, packagesOptional } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Package({
  pack,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  resCities,
}) {
  const [packagesList, setPackagesList] = useState([]);
  const [packagesOptionals, setPackagesOptionals] = useState([]);
  const [packageTypeLabel, setpackageTypeLabel] = useState('');
  const [packageActivityLabel, setpackageActivityLabel] = useState([]);
  const [packageTypeSvg, setpackageSvg] = useState('');

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
    packagetypes.map(item => {
      if (item.id == pack.package_type) {
        setpackageTypeLabel(item.title);
        setpackageSvg(item.svg);
      }
    });
    levelActivity.map(item => {
      if (item.id == pack.activity) return setpackageActivityLabel(item.label);
    });
  }
  useEffect(() => {
    fetchPackages();
    fetchOptional();
  }, []);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        {pack.titleSEO ? <title>{pack.titleSEO}</title> : <title>{pack.title}</title>}
        <meta name="description" content={pack?.summary} />
        <meta name="keywords" content={pack?.keywords} />
      </Head>
      <Slide
        images={pack.images}
        title={pack.title}
        subtitle={pack.days}
        pagination={false}
      />
      <CintaNegra
        days={pack.days}
        price={pack.price}
        offer={pack.offer}
        type={packageTypeLabel}
        activityID={pack.activity}
        activity={packageActivityLabel}
        specialist={pack?.specialist?.thumbnail}
        showspecialist={pack?.show_specialist}
        packageTypeSvg={packageTypeSvg}
      />
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
            {pack?.faqs.length > 0 && (
              <>
                <Faqs faqs={pack?.faqs} />
                <Divider />
              </>
            )}
            {packagesOptionals.length > 0 ? (
              <>
                <OptionalTours
                  packages={packagesOptionals.slice(0, 6)}
                  pack={pack}
                  packagetypes={packagetypes}
                  activities={activities}
                />
                <Divider />
              </>
            ) : null}
            <RelatedTrips
              packages={packagesList.slice(0, 7)}
              pack={pack}
              packagetypes={packagetypes}
              activities={activities}
            />
            <ContactPackage
              destinations={destinations}
              packages={packages}
              pack={pack}
              cities={resCities}
            />
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

  return { paths, fallback: 'blocking' };
  // return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const headers = new Headers();
  headers.append(
    'X-CSCAPI-KEY',
    'aXpIVG5iUDdTTTVubVoyelZiMHgxU2MxcDk0clZ0amdLQUh2dE4wMw==',
  );

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };
  const response = await fetch(`${PUBLIC_API}/package/${params.slug}`);
  const pack = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const cities = await fetch(
    'https://api.countrystatecity.in/v1/countries',
    requestOptions,
  );
  const resCities = await cities.json();

  return {
    props: { pack, destinations, packagetypes, notifications, packagesAll, resCities },
    revalidate: 1,
  };
}

export default Package;
