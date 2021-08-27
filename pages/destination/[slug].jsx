import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {
  DestinationItem,
  Faqs,
  PackageItem,
  PackageTypeItem,
  Slide,
  Weather,
} from '@/components/index';
import { activities } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({
  SSRDestination,
  destinations,
  packagetypes,
  // interests,
  notifications,
}) {
  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        <title>{SSRDestination?.title} - VA Expeditions</title>
        <meta name="description" content={SSRDestination?.summary} />
        <meta name="keywords" content />
      </Head>
      <Slide
        title={SSRDestination.title}
        images={SSRDestination.images}
        navigation
        pagination={false}
        isHome
        isDestination
      />

      <section id="tours_all" className="row p-4">
        <div className="col-12 containerBox">
          <Tabs defaultActiveKey="Overview">
            <Tab eventKey="Overview" title="Overview">
              <div className="row">
                <div
                  className="col-12 p-4"
                  dangerouslySetInnerHTML={{ __html: SSRDestination?.content }}
                />
              </div>
            </Tab>
            <Tab eventKey="TravelFacts" title="Travel Facts">
              <h3 className="text-center py-4">
                Travel Facts in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>
              <div className="row">
                <div
                  className="col-12 p-4"
                  dangerouslySetInnerHTML={{ __html: SSRDestination?.travelfact }}
                />
              </div>
            </Tab>
            <Tab eventKey="WhereTo" title="Where to go">
              <h3 className="text-center py-4">
                Where to go in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>
              <div className="row">
                {SSRDestination.where.length > 0 &&
                  SSRDestination.where.map(item => (
                    <div
                      key={item?.id.toString()}
                      className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                      <PackageTypeItem
                        id={item.id}
                        title={item.title}
                        thumbnail={PUBLIC_API + item.thumbnail}
                      />
                    </div>
                  ))}
              </div>
              <div className="row">
                {/* <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
            </Tab>
            <Tab eventKey="BestPlaces" title="The Best Places to Visit">
              <h3 className="text-center py-4">
                The Best Places to Visit in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>
              <div className="row">
                {SSRDestination.packages.length > 0 &&
                  SSRDestination.packages.map(item => (
                    <div
                      key={item?.id.toString()}
                      className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                      <PackageItem
                        title={item.title}
                        days={item.days}
                        slug={item.slug}
                        type={item.type_name}
                        thumbnail={PUBLIC_API + item.thumbnail}
                        featured={item.featured}
                        packagetypes={packagetypes}
                        activity={activities.map(act =>
                          act.id.toString() === item.activity_name.toString()
                            ? act.label
                            : null,
                        )}
                      />
                    </div>
                  ))}
              </div>
            </Tab>
            <Tab eventKey="Best Time to Visit" title="Best time to visit">
              <h3 className="text-center py-4">Best time to visit </h3>
            </Tab>
            <Tab eventKey="BestPlace" title="Travel Advice">
              <h3 className="text-center py-4">Travel Advice</h3>
            </Tab>
            <Tab eventKey="Faqs" title="FAQs">
              <h3 className="text-center py-4">FAQs</h3>

              {SSRDestination?.faqs ? <Faqs faqs={SSRDestination?.faqs} /> : null}
            </Tab>
          </Tabs>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/everyone/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const fetchDestination = await fetch(`${PUBLIC_API}/destination/${params.slug}`);
  const SSRDestination = await fetchDestination.json();

  const fetchpackages = await fetch(`${PUBLIC_API}/packages/${params.slug}`);
  const SSRPackages = await fetchpackages.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      SSRDestination,
      SSRPackages,
      destinations,
      packagetypes,
      interests,
      notifications,
    },
    revalidate: 1,
  };
}

export default Search;
