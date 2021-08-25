/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { DestinationItem, PackageTypeItem, Slide, Weather } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({
  country: SSRCountry,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
}) {
  const images = [
    {
      id: SSRCountry.id,
      alt: SSRCountry.name,
      name: SSRCountry.name,
      image: SSRCountry.original,
    },
  ];

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
      <Slide
        title={SSRCountry.name}
        images={SSRCountry.images}
        navigation
        pagination={false}
        isHome
        isDestination
      />
      <Head>
        <title>Va Expeditions - {SSRCountry.name}</title>
        <meta name="Description" content="Explore Multidestinations with VAExpeditions" />
      </Head>
      <section id="tours_all">
        <div className="containerBox">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 p-4">
                  <Tabs defaultActiveKey="Overview">
                    <Tab eventKey="Overview" title="Overview">
                      <div className="row">
                        <div
                          className="col-12 p-4"
                          dangerouslySetInnerHTML={{ __html: SSRCountry?.content }}
                        />
                      </div>
                      <div className="row">
                        {SSRCountry.destinations.length > 0 &&
                          SSRCountry.destinations.map(item => (
                            <div
                              key={item?.id.toString()}
                              className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                              <DestinationItem
                                title={item.title}
                                summary={item.summary}
                                slug={{
                                  pathname: `/destination/${item.slug}`,
                                  // query: {
                                  //   destination: item.id,
                                  // },
                                }}
                                thumbnail={PUBLIC_API + item.thumbnail}
                              />
                            </div>
                          ))}
                      </div>
                    </Tab>
                    <Tab eventKey="Holiday" title="Holiday Types">
                      <h3 className="text-center py-4">
                        Holiday Types in{' '}
                        <span className="line font-weight-semibold">
                          {SSRCountry?.name}
                        </span>
                      </h3>
                      <div className="row">
                        {SSRCountry.package_type.length > 0 &&
                          SSRCountry.package_type.map(item => (
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
                    </Tab>
                    <Tab eventKey="Tour" title={`Tour in ${SSRCountry?.name}`}>
                      <h3 className="text-center py-4">
                        Tour in{' '}
                        <span className="line font-weight-semibold">
                          {SSRCountry?.name}
                        </span>
                      </h3>
                      <div className="row">
                        {SSRCountry.destinations.length > 0 &&
                          SSRCountry.destinations.map(item => (
                            <div
                              key={item?.id.toString()}
                              className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                              <DestinationItem
                                title={item.title}
                                summary={item.summary}
                                slug={{
                                  pathname: '/search',
                                  query: {
                                    destination: item.id,
                                  },
                                }}
                                thumbnail={PUBLIC_API + item.thumbnail}
                              />
                            </div>
                          ))}
                      </div>
                    </Tab>

                    <Tab eventKey="Reason" title={`Reason why ${SSRCountry?.name}`}>
                      <h3 className="text-center py-4">
                        Reason why{' '}
                        <span className="line font-weight-semibold">
                          {SSRCountry?.name}
                        </span>
                      </h3>

                      <div className="row">
                        {SSRCountry.destinations.length > 0 &&
                          SSRCountry.destinations.map(
                            item =>
                              item.is_why_reason && (
                                <div
                                  key={item?.id.toString()}
                                  className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                                  <DestinationItem
                                    title={item.title}
                                    summary={item.summary}
                                    slug={`/destination/reason-why/${item.slug}`}
                                    thumbnail={PUBLIC_API + item.thumbnail}
                                  />
                                </div>
                              ),
                          )}
                      </div>
                    </Tab>
                    <Tab eventKey="What" title="What To Do">
                      <h3 className="text-center pb-5">
                        What To Do{' '}
                        <span className="line font-weight-semibold">
                          {SSRCountry?.name}
                        </span>
                      </h3>

                      <div className="row">
                        {SSRCountry.destinations.length > 0 &&
                          SSRCountry.destinations.map(
                            item =>
                              item.is_what_to_do && (
                                <div
                                  key={item.id.toString()}
                                  className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                                  <DestinationItem
                                    title={item.title}
                                    summary={item.summary}
                                    slug={`/destination/what-to-do/${item.slug}`}
                                    thumbnail={PUBLIC_API + item.thumbnail}
                                  />
                                </div>
                              ),
                          )}
                      </div>
                    </Tab>

                    <Tab eventKey="When" title="When To Go">
                      <h3 className="text-center pb-5">
                        When To Go{' '}
                        <span className="line font-weight-semibold">
                          {SSRCountry?.name}
                        </span>
                      </h3>

                      <div className="row">
                        {SSRCountry.destinations.length > 0 &&
                          SSRCountry.destinations.map(destination => (
                            <div
                              key={destination?.id.toString()}
                              className="col-12 text-center">
                              <h3>{destination.title}</h3>
                              <Weather weathers={destination.weathers} />
                            </div>
                          ))}
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/countries/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const countryResponse = await fetch(`${PUBLIC_API}/countries/${params.slug}`);
  const country = await countryResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      country,
      destinations,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default Search;
