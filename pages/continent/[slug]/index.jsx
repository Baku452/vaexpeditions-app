/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { DestinationItem, Hero } from '@/components/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Continent({
  continent,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
}) {
  const router = useRouter();

  useEffect(() => {
    const destinationActiveItems = [];
    if (router?.query?.destination) {
      const destinationsActive = router?.query?.destination.split(',');
      // setCheckedDestination(destinationsActive);

      destinationsActive.forEach(active => {
        destinations.forEach(destination => {
          const destinationActiveItem = destination.destinations.find(
            item => String(item.id) === active,
          );
          if (destinationActiveItem) destinationActiveItems.push(destinationActiveItem);
        });
      });
    }
  }, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>{continent.name} - Va Expeditions</title>
        <meta name="Description" content="Explore Multidestinations with VAExpeditions" />
      </Head>
      <Hero
        title={continent.name}
        image={PUBLIC_API + continent.image}
        alt={continent.name}
      />

      <div id="continent" className="containerBox px-5 px-lg-4">
        <section id="overview" className="pt-5">
          <Row>
            <Col>
              <h1 className="title">Overview of {continent.name}</h1>
              <div
                className={` ${styles.content} pe-5`}
                dangerouslySetInnerHTML={{ __html: continent?.content }}
              />
            </Col>
          </Row>
        </section>
        <section id="destinations">
          <Row>
            <Col>
              <h2 className="title">Destinations in {continent.name}</h2>
            </Col>
            <Row>
              {destinations &&
                destinations.map(item => (
                  <div
                    key={item?.id.toString()}
                    className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                    <DestinationItem
                      title={item.title}
                      summary={item.summary}
                      slug={{
                        pathname: `/destination/${item.slug}`,
                      }}
                      thumbnail={PUBLIC_API + item.thumbnail}
                    />
                  </div>
                ))}
            </Row>
          </Row>
        </section>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/continents/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const continentResponse = await fetch(
    `${PUBLIC_API}/destinations/continents/${params.slug}`,
  );
  const continent = await continentResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/packages/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      continent,
      destinations,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default Continent;
