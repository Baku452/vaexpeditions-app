/* eslint-disable react/no-danger */
import Head from 'next/head';
import ScriptTag from 'react-script-tag';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Reviews({ destinations, packagetypes, notifications, popups, packagesAll }) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      popups={popups}
      packagesAll={packagesAll}>
      <Head>
        <title>Reviews Trip Advisor - Va Expeditions</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <h1>Reviews Tripadvisor</h1>
        <>
          <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer />
          <div className="elfsight-app-a0921e8f-6a48-43ca-b306-5f34845c8c0e" />
        </>
      </div>
    </Base>
  );
}
export async function getStaticProps() {
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  return {
    props: {
      notifications,
      destinations,
      packagetypes,
      popups,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default Reviews;
