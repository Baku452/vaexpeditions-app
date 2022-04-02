/* eslint-disable max-len */
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
        <title>Va Expeditions - Our Core Values</title>
        <meta
          name="description"
          content="We fully believe in our people.We promote positive change. 
          We are connected worldwide!.We take care of our environment. "
        />
      </Head>
      <Banner description="" image="/images/our-values.jpg" alt="weq" />
      <section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5 pt-5">
          <div className="row pt-5 pb-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1 align-self-center ">
                  <h2 className="title">We fully believe in our people. </h2>
                  <p className="m-0 fs-17 lh-34">
                    All of the people who work in our company have a voice and take part
                    in all the decision-making processes. Every member of our team is a
                    local expert in their area and are involved in and fully participate
                    in the development of our projects. We value family, tradition and
                    share our passion about what each magical destination has to offer. We
                    are committed to being extraordinary!
                  </p>
                  <p className="m-0 fs-17 lh-34">
                    We connect our passengers through travel experiences which will
                    transform their lives through authenticity, innovation and dedication.
                    Our whole purpose is to offer a service that goes above and beyond the
                    expectations of the client and which is based on excellence and high
                    standards.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img
                    alt="Our Core Values"
                    src="/images/our-purpose/our-core-values/we-believe-in-our-people.jpg"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img
                    alt="Our core Values"
                    src="/images/our-purpose/our-core-values/we-promote-positive-change.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2 align-self-center ">
                  <h2 className="title">We promote positive change. </h2>
                  <p className="m-0 fs-17 lh-34">
                    We have an established and resilient operational system which helps us
                    to anticipate, prevent, recover and adapt to the circumstances in the
                    face of unexpected events. Through teamwork, we make sure that
                    improvements and renovations are continually taking place to help us
                    achieve our aims.
                  </p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1 align-self-center ">
                  <h2 className="title">We are connected worldwide! </h2>
                  <p className="m-0 fs-17 lh-34">
                    We form part of a global community of travellers, who respect and
                    integrate ourselves in tourism and the places where we operate.
                    Through our commitment to social projects, we always welcome the
                    differences which make us human, to generate a deeper connection with
                    both tourists and local people alike.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img
                    alt="Our Core Values"
                    src="/images/our-purpose/our-core-values/we-are-connected-to-the-world.jpg"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img
                    alt="Our Core Values"
                    src="/images/our-purpose/our-core-values/we-take-care-of-our-planet.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2 align-self-center ">
                  <h2 className="title">We take care of our environment.</h2>

                  <p className="m-0 fs-17 lh-34">
                    We are a company that is conscious about the environment and we are
                    dedicated to its conservation by using sustainable and renewable
                    resources where possible to reduce the potential negative impact on
                    the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardBox items={ourpurpose} />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
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
    revalidate: 60,
  };
}
