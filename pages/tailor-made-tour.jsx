/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import Head from 'next/head';
import { useState } from 'react';

// Error de immportac
// import { Banner, ContactUsForm } from '@/components/index';
// Linea agregada de componente Contact
import { Banner, TailorForm, TailorWork, WhyTailor } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TailorMade({
  destinations,
  packagetypes,
  tailors,
  notifications,
  popups,
  packagesAll,
}) {
  const [show, setShow] = useState(false);
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      popups={popups}
      packagesAll={packagesAll}>
      <Head>
        <title>Peru Travel Tips, Facts, and Information | Va Expeditions</title>
      </Head>
      <Banner
        description="Design your ultimate travel itinerary with our free tailor-made service!"
        image="/images/tailor-made.jpg"
        alt="weq"
      />

      <section id="descripion">
        <div className="containerBox">
          <div className="row pt-5">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-12">
                  <p className="fs-16 pb-5 m-0 text-justify">
                   Authentic, real life experiences are hard to find by performing a Google search!
                   Allow us to help you design your perfect adventure with flexibility, freedom and 
                   unique experiences to do exactly what you are interested in! Far removed from the 
                   well-trodden paths and large tour groups, we will take you to remote communities 
                   and destinations in a responsible and sustainable way, for unique adventures and 
                   the experience of a lifetime. A vacation with Va Expeditions is a personalized 
                   experience from the moment you first contact us until you are safe and sound in
                   the comfort of your home. Our expert travel designers will help you take maximum 
                   advantage of your free time, always with your personal budget in mind. All you
                   need to do is to start dreaming about your ideal destination and we will take
                   care of the rest!
                  <br/>
                  <br/>
                  Call us today or complete the contact form and one of our experts will be touch 
                  before you know it!
                  </p>
                
              
                </div>
                <div className="col-12 col-md-3 mx-auto mb-5">
                  <a
                    data-toggle="collapse"
                    role="button"
                    onClick={() => setShow(v => !v)}
                    aria-expanded="false"
                    className="btn btn-primary w-100">
                    Enquire now
                  </a>
                </div>

                {show && (
                  <div className="w-100">
                    <TailorForm
                      destinations={destinations}
                      title={false}
                      types={packagetypes}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyTailor tailors={tailors} />
      <TailorWork />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const tailorsResponse = await fetch(`${PUBLIC_API}/tailors/list/`);
  const tailors = await tailorsResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();
  return {
    props: {
      destinations,
      packagetypes,
      tailors,
      notifications,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default TailorMade;
