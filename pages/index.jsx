/* eslint-disable react/no-danger */
import Head from 'next/head';
import ScriptTag from 'react-script-tag';
import Popup from 'reactjs-popup';
import {
  Associations,
  Cover,
  OurRecommendations,
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
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2047841,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        /> */
          <ScriptTag type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7151923.js"></ScriptTag>
        }
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      <Popup trigger={<button>Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <Reviews />
      <SubNewsletter />
      <Associations />
      {<>
        <div id="TA_selfserveprop240" class="TA_selfserveprop"><ul id="bncnZuTWfik" class="TA_links wbe0XPm"><li id="nyRePYGB" class="u2FdrI5Ec"><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294314-d2469804-Reviews-Valencia_Travel_Day_Tours-Cusco_Cusco_Region.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor" /></a></li></ul></div>
        <ScriptTag type="text/javascript" async src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=240&amp;locationId=2469804&amp;lang=en_US&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></ScriptTag>
      </>
      }
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
