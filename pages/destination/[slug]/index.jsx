/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  FaqsDestinations,
  GridTravelAdvice,
  Hero3,
  Highligths,
  NavBarFixed,
  PackageItem,
  WhereToItem,
} from '@/components/index';
import { activities, navDestinations } from '@/core/index';
import { Base } from '@/layouts/index';

import styles from '../index.module.scss';

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
      notifications={notifications}
      pixels={600}>
      <Head>
        <title>{SSRDestination?.title} - VA Expeditions</title>
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
      <section id="overview" className="p-3 containerBox ">
        {/* <h2 className="title py-4">Overview of {SSRDestination.title}</h2> */}
        <div className="containerBox py-10 ">
          <h2 className="title2 py-4">OVERVIEW</h2>
          <div
            className={`lh-29 text-center ${styles.text}`}
            dangerouslySetInnerHTML={{ __html: SSRDestination?.content }}
          />
        </div>
      </section>
      <section id="top-tours" className="py-5 px-3 background2  overflow-hidden">
        <div className="containerBox">
          <h2 className="title2">Top Rated Tours</h2>
          <div className="row py-4">
            {SSRPackages.length > 0 &&
              SSRPackages.map(item => (
                <div key={item.slug} className=" col-12 col-sm-6 col-lg-4 mb-4">
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
          <div className="text-center mx-auto fs-26 link fw-bold">
            <Link href={`/destination/${SSRDestination.slug}/search`}>
              <a className={` ${styles.boton} link p-2 my-4`} type="button">
                SHOW MORE
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="where-to-go" className=" py-5">
        <h2 className="title2 py-4">
          Where to go in{' '}
          <span className="line fw-semi-bold">{SSRDestination?.title}</span>
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
      <section id="highlights" className=" py-5 background2">
        <div className="containerBox">
          <Highligths item={SSRDestination?.highligths} />
        </div>
      </section>
      <section id="best-time">
        <div className="containerBox overflow-auto">
          <h2 className="title2 py-4">Best time to visit </h2>
          <div dangerouslySetInnerHTML={{ __html: SSRDestination?.bestTime }} />
        </div>
      </section>
      <section id="travel-facts" className="py-5">
        <div className="col-12">
          <h2 className=" title2 text-center py-4">
            Travel Facts in{' '}
            <span className="line fw-semi-bold"> {SSRDestination?.title}</span>
          </h2>
          <section className={`row containerBox  align-items-cente ${styles.text}`}>
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
      <section id="travel-advice" className="background2 py-5 px-3">
        <div className="containerBox">
          <h2 className="title2 py-4">Travel Advice</h2>
          <GridTravelAdvice items={SSRDestination?.advice} />
        </div>
      </section>
      <section id="faqs" className="py-5">
        <div className={`containerBox ${styles.text}`}>
          <h2 className="title2 py-4">FAQs</h2>
          <div className={` ${styles.text} background2 p-1`}>
            {SSRDestination?.faqs ? (
              <FaqsDestinations faqs={SSRDestination?.faqs} />
            ) : null}
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const fetchDestination = await fetch(`${PUBLIC_API}/destinations/${params.slug}`);
  const SSRDestination = await fetchDestination.json();

  const fetchpackages = await fetch(`${PUBLIC_API}/packages/featured/${params.slug}`);
  const SSRPackages = await fetchpackages.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
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
    revalidate: 60,
  };
}

export default Destination;
