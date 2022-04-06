/* eslint-disable react/no-danger */
import Head from 'next/head';
import React from 'react';

import {
  // Associations,
  Cover,
  OurRecommendations,
  SubNewsletter,
  TopTours,
  VacationType,
  WaysToSave,
  WhyVa,
} from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Index({
  tours,
  destinations,
  banners,
  packagetypes,
  interests,
  notifications,
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Va Expeditions</title>
        <meta name="Description" content="Explore Multidestinations with VAExpeditions" />
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      <WhyVa />
      <VacationType packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <WaysToSave />
      <SubNewsletter />
      {/* <Associations /> */}
    </Base>
  );
}

export async function getStaticProps() {
  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  const bannersResponse = await fetch(`${PUBLIC_API}/destinations/banners/`);
  const banners = await bannersResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/packages/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default Index;
