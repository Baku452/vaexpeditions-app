import Head from 'next/head';
import Link from 'next/link';

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
      </Head>
      <section id="more">
        <div className="containerBox py-5 px-5 ">
          <div className="row ">
            <div className="col-12 mx-auto">
              <div className={`${styles.text} row mb-5`}>
                <div className="col-12 col-lg-6 mb-2 align-items-center ">
                  <h2 className="fs-24  title mb-2 ">
                    Travel Availability from January onwards.
                  </h2>
                  <p className=" lh-34">
                    The world is now a very different place than it was in 2020 and things
                    continue to change on a daily basis, especially in the world of travel
                    and tourism! Since November 2020, here in South America,the tourist
                    attractions, archaeological sites and trekking routes are starting to
                    open once more, slowly but surely and some countries now have their
                    international borders open for travel, including{' '}
                    <Link href="https://vaexpeditions.com/destination/brasil">
                      <a target="_blank">Brazil</a>
                    </Link>
                    , Mexico, Costa Rica, Peru and Ecuador . There are in fact some
                    international borders such as{' '}
                    <Link href="https://vaexpeditions.com/destination/mexico">
                      <a target="_blank">Mexico</a>
                    </Link>
                    , Spain, USA and most European destinations, now open, which has made
                    us all believe here at Va Expeditions that things are starting to get
                    back to some kind of normal and we are super excited! Here at Va
                    Expeditions, we are now operating ALL of our tours and excursions for
                    the first time since the pandemic began with the exception of
                    Argentina, Bolivia and{' '}
                    <Link href="https://vaexpeditions.com/destination/chile">
                      <a target="_blank">Chile</a>
                    </Link>
                    , who´s international borders remain closed.
                  </p>
                  <p />
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
                    Here at Va Expeditions, we take our passenger’s safety and security
                    very seriously. This is even more so now that we are dealing with
                    reactivation of tourism after the pandemic. We continue to maintain
                    our protocols since the very beginning of the pandemic with extra
                    cleaning and disinfecting of our vehicles, alcohol gel and facemasks
                    readily available to all of our passengers and staff team, as well as
                    appropriate distancing in our vehicles and with respect to our group
                    sizes. We are over the moon to have operated a number of groups during
                    2021 with all of our protocols in place and with maximum customer
                    satisfaction. We are now waiting for you to come to South America so
                    we can once more, show you the best of these incredible countries,
                    always with your safety in mind!
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
  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
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
