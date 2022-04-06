/* eslint-disable max-len */
/* eslint-disable import/extensions */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Hero2, NewsletterForm, TopTours } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Newsletter({ destinations, packagetypes, notifications, packagesAll, tours }) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Valencia Travel Cusco | Newsletter</title>
      </Head>
      <Hero2
        title="Subscribe to our Newsletter"
        image="/images/toptours2.jpg"
        alt="subscribe newsletter"
      />
      <section id="thank_you" className="container">
        <div className="row pt-5 ps-5">
          <div className="col-12">
            <h1 className="title m-0">Newsletter </h1>
          </div>
        </div>
        {!success ? (
          <div className="row p-5">
            <div className="col-12 col-lg-8 text-start">
              <h2>Start watching the world with a different view </h2>
              <p>
                Travel destinations will surprise you, stories that inspire, life
                experiences, mindful Travel and advices of our experts travellers
                delivered straight to your mail inbox.
              </p>
              <p>
                In order to complete your subscription please fill out the following
                information
              </p>
              <NewsletterForm
                emailProp={router.query.email ? router.query.email : null}
                success={success}
                setSuccess={setSuccess}
              />
            </div>
            <div className="col-12 col-lg-4 text-center p-3">
              <img src="/images/popupNewsletter.jpg" alt="newsletter" />
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-center">
              Thank you for submitting your information. You will soon receive an email
              with a link to download the brochure. Thank you!
            </h3>
            <section className="card pb-5">
              <div className="card-body text-center">
                <p className="card-text fs-18 lh-29">
                  We respond to all inquiries within one business day. If you do not hear
                  back from us within this timeframe, please check your spam folder or
                  call 1 - (888) 803 8004
                  <br />
                  <Link href="/search">
                    <a> Go see travel destinations</a>
                  </Link>
                </p>
              </div>
            </section>
            <TopTours tours={tours} />
          </>
        )}
      </section>
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

export default Newsletter;
