/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Banner2 } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function City({ city, destinations, packagetypes, notifications }) {
  const router = useRouter();
  useEffect(() => {}, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        <title>{city?.title} - VA Expeditions</title>
        <meta name="description" content={city?.summary} />
        <meta name="keywords" content />
      </Head>
      <Banner2 title={city.title} image={PUBLIC_API + city.image} alt={city.title} />

      <section id="city" className="col-12 containerBox py-4 position-relative ">
        <Tabs defaultActiveKey="Overview">
          <Tab eventKey="Overview" title="Overview">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 text-center py-4">Overview of {city.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: city?.content }} />
              </div>
              <div />
            </div>
          </Tab>
          <Tab eventKey="TravelFacts" title="How to Explore">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="py-4 title2">How to Explore {city?.title}</h2>
                {/* <div dangerouslySetInnerHTML={{ __html: city?.travelfact }} /> */}
              </div>
            </div>
          </Tab>
          <Tab eventKey="holidays" title={`${city.title} Holidays`}>
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">
                  Where to go in{' '}
                  <span className="line font-weight-semibold">
                    Holidays in {city?.title}
                  </span>
                </h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="destinations" title="Destinations">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Destinations in {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="hotels" title="Hotels">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Hotels in {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="what-to-do" title="What to Do">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">What to Do in {city?.title} </h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="when-to-go" title="When To Go">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">When To Go {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="latest-offers" title="Latest Offers">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Latest Offers in {city?.title}</h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="flights" title="Flights">
            <div className="row p-4">
              <div className="col-12">
                <h2 className="title2 py-4">Flights</h2>
              </div>
            </div>
          </Tab>
        </Tabs>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/cities/`);
  const countriesResponse = await response.json();

  // const responseDestinations = await fetch(`${PUBLIC_API}/cities/`);
  // const destinationsResponse = await responseDestinations.json();

  const paths = countriesResponse.map(item => ({
    params: { city: item.slug, slug: item.slug_destination },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const fetchCity = await fetch(
    `${PUBLIC_API}/city/${params.slug_destination}/${params.city}`,
  );
  const city = await fetchCity.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      city,
      destinations,
      packagetypes,
      interests,
      notifications,
    },
    revalidate: 1,
  };
}

export default City;
