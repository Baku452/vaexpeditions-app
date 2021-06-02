/* eslint-disable react/no-danger */
import Head from 'next/head';
import React from 'react';
import ScriptTag from 'react-script-tag';

import {
  Associations,
  Cover,
  OurRecommendations,
  SubNewsletter,
  TopTours,
  VacationType,
  WaysToSave,
  WhyValencia,
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
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:2306973,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
          <ScriptTag
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-75417007-1"
          />
        </>
        <title>Va Expeditions</title>
        <meta name="Description" content="Explore Multidestinations with VAExpeditions" />
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      <WhyValencia />
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      {/* <section className="overflow-hidden" style={{ backgroundColor: '#f4f4f4' }}>
        <h2 className="text-center titleUnderline py-4">Tripadvisor Rating</h2>
        <>
          <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer />
          <div className="elfsight-app-a0921e8f-6a48-43ca-b306-5f34845c8c0e" />
        </>
      </section> */}
      <WaysToSave />
      <SubNewsletter />
      <Associations />
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

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default Index;
