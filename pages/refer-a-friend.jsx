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
        <title>Refer a Friends - Peru Travel Deals - Free Travel</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1 className="font-weight-semi-bold text-center">
              VALENCIA TRAVEL'S REFER A FRIEND PROGRAM
            </h1>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                {' '}
                <p>
                  Traveling with friends and family is rewarding and we are making it even
                  more rewarding with our Friends & Family Program! Start earning cash
                  rewards, when 7 friends or family members join your tour. 7 traveling /
                  paying passengers: $100 (USD) discount to the group leader 9 traveling /
                  paying passengers: $200 (USD) discount to the group leader 11 traveling
                  / paying passengers: $300 (USD) discount to the group leader 13 or more
                  traveling / paying passengers: $400 (USD) discount to the group leader
                  We make it easy! You even get your own webpage to share with your
                  Friends & Family! Simply Call: (888) 803 8004 and speak with a Friends &
                  Family specialist (Lisette). Select your tour from a comprehensive
                  worldwide selection of tours and treks. Book your trip and create your
                  own free personalized web page to share with your friends & family or we
                  can create one for you. Then, start preparing for your trip! Don't wait.
                  See more of the World for Less!
                </p>
              </div>
            </div>
            <div className="row">
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
            </div>
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
