/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TermsConditions({
  notifications,
  destinations,
  packagetypes,
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
        <title>Va Expeditions - Terms and Conditions</title>
        <meta name="description" content="Terms and conditions" />
        <meta name="keywords" content="Terms & conditions" />
      </Head>
      <div className="container">
        <div className="row col-12 pt-5 pb-4 mb-3 fs-16 lh-29">
          <div>
            <h1 className="text-center">Terms and Conditions</h1>
            <div/>
            <p>
            The use of the Va expeditions web site (here referred to as “the Web Site”) is subject 
            to the terms and conditions stated below. The use of the Web Site constitutes an agreement 
            by you, the user (here referred to as “the Client”), that your use is governed by these 
            terms and conditions.
            </p>
            <p>
            In addition, when using particular Va expeditions services, you will be subject to any guidelines 
            or rules applicable to such services that may be posted here. Make sure you check terms and 
            conditions regularly for any updates.  
            </p>
          </div>
          <h2>Contract between the Client and Va Expeditions</h2>
          <div>
            <p>
            To secure a booking with Va expeditions, the Client must deposit 40% of the entire cost of the trip. 
            All domestic and international flights must be paid 100% in advance to secure spaces. Cruise bookings 
            are subject to a special deposit policy depending on the boat. This deposit is non-refundable. Clients 
            booking by telephone or email will be deemed to have read the booking conditions.
            </p>
            <p>
              Valencia Travel Cusco, guarantees and provides transportation, bilingual
              guides, equipment, and food as stated in the detailed itinerary. All tour
              prices include the services of a driver and/or guide. Miscellaneous costs
              are not included. For example: any service which is not outlined in the
              itinerary, such as hotel extras, (washing and ironing of clothes, alcoholic
              drinks, telephone calls etc.), excess baggage costs, airport taxes, visa
              costs, etc.
            </p>
            <p>
              Valencia Travel Cusco is not responsible for delays, inconveniences, and/or
              expenses of any kind whatsoever resulting entirely, or in part from causes
              beyond the company’s control, neither for losses or additional expenses due
              to delays, sickness, bad weather, strikes, riots or other similar
              circumstances.
            </p>
          </div>
          <h2>TRAVEL INSURANCE:</h2>
          <div className="fs-16 lh-29">
            <p>
              We strongly advise you to take out a travel insurance that covers accidents,
              medical expenses (including rescue and air ambulance) and emergency
              repatriation. We also recommend that it covers cancellations and loss of
              luggage. Make sure that this insurance reimburses you for non-refundable
              trip costs. Once you have purchased travel insurance, please forward a copy
              of the insurance company name and policy number by email or bringing the
              information when you come to our office.
            </p>
          </div>
          <h2>BEHAVIOR</h2>
          <p>
            Our paramount as a company is the safety of the group. Thus, if a traveller
            behavior is detrimental to the safety and welfare of the group, incompatible
            with other members or contrary to the progress of the itinerary,{' '}
            <strong>Valencia Travel Cusco</strong>, reserves the right to require this
            person to withdraw from the tour. Anyone asked to leave for these reasons will
            not receive a refund. Refunds for unused services will not be honored under
            these circumstances, nor will any additional expenses be recognized.
          </p>
          <p>
            In the case of an illness that hinders the progress of the trip, a client may
            also be excluded from a tour. The company can make the necessary arrangements
            and recover the client's costs.
          </p>
          <p>
            Finally, a client committing an illegal act, they will be excluded from a tour
            and on this regard, any responsibility from Valencia Travel Cusco shall cease
            to exist.
          </p>
          <h2>TRIP PROFILE</h2>
          <p>
            Transportation, bilingual guides, equipment and food are included.
            Miscellaneous costs are not included, such as alcoholic beverages, personal
            telephone calls, excess baggage, airport taxes, visa charges, and travel
            insurance. All trip members will receive the necessary gear for their trip.
            The client must cover any damage or loss of all the equipment and gear
            supplied by Valencia Travel Cusco for their personal use. Tours are limited in
            number, usually less than 10, to lessen the impact on the environment and
            local cultures. This also ensures a more personalized service to each
            individual traveler.
          </p>
          <h2>CLIENTS&rsquo; RESPONSIBILITIES</h2>
          <p>
            Clients are responsible for their personal documentation such as valid
            passports and visas. The name on the airline ticket should correspond to the
            name on the passport. The client is responsible for a timely arrival for
            activities. Should they fail to do so, extra costs may incur in order to catch
            up with the group or even make it necessary to cancel and withdraw from the
            group. Travellers are also responsible for their own personal belongings, such
            as their baggage.
          </p>
          <h2>CHANGES MADE BY CLIENT:</h2>
          <p>
            The person who signs the reservation order is the only person that can make
            changes to the Tour/Trek/Trip/Rental/Service. A $35 USD change of order fee is
            charged to make any changes. Though all efforts will be made to make the
            changes requested, they are not guaranteed and there may be additional costs
            in relation to these changes.
          </p>
          <h2>DISSATISFIED CUSTOMERS</h2>
          <p>
            Should a client have any complaint about their holiday, they should make it
            known as soon as possible, directly to the guide or travel assistant in order
            to make the necessary amendments immediately. If the problem remains unsolved
            and the client requests a refund, they must write to the travel assistant no
            more than 30 days after the last day of the trip.{' '}
            <strong>Valencia Travel Cusco</strong> will attend to the case as quickly as
            possible, using the travel agency as the mediator.
          </p>
          <h4>
            <strong>
              PLEASE NOTE THAT, FOR THE INCA TRAIL, PERMITS ARE NON-TRANSFERABLE,
              NON-REFUNDABLE, AND DATES CAN'T BE CHANGED.
            </strong>
          </h4>
          <h2>CHANGES AND CANCELLATIONS BY VALENCIA TRAVEL CUSCO:</h2>
          <p>
            We always make our best efforts to carry out tours / services according to the
            original schedules as listed in the reservation order. However, by entering
            into this agreement with <strong>Valencia Travel Cusco</strong>, the client
            accepts that necessary changes may need to be made to a
            Tour/Trek/Trip/Rental/Service due to predominant conditions (see 'Force
            Majeure' section above).{' '}
          </p>
          <p>
            <strong>Valencia Travel Cusco</strong> reserves the right to change or cancel
            any facilities, services and substitute for reasonable alternative of
            comparable value. <br />
            In the event of a major change, the client will be notified as soon as
            possible. The client will have options with regards to accepting the change.
          </p>{' '}
          <div>
            <h2>VERY IMPORTANT:</h2>
            <p>
              We strongly suggest spending time at high altitude (above 3000 meters / 9842
              feet - in Cusco or another high altitude area) for a minimum of 3 to 4 days
              before undertaking your trip. This is in order to minimize the possible
              effects of altitude sickness. Also, you can help your body acclimatize by
              drinking plenty of liquids, adding a bit more sugar to your drinks, eating
              food rich in carbohydrates, avoiding cigarettes and alcohol, and drinking
              coca (ancient traditional leaf) tea. Diamox can also be helpful - please ask
              your doctor about purchasing any medications before traveling.
            </p>
          </div>
          <h2>ABOUT THE BRIEFING:</h2>
          <p>
            {' '}
            The night before your trek, there will be a pre-trek talk (briefing) in our
            office at either 6:30 pm or 7:30 pm (exact time will be confirmed upon your
            arrival or by email). A duffel bag will be provided at this time, if you have
            paid for an extra porter for your Inca Trail or if you are doing an
            alternative trek.{' '}
          </p>
          <p>Thanks again for choosing us and we look forward to seeing you in Cusco!.</p>
          <p>
            <strong>Valencia Travel Cusco Team </strong>
          </p>
          <p>
            {' '}
            Enjoy all the different services that we provide. Make sure to use caution and
            most importantly, have fun!{' '}
          </p>
        </div>
      </div>
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
    revalidate: 1,
  };
}

export default TermsConditions;
