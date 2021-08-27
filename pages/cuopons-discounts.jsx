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
        <title>Special Promotions</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1 className="font-weight-semi-bold text-center">SPECIAL PROMOTIONS!</h1>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
              <h3>Early Bookings</h3>
                <p>
                If you book well in advance and want to plan ahead for your adventure of 
                a lifetime, you can take advantage of our special “Early Bird” Discounts! 
                Its simple, just keep an eye on the tours that have the special offer of 
                “Book Early and Save” on the Va Expeditions website. By booking early it 
                is easier to secure the best hotels, rooms, entrance tickets and seating 
                availability so book ahead and enjoy the benefits!
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <p className="listStyle">
                  <h3>Contact us now!</h3>
                  <ul>
                    <li>
                      <strong>Toll-Free Phone Number USA & Canada:</strong>
                      <a href="tel:888-803-8004"> 1 - (888) 803 8004</a>
                    </li>
                    <li>
                      <strong>Customer Service</strong>
                      <a href="tel:860-856-5858"> 1 - (860) 856 5858</a>
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
