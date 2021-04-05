/* eslint-disable react/no-danger */
import Head from 'next/head';
import ScriptTag from 'react-script-tag';
import { PopUp } from '@/components/index';
import React from 'react';

import {
  Associations,
  Cover,
  OurRecommendations,
  Reviews,
  SubNewsletter,
  TopTours,
  VacationType,
  WhyValencia,
  WaysToSave
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
  popups
}) {


  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        {
          <><script
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
              src={`https://www.googletagmanager.com/gtag/js?id=UA-75417007-1`}
            >

            </ScriptTag>

          </>
        }
        <title>Machu Picchu Tour, Travel Peru - Valencia Travel Cusco</title>
        <meta name="Description" content="Explore Peru and all the country has to offer with the help of Valencia Travel Cusco. Book a Machu Picchu tour with one of our exciting packages today." />
        <meta name="Keywords" content="machu, picchu, machu picchu tour, inca trail trek, travel cusco, salkantay trek " />
        <meta name="subject" content="machu, picchu, machu picchu tour, inca trail trek, travel cusco, salkantay trek " />
        <meta name="classification" content="The Best Inca Trail trek Operator in Peru. When it comes the Inca Trail trek, Salkantay trek or Machu Picchu tour, we are the go-to adventure travel expert!." />

        <meta property="og:title" content="Machu Picchu Tour, Travel Peru - Valencia Travel Cusco" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.valenciatravelcusco.com/" />
        <meta property="og:description" content="Explore Peru and all the country has to offer with the help of Valencia Travel Cusco. Book a Machu Picchu tour with one of our exciting packages today." />
        <meta name="google-site-verification" content="XbDonWLNIunfWu05Mn8hOngklQ0lIp_58MiCLsghbbU" />
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      {
        popups.map(item => (
          <PopUp popup={item}></PopUp>
        ))

      }
      <WhyValencia />
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <section className="overflow-hidden" style={{ "background-color": '#f4f4f4' }}>
        <h2 className="font-weight-bold text-center fs-30 titleUnderline py-4">Tripadvisor Rating</h2>

        {<>
          <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer></ScriptTag>
          <div class="elfsight-app-a0921e8f-6a48-43ca-b306-5f34845c8c0e"></div>
        </>
        }
        {/* <Reviews /> */}

      </section>
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

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notifications,
      popups
    },
    revalidate: 1,
  };
}

export default Index;
