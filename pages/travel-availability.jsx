import Head from 'next/head';

import { Base } from '@/layouts/index';

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
        <title>Travel Availability from January onwards - Valencia Travel Cusco </title>
      </Head>
      <section id="more">
        <div className="container text-justify">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                
                <div className="col-12 col-lg-6 mb-3">
                  <h2 className="fs-20 lh-34 font-weight-bold">
                    Travel Availability from January onwards.
                  </h2>
                  <p className="m-0 fs-20 lh-34 ">
                  The world is now a very different place than it was in 2020 and things 
                  continue to change on a daily basis, especially in the world of travel 
                  and tourism! Since November 2020, here in South America,the tourist 
                  attractions, archaeological sites and trekking routes are starting to 
                  open once more, slowly but surely  and some countries now have their 
                  international borders open for travel, including Brazil, Mexico, Costa 
                  Rica, Peru and Ecuador . There are in fact some international borders 
                  such as Mexico, Spain, USA and most European destinations, now open, which 
                  has made us all believe here at Va Expeditions that things are starting to
                   get back to some kind of normal and we are super excited! Here at Va 
                   Expeditions, we are now operating ALL of our tours and excursions for 
                   the first time since the pandemic began with the exception of Argentina, 
                   Bolivia and Chile, who´s international borders remain closed. 
                  </p>
                  <p />
                  </div>
                  <div className="col-12 col-lg-6">

                  <img
                    src="images/travel availability.jpg"
                    alt="Our Purpose"
                    className="img-fluid pb-4 "
                    />
                    </div>
                 <br/>
                <div className="col-12 col-lg-6 m-b-25 order-1 order-lg-2 ">
                
                  <br/>

                  <h3 className="fs-20 lh-34 font-weight-bold order-xl-1">Safety Protocols</h3>
                  <p className="m-0 fs-20 lh-34">
                  Here at Va Expeditions, we take our passenger’s safety and security very seriously. 
                  This is even more so now that we are dealing with reactivation of tourism after the 
                  pandemic. We continue to maintain our protocols since the very beginning of the 
                  pandemic with extra cleaning and disinfecting of our vehicles, alcohol gel and facemasks 
                  readily available to all of our passengers and staff team, as well as appropriate 
                  distancing in our vehicles and with respect to our group sizes. We are over the moon 
                  to have operated a number of groups during 2021 with all of our protocols in place 
                  and with maximum customer satisfaction. We are now waiting for you to come to South 
                  America so we can once more, show you the best of these incredible countries, always 
                  with your safety in mind!
                  </p>
                  <p />
                  </div>
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <img
                    src="images/safepro.jpg"
                    alt="Our Purpose"
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
