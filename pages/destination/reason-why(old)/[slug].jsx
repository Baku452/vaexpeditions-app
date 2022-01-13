/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AtypicalItem, Slide } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({
  SSRDestination,
  destinations,
  packagetypes,
  interests,
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
      <Slide images={images} navigation pagination={false} isHome />

      <section id="tours_all">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5 pb-5">
              <h1 className="text-center ">
                Reason why <span className="line fw-bold">{SSRDestination.title}</span>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-11 mx-auto">
              <div className="row">
                {SSRDestination.reasons.length > 0 &&
                  SSRDestination.reasons.map(item => (
                    <div
                      key={item?.id.toString()}
                      className="d-flex col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <AtypicalItem
                        id={item.id}
                        title={item.title}
                        content={item.summary}
                        slug={{
                          pathname: '/search',
                          query: {
                            destination: SSRDestination.id,
                            interests: item.interest,
                          },
                        }}
                        thumbnail={PUBLIC_API + item.thumbnail}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
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

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      SSRDestination,
      destinations,
      packagetypes,
      interests,
      notifications,
    },
    revalidate: 1,
  };
}

export default Search;
