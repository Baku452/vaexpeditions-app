/* eslint-disable import/extensions */
/* eslint-disable react/jsx-key */
import Head from 'next/head';
import React from 'react';
import { Row } from 'react-bootstrap';

import { DestinationItem, Hero } from '@/components/index';
import { Base } from '@/layouts/index';

// import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const LandingHolidayTypes = ({
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
        <title>Holiday Types | Va Expeditions</title>
      </Head>

      <Hero title="Holiday Types" image="/images/arequipa3.jpg" alt="Holiday Types" />

      <section id="holiday-types" className="containerBox p-5">
        <Row className="py-4">
          <h2 className="title">Explore through our holiday types</h2>
          {packagetypes &&
            packagetypes.map(item => (
              <div
                key={item.title}
                className=" d-flex col-12 col-sm-6 col-md-4 col-lg-4 mb-4 p-3">
                <DestinationItem
                  title={item.title}
                  summary={item.summary}
                  slug={{
                    pathname: `/holiday-types/${item.slug}`,
                  }}
                  thumbnail={PUBLIC_API + item.thumbnail}
                />
              </div>
            ))}
        </Row>
      </section>
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

export default LandingHolidayTypes;
