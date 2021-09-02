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
            FRIENDS & FAMILY DISCOUNT 
            </h1>
            <h2 className="fs-16 lh-29 col-7 m-auto text-center">
            Earn special discounts and special travel bonuses with our innovative 
            “Friends and family” programme. 
            </h2>
            <div className="text-center row mt-5">
              <div className="col-5 m-auto p-4 bg-dark text-white ">
                <p>
                  <strong>
                    Simply call us on 0888 803 8004 to 
                    speak to your “Friends and Family” travel designer (“Claire”). 
                  </strong>
                  <br />
                  Choose from the carefully selected tours and treks available throughout 
                  central and South America and start to plan your trip! 
                  This is the perfect opportunity to experience Central and South America 
                  in all of its true essence… what  are you waiting for?!
                </p>
              </div>
            </div>
            <div className="row listStyle">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h2 className="p-3 text-center">Travel FREE with Friends & Family</h2>
                <p>
                Travelling is an experience best shared and who better to share it with, but your family and friends! 
                Allow us to make it even more rewarding with our “Friends and family” with our special rewards programme.
                <br/>
                  <ul>
                  <li> *when 7 people join your group (total group size) receive a $100 USD discount!</li>
                  <li> *when 9 people join your group (total group size), receive a $200USD discount!</li>
                  <li>*when 11 people join your group (total group size), receive a $300USD discount!</li>
                  <li> * when 13 or more people are in the group (total group size), receive a $400 USD discount!</li>
                  </ul>
                </p>
                <p>
                It couldn´t be easier and you will receive a private group webpage to share with your friends and family, 
                which you can create or we will do it for you! 
                </p>
               </div>
            </div>
            <div className="row listStyle">
              <div className="fs-16 lh-29 p-3 col-10 m-auto">
                <h2 className="p-3 text-center">
                  ABOUT THE FFP (FRIENDS & FAMILY PROGRAM) 
                </h2>
                <p>
                The FFP discount applies to those tours where the FFP icon is displayed. 
                </p>
                <h3>Do early booking discounts still apply? </h3>
                <p>
                YES! All other special promotions still apply so you can accumulate your discounts 
                as long as all the booking conditions are fulfilled by yourself!
                </p>
                <h3>Are air fares guaranteed?</h3>
                <p>
                Unfortunately, not, these are dependent on external carriers and fares will 
                be applicable at the time of booking.
                </p>
                <h3>How do I apply a "friends and family booking"?  </h3>
                <p>
                Simply select the friends and family icon during your online booking or we will connect 
                you will a friends and family tour designer, who will facilitate your tour selection,  
                create your personal reservation and personal webpage link to send to your friends and 
                family! (Please note that a private webpage is not available for regular bookings).
                </p>
                <h3>How do I tell my friends and family?</h3>
                <p>
                Your selected tour and departure date will feature on your webpage. This page can be 
                shared easily with your friends and family via an e mail address and we will do the rest!
                </p>
                <h3>How do my friends and family complete their booking? </h3>
                <p>
                Your friends and family may book using the link provided or via our call centre (0888 803 8004). 
                When you call, our travel designer will reference your personal tour. All subsequent communication 
                /invoices will be sent to each individual group member.
                </p>
                <h3>Are there any special terms and conditions for FFP group members? </h3>
                <p>
                No... all bookings are covered under the Va Expeditions general booking terms and conditions.
                </p>
                <h3>
                Can I reserve a space for my friends and family? 
                </h3>
                <p>
                Yes …. You can reserve rooms/cabins/excursions for up to and including 10 FFP members, up to 
                180 days prior to departure and up to 30 days from the date you initiate the booking process 
                and deposit payment.
                </p>
                  <ul>
                    <li>
                    At 60 days or less we cannot reserve spaces without a deposit so make sure you advise 
                    your friends and family well in advance so that group spaces are secured.
                    </li>
                    <li>
                    After 60 days before the trip departure deposit payment has not been received, we will 
                    release all group spaces. Your friends and family may still join but spaces can no longer 
                    be guaranteed. Va Expeditions reserves the right to recall any unsold space and at any time,
                     giving a 7-day notice period.
                    </li>
                  </ul>
                  <br/>
                  <br/>
                <h3>How are the discounts applied to my booking?</h3>
                <p>
                Once we have received full payment from al group members we will apply the discount to your 
                booking in the form of a credit card payment to the group leader. (Discounts apply depending 
                on the group size, as previously mentioned).
                </p>
                <h3> Contact us now!</h3>
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
