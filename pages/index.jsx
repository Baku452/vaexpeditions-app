/* eslint-disable react/no-danger */
import Head from 'next/head';
import React from 'react';
import ScriptTag from 'react-script-tag';

import {
  Associations,
  Cover,
  Destinations,
  OurRecommendations,
  PopUp,
  Reviews,
  SubNewsletter,
  TopTours,
  VacationType,
} from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Index({
  types,
  tours,
  destinations,
  banners,
  packagetypes,
  interests,
  notifications,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        <ScriptTag
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/7151923.js"
        />
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      {/* <PopUp /> */}
      <Destinations countries={destinations} />
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <Reviews />
      <SubNewsletter />
      <Associations />
      <>
        <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer />
        <div className="elfsight-app-e76c2df3-57df-4924-a3b4-257b7e21a253" />
      </>
    </Base>
  );
}

export async function getStaticProps() {
  const typesResponse = await fetch(`${PUBLIC_API}/experiences/list/`);
  const types = await typesResponse.json();

  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  const bannersResponse = await fetch(`${PUBLIC_API}/banners/`);
  const banners = await bannersResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notifications,
    },
    revalidate: 1,
  };
}

export default Index;
