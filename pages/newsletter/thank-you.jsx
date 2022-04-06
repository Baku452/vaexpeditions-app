/* eslint-disable import/extensions */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { TopTours } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Unsubscribe({ destinations, packagetypes, notifications, packagesAll, tours }) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Thank you for your subscription | Valencia Travel Cusco</title>
      </Head>
      <h2 className="text-center fw-bold fs-40 p-5">Thank you for your subscription</h2>
      <section className="card pb-5">
        <div className="card-body text-center">
          <p className="card-text fs-18 lh-29">
            We respond to all inquiries within one business day. If you do not hear back
            from us within this timeframe, please check your spam folder or call 1 - (888)
            803 8004
            <br />
            <Link href="/search">
              <a> Go see travel destinations</a>
            </Link>
          </p>
        </div>
      </section>
      <TopTours tours={tours} />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/nav/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      tours,
    },
    revalidate: 1,
  };
}

export default Unsubscribe;
