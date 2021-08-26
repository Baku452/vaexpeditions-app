/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function FriendsFamily({
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
        <title>Referral Credits - Peru Travel Deals - Free Travel</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1 className="font-weight-semi-bold text-center">
              REFERRAL CREDITS 
            </h1>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                {' '}
                <p>
                Receive amazing benefits if you have travelled with Va expeditions! 
                If you have travelled with us and want to refer us to one of your friends, 
                acquaintances or even a work colleague, then you can reap the benefits on 
                both sides. You will receive a $100 USD discount and so will they! Simply 
                follow these easy steps to take advantage of these incredible  rewards!
                </p>
              </div>
            </div>
            {/* <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h3>Easy steps to receive your credits:</h3>
                <p className="listStyle">
                  <ul>
                    <li>Give your friend your Account Number and name.</li>
                    <li>
                      When they call, make sure they give both your name and Valencia
                      Travel Cusco account number to their travel specialist or enter it
                      online.
                    </li>
                    <li>
                      Your friend (the new Valencia Travel Cusco passenger) will receive a
                      $100 (USD) credit off their booking immediately; only on
                      tours/treks.
                    </li>
                    <li>
                      When you book a new reservation, the $100 (USD) will be waiting,
                      when you book your next tour/trek.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h3>Terms and Conditions:</h3>
                <p className="listStyle">
                  <ul>
                    <li>
                      Must be a past customer who has completed travel, with Valencia
                      Travel Cusco, to refer a friend.
                    </li>
                    <li>Credit may not be applied towards an existing reservation.</li>
                    <li>
                      Credit may not be combined with special offers on "The Deal" or any
                      promotional code-based discounts
                    </li>
                    <li>
                      If your booking is ineligible for referral credits, you will be
                      offered a credit towards your next tour/trek.
                    </li>
                    <li>Only one credit per room.</li>
                    <li>
                      The new traveling passenger must be booking his/her first
                      reservation with Valencia Travel Cusco.
                    </li>
                    <li>
                      As the referrer, you can accrue multiple credits but can only apply
                      one credit per booking.
                    </li>
                    <li>
                      The referrer's next trip must be booked within 12 months of earning
                      the credit.
                    </li>
                    <li>
                      (**).- Only valid on tours/treks packages for more than 13 days.
                    </li>
                    <li>
                      Not valid on independent vacations or independent tour/trek
                      packages.
                    </li>
                    <li>Not valid on Group reservations.</li>
                  </ul>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Base>
  );
}
export async function getStaticProps({ params }) {
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

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

export default FriendsFamily;
