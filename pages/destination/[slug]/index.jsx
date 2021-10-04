/* eslint-disable react/no-danger */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  FaqsDestinations,
  GridTravelAdvice,
  Hero3,
  NavBarFixed,
  PackageItem,
  ShowMore,
  WhereToItem,
} from '@/components/index';
import { activities, navDestinations } from '@/core/index';
import { Base } from '@/layouts/index';
import styles from './../index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Destination({
  SSRDestination,
  destinations,
  packagetypes,
  SSRPackages,
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
        <title>{SSRDestination?.title} Destination | VA Expeditions</title>
        <meta name="description" content={SSRDestination?.summary} />
      </Head>
      <Hero3
        title={SSRDestination.title}
        images={SSRDestination.images}
        navigation
        pagination={false}
        isHome
        isDestination
      />

      <NavBarFixed items={navDestinations} />
      <section id="overview" className="py-5 containerBox">
        {/* <h2 className="title py-4">Overview of {SSRDestination.title}</h2> */}
        <div className="containerBox">
          <h2 className="title2 py-4">OVERVIEW</h2>
          <div
            className="lh-29 text-center"
            dangerouslySetInnerHTML={{ __html: SSRDestination?.content }}
          />
        </div>
      </section>
      <section id="top-tours" className="background2 py-5 overflow-hidden">
        <div className="containerBox">
          <h2 className="title2">Top Rated Tours</h2>
          <div className="row py-4">
            {SSRPackages.length > 0 &&
              SSRPackages.map(item => (
                <div key={item.slug} className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                  <PackageItem
                    key={item.slug}
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
          <div className="text-center mx-auto fs-26 link font-weight-bold">
<<<<<<< HEAD
          <Link  href={`/destination/${SSRDestination.slug}/search`} >
              <a className="link" >
              <button className={` ${styles.boton} p-2 my-4`} type="button">
                SHOW MORE
             </button>
=======
            <Link replace href={`/destination/${SSRDestination.slug}/search`}>
              <a className="link">
                <ShowMore />
>>>>>>> master
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="travel-facts" className="py-5">
        <div className="col-12">
          <h2 className=" title2 text-center py-4">
            Travel Facts in{' '}
            <span className="line font-weight-semibold"> {SSRDestination?.title}</span>
          </h2>
          <section className="row containerBox  align-items-center">
            <div
              className={`col-12 ${
                SSRDestination?.imageTraveFact.toString() !== '/media/null'
                  ? 'col-lg-6'
                  : ''
              } align-self-center`}
              dangerouslySetInnerHTML={{ __html: SSRDestination.travelfact }}
            />
            {SSRDestination?.imageTraveFact.toString() !== '/media/null' ||
            !SSRDestination?.imageTraveFact ? (
              <div className="col-12 col-lg-6 align-self-center">
                <img
                  alt="Travel Fact"
                  className="img-fluid"
                  src={PUBLIC_API + SSRDestination?.imageTraveFact}
                />
              </div>
            ) : null}
          </section>
        </div>
      </section>
      <section id="where-to-go" className="background2 py-5">
        <h2 className="title2 py-4">
          Where to go in{' '}
          <span className="line font-weight-semibold">{SSRDestination?.title}</span>
        </h2>
        <div className="containerBox row">
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
      </section>
      <section id="best-time">
        <div className="containerBox">
          <h2 className="title2 py-4">Best time to visit </h2>
          <div dangerouslySetInnerHTML={{ __html: SSRDestination?.bestTime }} />
        </div>
      </section>
      <section id="travel-advice" className="background2 py-5">
        <div className="containerBox">
          <h2 className="title2 py-4">Travel Advice</h2>
          <GridTravelAdvice items={SSRDestination?.advice} />
        </div>
      </section>
      <section id="faqs" className="py-5">
        <div className="containerBox">
          <h2 className="title2 py-4">FAQs</h2>
          {SSRDestination?.faqs ? <FaqsDestinations faqs={SSRDestination?.faqs} /> : null}
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

  const fetchpackages = await fetch(`${PUBLIC_API}/packages/featured/${params.slug}`);
  const SSRPackages = await fetchpackages.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      SSRDestination,
      SSRPackages,
      destinations,
      packagetypes,
      notifications,
    },
    revalidate: 1,
  };
}

export default Destination;
