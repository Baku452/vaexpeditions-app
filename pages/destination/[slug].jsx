import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { DestinationItem, Faqs, Slide, Weather } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({
  SSRDestination,
  destinations,
  packagetypes,
  // interests,
  notifications,
}) {
  const images = [
    {
      id: SSRDestination.id,
      alt: SSRDestination.title,
      name: `${SSRDestination.title} ${SSRDestination.sub_title}`,
      image: SSRDestination.original,
    },
  ];

  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
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
              {/* <div className="row">
                {SSRDestination.package_type.length > 0 &&
                  SSRDestination.package_type.map(item => (
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
              </div> */}
            </Tab>
            <Tab eventKey="WhereTo" title="Where to go">
              <h3 className="text-center py-4">
                Where to go in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>
              {/* <div className="row">
                {SSRDestination.package_type.length > 0 &&
                  SSRDestination.package_type.map(item => (
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
              </div> */}
            </Tab>
            <Tab eventKey="BestPlaces" title="The best places to visit">
              <h3 className="text-center py-4">
                The best places to visit in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>
              <div className="row">
                {SSRDestination.packages.length > 0 &&
                  SSRDestination.packages.map(item => (
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
            <Tab eventKey="HowTo" title={`The best places to visit `}>
              <h3 className="text-center pb-5">The best places to visit </h3>

              {/* <div className="row">
                {SSRDestination.packages.length > 0 &&
                  SSRDestination.packages.map(
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
              </div> */}
            </Tab>
            <Tab eventKey="BestPlace" title="The best places to visit">
              <h3 className="text-center pb-5">
                The best places to visit in{' '}
                <span className="line font-weight-semibold">{SSRDestination?.title}</span>
              </h3>

              {/* <div className="row">
                {SSRDestination.packages.length > 0 &&
                  SSRDestination.packages.map(
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
              </div> */}
            </Tab>
            <Tab eventKey="Faqs" title="FAQs">
              <h3 className="text-center pb-5">FAQs</h3>

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
