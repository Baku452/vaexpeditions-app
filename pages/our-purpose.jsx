import Head from 'next/head';

import { Banner, CardBox } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Valencia Travel - Who we are, tourism services for Inca Trail Tours</title>
        <meta
          name="description"
          content="We strive to connect people's lives. 
            Through each trip, we seek to create a
            global community of travelers, free from fear and aware of a sustainable
            future"
        />
      </Head>
      <Banner
        description="Connecting humanity with the essence of the world"
        image="/images/portada our purpose.jpg"
        alt="Our Purpose - Valencia Travel"
      />

      <section
        id="ourPurpose"
        className="row containerBox text-justify py-5 align-items-center">
        <div className="col-12 col-md-6 p-3 mb-3">
          <h1 className="title">Our Purpose</h1>
          <p className="m-0 fs-16 lh-34">
            We strive to connect people's lives. Through each trip, we seek to create a
            global community of travelers, free from fear and aware of a sustainable
            future.
          </p>
          <p />
          <p className="m-0 fs-16 lh-34">
            With 12 years of experience in the industry, we are passionate local experts
            with a deep and genuine love for our culture. We love to share the natural
            wonders of our country and, at the same time, connect with the global
            community of world travelers.
          </p>
        </div>
        <div className="col-12 d-none d-md-block p-3 col-md-6 align-self-center">
          <img src="images/our-purpose-min.jpg" alt="Our Purpose" className="img-fluid" />
        </div>
      </section>
      <section
        id="vision"
        className="containerBox text-justify row align-items-center pb-5">
        <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
          <img
            alt="Valencia Travel visión"
            src="images/vision.jpg"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-5 order-1 order-md-2">
          <h2 className="title m-0 fs-20 font-weight-bold mb-4">Our Vision</h2>

          <p className="m-0 fs-16 lh-34">
            We aim to place ourselves as the Peruvian tourism company with the greatest
            presence in the national and international market, with a people-first ethic
            focused on customer satisfaction and the promotion of sustainable tourism.
          </p>
        </div>
      </section>
      <section
        id="mision"
        className="containerBox text-justify row align-items-center pb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-5 order-1">
          <h2 className="title m-0 fs-20 font-weight-bold mb-4">Our Mision</h2>
          <p className="m-0 fs-16 lh-34">
            We strive to create innovative travel experiences that motivate you to explore
            the incredible geographic diversity of Peru, and at the same time learn from
            its historical and cultural legacy, providing a personalized and responsible
            service that contributes to the development of both the community and the
            travel sector.
          </p>
        </div>
        <div className="col-12 col-md-6 mb-5 order-2 align-self-center">
          <img
            alt="Valencia Travel misión"
            src="images/mision.jpg"
            className="img-fluid"
          />
        </div>
      </section>

      <CardBox items={ourpurpose} />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const ourpurposeResponse = await fetch(`${PUBLIC_API}/ourpurpose/list/`);
  const ourpurpose = await ourpurposeResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      packagesAll,
    },
    revalidate: 1,
  };
}
