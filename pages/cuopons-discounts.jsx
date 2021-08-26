/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function CoupunsDiscounts({
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
        <title>Inca Trail Cuopons, Promotions - Free Travel</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1 className="font-weight-semi-bold text-center">BOOK EARLY AND SAVE BIG</h1>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <p>
                  There's a lot to be said for planning ahead! Reserve your vacation with
                  Valencia Travel Cusco early to ensure the best prices and most
                  convenient travel arrangements. Look for early booking discounts on your
                  next trip by looking for the "Book Early & Save" text on our adventure
                  trips and escorted tours. Our popular tour itineraries fill up quickly,
                  so book early to avoid disappointment. In addition to great savings,
                  early booking provides you with the best chance to confirm convenient
                  flight itineraries with the least number of stops, and to secure
                  preferred seating.
                  <br />
                  You can call us at:
                  <strong>Toll-Free Phone Number USA & Canada:</strong>
                  <a href="tel:888-803-8004">1 - (888) 803 8004</a>
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <p className="listStyle">
                  <ul>
                    <li>
                      <strong>Toll-Free Phone Number USA & Canada:</strong>
                      <a href="tel:888-803-8004">1 - (888) 803 8004</a>
                    </li>
                    <li>
                      <strong>Customer Service</strong>
                      <a href="tel:860-856-5858">1 - (860) 856 5858</a>
                    </li>
                    <li>
                      <strong>Cusco, Peru Office Telephone:</strong>
                      +51-84-25-59-07
                    </li>
                    <li>
                      <strong>Emergency Assistance 24/7:</strong>
                      +51-979706464 / +51-984961333
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
export async function getStaticProps() {
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      notifications,
      destinations,
      packagetypes,
      popups,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default CoupunsDiscounts;
