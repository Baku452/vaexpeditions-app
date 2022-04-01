/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Hero2, TopTours } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({ destinations, packagetypes, tours, notifications, packagesAll }) {
  const router = useRouter();
  const [pack, setPack] = useState('');

  useEffect(() => {
    if (router?.query?.package) setPack(router?.query?.package);
  }, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Thank you for contacting - Va Expeditions</title>
        <meta
          name="Description"
          content="Thank you for contact us - Explore Multidestinations with VAExpeditions"
        />
      </Head>
      <Hero2 title="Contact US" image="/images/contact.jpg" alt="contact us" />
      <h2 className="text-center fw-bold fs-40 p-5">Thank you for contacting us!</h2>
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
  const responseTypes = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await responseTypes.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const packagesResponse = await fetch(`${PUBLIC_API}/packages/`);
  const packages = await packagesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  return {
    props: {
      tours,
      destinations,
      packagetypes,
      packages,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default ContactUs;
