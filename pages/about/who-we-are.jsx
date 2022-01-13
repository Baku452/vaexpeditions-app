import Head from 'next/head';

import { Hero, PageContent, TravelWithPurpose } from '@/components/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function WhoWeAre({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
  packagesAll,
  pagecontent,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      pixels={700}>
      <Head>
        <title>Who We Are - Va Expeditions</title>
        <meta
          name="description"
          content="Who we are - About Us - Our Purpose - Our Philosophy - 
          Our Sustainability efforts - Va Expeditions History - Reasons to choose us"
        />
      </Head>

      <Hero title="Who we are" image="/images/portada our purpose.jpg" alt="who we are" />

      <div className={`containerBox ${styles.anchor} px-4 px-lg-5 px-xl-0 lh-34`}>
        <section id="aboutUs" className="row pb-3 pt-5 d-block">
          <div className="col-12 text-center">
            <h2 className="titleUnderline fs-30 text-center">About Us</h2>
          </div>
        </section>

        <section
          id="OurPurpose"
          className="row containerBox text-justify align-items-center">
          <section
            id="ourPurpose"
            className="row containerBox text-justify py-3 align-items-center">
            <div className="col-12 col-md-6 p-3 mb-3">
              <h2 className="title m-0 fs-20 fw-bold mb-4">Our Purpose</h2>
              <p className="m-0 fs-16 lh-34">
                Here at Va Expeditions, we strive to unite people through travel. Each
                itinerary is especially designed to create a global community of
                travellers, free to immerse themselves in different cultures and ways of
                life, free from fear and with a focus on creating a sustainable future.
              </p>
            </div>
            <div className="col-12  p-3 col-md-6 align-self-center">
              <img
                src="/images/our-purpose-min.jpg"
                alt="Our Purpose"
                className="img-fluid"
              />
            </div>
          </section>

          <section
            id="vision"
            className="containerBox text-justify row align-items-center pb-5">
            <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
              <img alt="Va visión" src="/images/vision2.jpg" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-5 order-1 order-md-2">
              <h2 className="title m-0 fs-20 fw-bold mb-4">Our Vision</h2>
              <p className="m-0 fs-16 lh-34">
                Our aim is to position ourselves as one of the leaders in the
                international travel market with a people -first ethic, basic on customer
                satisfaction, as well as ethical and sustainable tourism.
              </p>
            </div>
          </section>
          <section
            id="mision"
            className="containerBox text-justify row align-items-center pb-5">
            <div className="col-12 col-md-6 mb-3 mb-md-5 order-1">
              <h2 className="title m-0 fs-20 fw-bold mb-4">Our Mission</h2>
              <p className="m-0 fs-16 lh-34">
                To design creative and innovative travel experiences to motivate people to
                explore the incredible natural diversity of Central and South America, as
                well as the cultural and historical magnificence of its countries,
                positively contributing to local communities and travellers to the
                continent.
              </p>
            </div>
            <div className="col-12 col-md-6 mb-5 order-2 align-self-center">
              <img alt="Va mission" src="/images/mision2.jpg" className="img-fluid" />
            </div>
          </section>
        </section>

        <section id="OurPhilosophy" className="row pb-5">
          <PageContent page={pagecontent[1]} ourpurpose={ourpurpose} />
        </section>

        <section id="travelWithPurpose" className="row py-5 ">
          <TravelWithPurpose />
        </section>

        <section id="OurHistory" className="row py-5">
          <div className="col-12 mx-auto">
            <h2 className=" titleUnderline fs-30 text-center">Va Expeditions History</h2>
            <div className="row mb-5 pt-5">
              <div
                className="col-12 mb-5 col-lg-6 order-1 order-md-1 
              col-md-12 m-0 fs-17 lh-34 text-fluid align-self-center">
                <p>
                  Va Expeditions was founded in 2009. The company came about as a dream of
                  the Hurtado Valencia brothers to create a business venture in the world
                  of tourism. René, a professional guide and the actual CMO of the
                  Company, Amílcar, a philosophy student and assistant manager of the
                  company come from a relatively large family from the province of
                  Chumbivilcas, found 8 hours away from Cusco, Peru. The brothers had a
                  vision to create the best possible travel agency in the city of Cusco;
                  an agency that connects the lives of people through travel, to form a
                  global community free of fear of the unknown and conscious about the
                  planet. The name of the company was inspired by their mothers’ surname,
                  Valencia, originating from Spain.
                </p>
                <p>
                  We connect our passengers through travel experiences which will
                  transform their lives through authenticity, innovation and dedication.
                  Our whole purpose is to offer a service that goes above and beyond the
                  expectations of the client and which is based on excellence and high
                  standards.
                </p>
              </div>
              <div className="col-12 col-lg-6 mb-5 order-2 col-md-12 align-self-center">
                <img
                  src="/images/llamas-cruzadas-2.jpg"
                  alt="Travel History"
                  className="img-fluid llama"
                />
              </div>

              <div
                className="col-12 col-lg-6 mb-5 order-4 
              order-lg-3 col-md-12 align-self-center">
                <img
                  src="/images/ReneValTra.jpg"
                  alt="Travel History"
                  className="img-fluid llama"
                />
              </div>

              <div
                className="col-12 mb-5 col-lg-6 order-3 order-lg-4 
              col-md-12 m-0 fs-17 lh-34 text-fluid align-self-center">
                <p>
                  We started with a small office space and an enormous dream. Now our
                  company is one of the leaders in the tourism industry and renowned for
                  its quality of service, technology and the unique experiences that we
                  offer.
                </p>
                <p>In the words of Rene Valencia:</p>
                <p>
                  "Our Brand identity emerged from an idea that came about from the
                  numerous visits to Machu Picchu working as a tour guide and Tour
                  conductor. I had the opportunity to photograph the many archaeological
                  sites in the area. “It is impossible to NOT ask yourself about why Machu
                  Picchu is here. There are so many possible places that this amazing site
                  could have been built and create an empire that controlled the territory
                  from Chile to Ecuador.
                </p>
                <p>
                  For what unfathomable reason did the Incas decide to build this site
                  here, given the difficulty of the geography of the region, 500 metres
                  above the River Urubamba? My curiosity as to why these magnificent
                  monuments and archaeological sites came about have led me to travel
                  through most of Latin America to understand why ancient civilizations
                  across the continent can give us the perfect insight into history,
                  culture and the origins of ancient civilizations. These days I can
                  combine these incredible sites with idyllic beaches, fascinating
                  cultures, abundant rainforests and delicious cuisine, all through
                  Central and South America and I consider myself to be lucky and blessed
                  to have been born in this part of the world.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="WhyVaExpeditions" className="row align-items-center m-0 pb-5">
          <div className="col-12 pb-5 text-align-center">
            <h2 className="titleUnderline fs-30 text-center">Reasons to choose us</h2>
          </div>
          <div className="row mb-5">
            <p className="m-0 fs-17 lh-34 pb-3">
              We have 15 years of designing travel itineraries for over 6000 happy
              travellers, throughout a number of Central and South American destinations
              and with 100% satisfaction!
            </p>
            <div className="col-12 col-md-6 mb-3 align-self-center ">
              <h2 className="title">Expand your horizons.</h2>
              <p className="m-0 fs-17 lh-34">
                Transform the way you think about life, reconnect with your essence and
                discover a new way to see the world by immersing yourself in magnificent
                cultures and countries via our innovative itineraries which incorporate
                freedom, emotion and flexibility.
              </p>
            </div>
            <div className="col-12 col-md-6 m-b-25">
              <img
                src="/images/our-purpose/why-valencia/expand-your-horizons.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
              <img
                src="/images/our-purpose/why-valencia/reconnect-with-the-planet.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-md-6 mb-3 mb-md-5 
            order-1 order-md-2 align-self-center">
              <h2 className="title">Reconnect with the planet.</h2>
              <p className="m-0 fs-17 lh-34">
                We have reinvented the definition of luxury to promote your well-being, by
                combining cultural immersion activities, with stunning destinations and
                experiences, specially designed to promote your physical and mental well-
                being, allowing you to reconnect to the essence of the real world.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 mb-3 align-self-center ">
              <h2 className="title">Local Experiences.</h2>
              <p className="m-0 fs-17 lh-34">
                It is important for us to share our local knowledge and authentic true
                essence of this magical region by sharing insight into local cuisine,
                fascinating folklore and impressive history. Immersive experiences allow
                you to experience hands-on the different cultures, people and ways of life
                of the fascinating and friendly people of Central and South America for an
                authentic and insightful experience.
              </p>
            </div>
            <div className="col-12 col-md-6 m-b-25">
              <img
                src="/images/our-purpose/why-valencia/local-experience.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
              <img
                src="/images/our-purpose/why-valencia/attention-24-7.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-md-6 mb-3 mb-md-5 
            order-1 order-md-2 align-self-center">
              <h2 className="title">24/7 service </h2>
              <p className="m-0 fs-17 lh-34">
                Be safe in the knowledge that we are always there for you. There is always
                one of our travel specialists to answer any questions you may have or help
                you resolve any issues…… around the clock! Send us an E mail or give us a
                call 24 hours a day, 7 days per week and we will happily answer any
                concerns you have.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 mb-3 align-self-center ">
              <h2 className="title">100% Guaranteed departures.</h2>
              <p className="m-0 fs-17 lh-34">
                At Va Expeditions, all departures are guaranteed. Once you have paid for
                your vacation, we will not change or cancel your trip unless your personal
                safety is at risk or exceptional circumstances which do not allow for the
                smooth running of your trip, such as extreme weather conditions or civil
                unrest, for example.
              </p>
            </div>
            <div className="col-12 col-md-6 m-b-25">
              <img
                src="/images/our-purpose/why-valencia/guaranteed-departures.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
              <img
                src="/images/our-purpose/why-valencia/guarantee-of-best-quality.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-md-6 mb-3 mb-md-5 
            order-1 order-md-2 align-self-center">
              <h2 className="title">Best Quality Guarantee.</h2>
              <p className="m-0 fs-17 lh-34">
                We are totally committed to the highest standard of service possible as we
                as your security and safety during your vacation. Our staff are all highly
                trained professionals in the travel industry who will look after you every
                step of the way!
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 mb-3 align-self-center ">
              <h2 className="title">We are worldwide connected!</h2>
              <p className="m-0 fs-17 lh-34">
                We form part of a global community of international travellers who are
                socially and culturally aware. We help travellers connect and integrate
                with local communities during their trip, always with respect, cultural
                sensitivity and appreciation for a wholesome and deeper connection and
                fulfilling our social commitment policies.
              </p>
            </div>
            <div className="col-12 col-md-6 m-b-25">
              <img
                src="/images/our-purpose/why-valencia/we-are-worldwide-connected.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
              <img
                src="/images/our-purpose/why-valencia/responsible-travel.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-md-6 mb-3 mb-md-5 
            order-1 order-md-2 align-self-center">
              <h2 className="title">Responsible travel.</h2>
              <p className="m-0 fs-17 lh-34">
                We travel with a focus on positive impact wherever we go! We help empower
                local, indigenous communities, women and children through specialized
                training sessions, using carefully selected service providers in each
                destination and direct contribution to a number of social projects in each
                region and country we visit. We are 100% committed to working in a
                socially and environmentally conscientious manner and aim to produce
                positive change by our presence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const ourpurposeResponse = await fetch(`${PUBLIC_API}/ourpurpose/list/`);
  const ourpurpose = await ourpurposeResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const pagecontentResponse = await fetch(`${PUBLIC_API}/history/`);
  const pagecontent = await pagecontentResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      packagesAll,
      pagecontent,
    },
    revalidate: 1,
  };
}
