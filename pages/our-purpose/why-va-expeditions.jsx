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
    notifications={notifications}>
      <Head>
        <title>
        Va Expeditions - Why Va Expeditions
        </title>
        <meta
          name="description"
          content="We have 15 years of designing travel itineraries for over 6000 happy travellers, 
          throughout a number of Central and South American destinations and with 100% satisfaction!"
        />
      </Head>
      <Banner
        description=""
        image="/images/why-chose-va.jpg"
        alt="weq"
      />

      <section id="more">
        <div className=" containerBox  align-items-center">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
            <h2 className=" font-weight-bold text-center">Why Va Expeditions?</h2>
              <div className="row mb-5">
                  <p>
                  We have 15 years of designing travel itineraries for over 6000 happy travellers, 
                  throughout a number of Central and South American destinations and with 100% satisfaction!
                </p>
                 <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">Expand your horizons.</h2>
                  <p className="m-0 fs-17 lh-34">
                  Transform the way you think about life, reconnect with your essence and discover a new way 
                  to see the world by immersing yourself in magnificent cultures and countries via our innovative 
                  itineraries which incorporate freedom, emotion and flexibility.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/expand-your-horizons.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/reconnect-with-the-planet.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3 align-self-center">
                  <h2 className="title">Reconnect with the planet.
                  </h2>
                  <p className="m-0 fs-17 lh-34">We have reinvented the definition of luxury to promote your well-being, by combining 
                  cultural immersion activities, with stunning destinations and experiences, specially designed to promote your physical 
                  and mental well- being, allowing you to reconnect to the essence of the real world.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">Local Experiences.</h2>
                  <p className="m-0 fs-17 lh-34">
                  It is important for us to share our local knowledge and authentic true essence of this magical region by 
                  sharing insight into local cuisine, fascinating folklore and impressive history. Immersive experiences allow you to 
                  experience hands-on the different cultures, people and ways of life of the fascinating and friendly people of Central 
                  and South America for an authentic and insightful experience.
                    </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/local-experience.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/attention-24-7.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">24/7 service </h2>
                  <p className="m-0 fs-17 lh-34">
                  Be safe in the knowledge that we are always there for you.  There is always one of our travel specialists to answer any questions 
                  you may have or help you resolve any issues……  around the clock! Send us an E mail or give us a call 24 hours a day, 7 days per week 
                  and we will happily answer any concerns you have.
                    </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">100% Guaranteed departures.</h2>
                  <p className="m-0 fs-17 lh-34">
                  At Va Expeditions, all departures are guaranteed. Once you have paid for your vacation, we will not change or cancel your trip unless 
                  your personal safety is at risk or exceptional circumstances which do not allow for the smooth running of your trip, such as extreme weather 
                  conditions or civil unrest, for example.
                    </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/guaranteed-departures.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/guarantee-of-best-quality.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">Best Quality Guarantee.</h2>
                  <p className="m-0 fs-17 lh-34">
                  We are totally committed to the highest standard of service possible as we as your security and safety during your vacation. Our staff are all 
                  highly trained professionals in the travel industry who will look after you every step of the way!
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3 align-self-center ">
                  <h2 className="title">We are worldwide connected!</h2>
                  <p className="m-0 fs-17 lh-34">
                  We form part of a global community of international travellers who are socially and culturally aware. We help travellers 
                  connect and integrate with local communities during their trip, always with respect, cultural sensitivity and appreciation 
                  for a wholesome and deeper connection and fulfilling our social commitment policies.
                    </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/we-are-worldwide-connected.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/responsible-travel.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3 align-self-center">
                  <h2 className="title">Responsible travel.</h2>
                  <p className="m-0 fs-17 lh-34">
                  We travel with a focus on positive impact wherever we go!  We help empower local, indigenous communities, women and children 
                  through specialized training sessions, using carefully selected service providers in each destination and direct contribution 
                  to a number of social projects in each region and country we visit. We are 100% committed to working in a socially and 
                  environmentally conscientious manner and aim to produce positive change by our presence.
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
