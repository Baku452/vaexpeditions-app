import Head from 'next/head';

import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function TravelAvailability({
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      popups={popups}
      packagesAll={packagesAll}>
      <Head>
        <title>Travel Availability - Va Expeditions </title>
        <meta name="description" content="Travel Availability of VA Expeditions" />
        <meta name="keywords" content="Travel Availability" />
      </Head>
      <section id="travel-availability">
        <div className="containerBox py-5 px-5 ">
          <div className="row ">
            <div className="col-12 mx-auto">
              <div className={`${styles.text} row mb-5`}>
                <div className="col-12 col-lg-6 mb-2 align-items-center ">
                  <h2 className="fs-24  title mb-2 ">
                    Travel Availability from January 2022 onwards.
                  </h2>
                  <p className="lh-34">
                    The world is now a very different place than it was in 2021 and things
                    continue to change on a daily basis, especially in the world of travel
                    and tourism! Since January, 2022, here in South America, the tourist
                    attractions, archaeological sites and trekking routes are all open,
                    all be it with a reduced capacity, in many destinations. International
                    borders are once more open for international travel in all Latin
                    American destinations, which has made us all believe here at Va
                    Expeditions that things are starting to get back to some kind of
                    normal and we are super excited! Va Expeditions, are now operating ALL
                    of our tours and excursions for the first time since the pandemic
                    began; With different requisites for each destination and areas within
                    that country. Please contact us for the up-to-date information on each
                    of these incredible and unique options for your ideal vacation.
                  </p>
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                  <img
                    src="images/travel availability.jpg"
                    alt="Travel Availability"
                    className="img-fluid pb-4 "
                  />
                </div>
                <br />
                <div
                  className="col-12 col-lg-6 m-b-25 order-1 
                  order-lg-2  align-self-center">
                  <br />

                  <h3 className="fs-24  order-xl-1 title mb-2">Safety Protocols</h3>
                  <p className="lh-34">
                    Here at Va Expeditions, we take our passenger???s safety and security
                    very seriously. This has been the case throughout the pandemic and
                    even more so, post pandemic. We continue to offer the highest level of
                    safety and hygiene protocols, including the disinfection of our
                    vehicles, alcohol gel and facemasks, which are readily available to
                    all of our passengers and staff team, as well as appropriate
                    distancing and depending on our group sizes. We are over the moon to
                    have operated a number of groups during 2021 with all of our protocols
                    in place and with maximum customer satisfaction. We are now anxiously
                    awaiting your visit to South America so we can once more, show you the
                    best of our amazing countries, always with your safety, security and
                    enjoyment at heart.
                  </p>
                  <p />
                </div>
                <div className="col-12 col-lg-6 order-2 order-lg-1  align-self-center">
                  <img
                    src="images/safepro.jpg"
                    alt="Travel Availability"
                    className="img-fluid pb-4 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();
  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      popups,
      packagesAll,
    },
    revalidate: 60,
  };
}
