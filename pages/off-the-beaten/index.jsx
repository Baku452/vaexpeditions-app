import Head from 'next/head';
import React from 'react';
import { Row } from 'react-bootstrap';

import { DestinationItem, Hero } from '@/components/index';
import { Base } from '@/layouts/index';

// import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const LandingOfftheBeaten = ({
  destinations,
  packagetypes,
  notifications,
  packagesAll,
}) => {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Off the Beaten Track | VA Expeditions</title>
        <meta name="Description" content="Off the Beaten Track" />
      </Head>

      <Hero
        title="Destinations"
        image="/images/off-the-beaten.jpg"
        alt="Off the Beaten Track"
      />

      <div id="destinations" className="containerBox p-5">
        <section id="overview">
          <p>
            If you are looking for something a little bit different to the regular tours
            and want to have unique and different experiences on your vacation, our “off
            the beaten track” programmes may be just be what you are looking for.
            Experience the lesser -visited destinations in each country and make your
            holiday a unique experience with the safeguard that we are with you, every
            step of the way. Whether you choose Mexico or Peru, we have the perfect
            adventure for you!
          </p>
        </section>
        <div className="py-4">
          <div className="">
            <h1 className="title">Off the Beaten Path</h1>
            <Row>
              {destinations.map(item => (
                <div
                  key={item.title}
                  className=" d-flex col-12 col-sm-6 col-md-4 col-lg-4 mb-4 p-3">
                  <DestinationItem
                    title={item.title}
                    summary={item.summary}
                    slug={{
                      pathname: `/destination/${item.slug}/off-the-beaten`,
                    }}
                    thumbnail={PUBLIC_API + item.thumbnail}
                  />
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Base>
  );
};
export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default LandingOfftheBeaten;
