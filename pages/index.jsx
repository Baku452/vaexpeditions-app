/* eslint-disable react/no-danger */
import Head from 'next/head';

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
  notification,
}) {
  return (
    <Base destinations={destinations} notification={notification}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2047841,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <Reviews />
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
  const notification = await notificationResponse.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notification,
    },
    revalidate: 1,
  };
}

export default Index;
