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
        <title>Friends & Family, Earn Discounts & Free Travel Benefits</title>
        <meta name="description" content />
        <meta name="keywords" content />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1 className="font-weight-bold text-center">
              FRIENDS & FAMILY PROGRAM - EARN DISCOUNTS & FREE TRAVEL BENEFITS
            </h1>
            <div className="text-center row mt-5">
              <div className="col-5 m-auto p-4 bg-dark text-white ">
                <p>
                  <strong>
                    Simply Call: (888) 803 8004 and speak with a Friends & Family
                    specialist (Lisette).
                  </strong>
                  <br />
                  Free personalized web page to share with your friends & family Reserve
                  space for up to 30 days while you promote your group (conditions apply).
                </p>
              </div>
            </div>
            <div className="row">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h3 className="p-3 text-center">Travel FREE with Friends & Family</h3>
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
            <div className="row listStyle">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h2 className="p-3 text-center">
                  ABOUT THE FRIENDS & FAMILY PROGRAM (FFP)
                </h2>
                <h3>Which tours can be booked for Friends & Family?</h3>
                <p>
                  Friends & Family Program (FFP) reservations apply to select Tours/Treks.
                  Eligible products will display the Friends and Family icon.
                </p>
                <h3>Do early booking discounts and other promotions still apply?</h3>
                <p>
                  Yes. All Tour/Trek promotions apply, including "Book By" discounts and
                  offers made on Valencia Travel's weekly "The Deal". Promotions apply to
                  bookings at the time each individual reservation is complete. Promotions
                  which applied when a Friends & Family Program booking was initiated but
                  subsequently expired, do not apply to individual bookings completed
                  after the promotion expiration date.
                </p>
                <h3>Are airfares guaranteed?</h3>
                <p>
                  No. Airfares are subject to prices and availability at the time each
                  individual booking is complete.
                </p>
                <h3>How do I initiate a Friends & Family booking?</h3>
                <p>
                  Select the Friends & Family icon, when booking online or we will connect
                  you with a Friends & Family Program representative. Who will help you
                  select your tour, create your personal reservation, and prepare your
                  unique web page link to forward to your friends and family! (Please
                  note: that personalized web pages are not available for bookings).
                </p>
                <h3>How do I tell my friends and family about the tour?</h3>
                <p>
                  Your selected tour and departure date will be featured on your
                  personalized web page link, which you can easily email to your friends
                  and family. You can create your own email and web page link or we can
                  send you a link through an email address. Simply forward the email
                  address to your friends and family, we will take care of the rest.
                </p>
                <h3>How do my friends and family complete their bookings?</h3>
                <p>
                  Friends and family bookings may be completed online using the provided
                  link or via our call center at: (888) 803 8004 to speak with a Friends &
                  Family specialist (Fredy). When booking via the call center, your
                  friends and family specialist will reference your personal tour. All
                  subsequent communications including invoices, payment reminders and
                  final documentation will be sent directly to each friend or family
                  member.
                </p>
                <h3>
                  Are there any special terms and conditions that apply only to Friends &
                  Family tours?
                </h3>
                <p>
                  No. Individual reservations will be subject to Valencia Travel Cusco
                  Terms & Conditions.
                </p>
                <h3>Can I reserve space for my friends & family?</h3>
                <p>
                  Yes.
                  <ul>
                    <li>
                      If you are booking up to 180 days prior to the date of departure of
                      the tour, you may hold rooms and cabins for as many as 10 friends
                      and family for up to 30 days from the date you initiate and pay a
                      deposit on your booking.
                    </li>
                    <li>
                      If you are booking between 179 and 90 days prior to the date of
                      departure of the tour, you may hold space for 21 days.
                    </li>
                    <li>
                      If you are booking between 89 and 60 days prior to the date of
                      departure of the tour, you may only hold space for 7 days.
                    </li>
                    <li>
                      At 60 days or less prior to departure, space can no longer be
                      reserved. Once the space is booked, let your friends and family
                      members know that they have only a limited time to complete their
                      reservation with guaranteed space.
                    </li>
                    <li>
                      After 30 days (or 21 days if booking between 179 and 90 days prior,
                      or 7 days if booking between 89 and 60 days prior), any unsold rooms
                      and cabins will be automatically released.
                    </li>
                    <li>
                      On the release date, if at least 50% of the space has been reserved,
                      you may call to request additional time to offer the remaining space
                      to additional friends and family.
                    </li>
                    <li>
                      After 60 days, all unsold space will be released. At any time, a
                      Friends & Family program may be promoted without space being
                      guaranteed. Valencia Travel Cusco reserves the right to recall any
                      unsold space, at any time, with 7 days’ notice.
                    </li>
                  </ul>
                </p>
                <h3>How are earned credits applied to my booking?</h3>
                <p>
                  Once, your friends and family members have paid in full for their
                  reservations, approximately 10 days prior to your date of departure.
                  Your earned incentives will be applied to your personal reservation in
                  the form of a credit. Credit will be applied as followed: for every 10
                  paid-in-full passengers, you will earn one complementary land only
                  package based on shared twin/double occupancy excluding any applicable
                  taxes or fees, optional tours, single supplements and Trip Protection
                  Plan premiums For less than 10 paid-in-full passengers, credits will be
                  applied as followed:
                </p>
                <ul>
                  <li>Up to 6 paid-in-full passengers: $0 (USD);</li>
                  <li>7 paid-in-full passengers: $100 (USD) total;</li>
                  <li>9 paid-in-full passengers: $200 (USD) total;</li>
                  <li>11 paid-in-full passengers: $300 (USD) total;</li>
                  <li>13 paid-in-full passengers: $400 (USD) total.</li>
                </ul>
                <p>
                  The earned credit of up to $400 will be applied to group leader's
                  reservation only. The free travel benefit may not be combined with cash
                  discounts earned for 7-9 paying passengers.
                </p>
                <h3>
                  Can I earn Refer a Friend benefits on the Friends & Family Program?
                </h3>
                <p>
                  Yes, this program may be combined with our Refer a Friend program. Visit
                  Refer a Friend for complete details. *Please note: Travel Agents who
                  make Friends & Family bookings are limited to 5% commission, if a free
                  travel benefit is earned.
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

export default FriendsFamily;
