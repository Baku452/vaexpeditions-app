/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FaqsDestinations, PackageItem, Slide, WhereToItem } from '@/components/index';
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

      <section id="destination" className="py-4">
        <div className="col-12 containerBox">
          <Tabs defaultActiveKey="Overview">
            <Tab eventKey="Overview" title="Overview">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 text-center py-4">
                    Overview of {SSRDestination.title}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: SSRDestination?.content }} />
                </div>
              </div>
            </Tab>

            <Tab eventKey="TravelFacts" title="Travel Facts">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="py-4 title2">
                    Travel Facts in{' '}
                    <span className="line font-weight-semibold"> {SSRDestination?.title}</span> 
                  </h2>
                  <section className="row containerBox  lign-items-center">
                  
                    <div className="col-12 d-none d-md-block col-md-6 align-self-center" dangerouslySetInnerHTML={{ __html:SSRDestination.travelfact }} />
                    <div className="col-12 d-none d-md-block col-md-6  "> 
                    <img  className="img-fluid" src={PUBLIC_API+SSRDestination?.imageTraveFact}></img>
                    </div>
               
              </section>
              </div>
              </div>
            </Tab>

            <Tab eventKey="WhereTo" title="Where to go">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 py-4">
                    Where to go in{' '}
                    <span className="line font-weight-semibold">
                      {SSRDestination?.title}
                    </span>
                  </h2>
                  <div className="row">
                    {SSRDestination.where
                      ? SSRDestination.where.map(item => (
                          <WhereToItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            items={item.items}
                            summary={item.summary}
                            thumbnail={PUBLIC_API + item.image}
                            slug={item.slug}
                          />
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Experiencies" title={`${SSRDestination?.title} Experiencies`}>
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 py-4">
                    Our {SSRDestination?.title} Experiencies
                  </h2>
                  <div className="row py-4">
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
                </div>
              </div>
            </Tab>
            <Tab eventKey="Best Time to Visit" title="Best time to visit">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 py-4">Best time to visit </h2>
                  <div dangerouslySetInnerHTML={{ __html: SSRDestination?.bestTime }} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="BestPlace" title="Travel Advice">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 py-4">Travel Advice</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: SSRDestination?.travelAdvice }}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="Faqs" title="FAQs">
              <div className="row p-4">
                <div className="col-12">
                  <h2 className="title2 py-4">FAQs</h2>
                </div>
              </div>

              {SSRDestination?.faqs ? (
                <FaqsDestinations faqs={SSRDestination?.faqs} />
              ) : null}
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
