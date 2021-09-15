import Head from 'next/head';
import Link from 'next/link';

import { Hero2 } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function NewRisk({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
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
        <title>NEW Regulations to enter Machu Picchu 2019</title>
      </Head>

      <Hero2
        title="New Risk-Free flexible booking offer"
        image="/images/arequipa2.jpg"
        alt="new risk"
      />
      <section id="more">
        <div className="container  text-justify">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="row justify-content-md-center">
                  <div className="col-10 mb-3">
                    <div className="row justify-content-md-center">
                      <h2 className="fs-20 lh-34 font-weight-bold">
                        {/* New Risk-Free flexible booking offer */}
                      </h2>
                      <p className="m-0  ">
                        With all of the uncertainty around travel in a post-Coronavirus
                        world, even the hardy travellers who are participants on
                        <Link href="https://vaexpeditions.com/search?types=">
                          <a target="_blank"> Va Expeditions tours</a>
                        </Link>
                        , are feeling understandably anxious and seeking assurance. It is
                        clear that for the time being, the complicated web of restrictions
                        and flight cancelations make travel a challenge right now. So we
                        have worked with all our guests on a case-by-case basis to find
                        the best solution for them, be it a deferral or credit voucher. We
                        wish to extend similar flexibility and peace of mind to all our
                        future guests looking to enjoy a well-earned vacation after the
                        dust has settled. We now offer two types of FLEX Options at no
                        extra charge, to choose from when booking:
                      </p>
                    </div>
                  </div>

                  <div className="row justify-content-md-center">
                    <div className=" col-10 text-center">
                      <div>
                        <h3 className="fs-20 lh-34 font-weight-bold">
                          High-Flex booking option — 40% Deposit
                        </h3>
                        <p>
                          Book any tour of your choice and change the trip dates and tour
                          destination 1 time for Free* up to 60 days before departure.
                        </p>
                      </div>
                      <div>
                        <h3 className="fs-20 lh-34 font-weight-bold">
                          Extreme-Flex booking option —Full Deposit
                        </h3>
                        <p>
                          Book any tour of your choice and change the trip dates and tour
                          destination as many times as you like up to 31 days before
                          departure.
                        </p>
                      </div>
                      <div>
                        <p>
                          <h3 className="fs-20 lh-34 font-weight-bold">Codes:</h3>
                        </p>
                        <p>HIGH-FLEX — 40% DEPOSIT— EXTREME-FLEX —FULL DEPOSIT—</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-10 ">
                    <h3 className="fs-20 lh-34 font-weight-bold">
                      See full terms & conditions on the booking conditions page
                    </h3>
                    <p>
                      *Of course, there are some conditions applicable and you can read
                      these in full on our  Booking Conditions page or you can chat to a
                      real person by email or by phone for more details. At the end of the
                      day what we want to do is to allow you to dream and plan for better
                      times to come, as they surely will. FEEL FREE TO CONTACT US WITH ANY
                      QUESTIONS: TOLL FREE (USA / CANADA): 1 - (888) 803 8004
                    </p>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-10 listStyle">
                    <h3 className="fs-20 lh-34 font-weight-bold">
                      Coronavirus cancellation terms & conditions
                    </h3>
                    <ul>
                      <li>
                        The below conditions are only applicable to bookings confirmed on
                        or after the 15th March 2020 and for travel up until 31st Dec
                        2020, Under High Flex booking conditions. Under Extreme Flex
                        booking conditions these can be applicable from the time of
                        booking to 2021.
                      </li>
                      <li>
                        Should the dates of the amended booking fall in a season where
                        higher rates are applicable, the booking will remain with the same
                        rate, this will have special coupon code, if the booking will be
                        changed for 2021 the traveller shall be responsible for payment of
                        the difference between the season rate of the original booking and
                        the season rate of the new booking.
                      </li>
                    </ul>

                    <h3 className="fs-20 lh-34 font-weight-bold m-0">High Flex</h3>
                    <ul>
                      <li>
                        These terms apply to bookings where only the deposit has been paid
                        and the guest wishes to amend the date on which the tour will be
                        taken.
                      </li>
                      <li>
                        Note that if the balance of payment has been made or the full
                        payment was made at the time of booking, EXTREME FLEX applies (see
                        next section).
                      </li>
                    </ul>

                    <div className="row ">
                      <div className="col-10 col-md-8 mb-3 align-self-center ">
                        <strong>Change permitted under HIGH FLEX:</strong>
                        <ul>
                          <li>
                            CHANGE THE TRIP DATES AND TOUR DESTINATION ONE TIME FOR FREE.
                          </li>
                          <li>
                            The balance of the tour will be invoiced 60 or 90 days before
                            the new tour start date.
                          </li>
                          <li>
                            If you are still uncertain as to when you will travel, we will
                            issue a credit voucher for the full value of the deposit, with
                            a validity period of 12 months.
                          </li>
                          <li>
                            To re-book a tour using a credit voucher, contact us through
                            our email info@vaexpedtions.com or use our call centre.
                          </li>
                          <li>
                            If the tour or departure date to which you are moving is a
                            lower price than the tour you are moving from, we will issue a
                            voucher for the difference in price with 12 month validity.
                          </li>
                          <li>
                            Where a voucher is issued, we do not guarantee the tour price
                            until you have re-booked using that voucher. Once you have
                            re-booked, the published tour departure price at the time of
                            booking applies.
                          </li>
                        </ul>
                      </div>
                      <div className="col-10 col-md-4 mb-3 align-self-center">
                        <img src="/images/newrisk3.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>

                    <h3 className="fs-20 lh-34 font-weight-bold">Extreme Flex</h3>
                    <p>
                      If you have paid for your tour in full, either at the time of
                      booking, or by deposit and balance installments, then you will be
                      eligible for EXTREME FLEX terms.
                    </p>
                    <div className="row ">
                      <div className="col-10 col-md-8 mb-3 align-self-center ">
                        <strong>Changes permitted:</strong>
                        <ul>
                          <li>The date on which you will take the tour</li>
                          <li>The tour programme (move between different tours)</li>
                          <li>The country/destination in which you will take the tour</li>
                          <li>
                            You can make departure date changes and can be made up to 31
                            days prior to the tour departure date.
                          </li>
                          <li>
                            The tour must be taken within 2020 and 2021 months of the
                            original booked tour date.
                          </li>
                          <li>
                            If you are uncertain as to when you will be able to travel, we
                            will issue a credit voucher for the full value paid by you,
                            with a validity period of 18 months.
                          </li>
                          <li>
                            To re-book a tour using a voucher, simply contact our
                            info@vaexpedtions.com, Where a voucher is issued, we do not
                            guarantee the tour price until you have re-booked using that
                            voucher. Once you have re-booked, the published tour departure
                            price at the time of booking applies
                          </li>
                          <li>
                            If the tour or departure date to which you are moving is a
                            higher price than the tour you are moving from, we will
                            require you to make payment of the difference at the time of
                            the change.
                          </li>
                          <li>
                            If the tour or departure date to which you are moving is a
                            lower price than the tour you are moving from, we will issue a
                            voucher for the difference in price with 18 month validity.
                          </li>
                          <li>
                            For private groups, please note that we will require the whole
                            group to make changes as a group. Where the group size reduces
                            due to a change, a re-price of the tour may be required.
                          </li>
                        </ul>
                      </div>
                      <div className="col-10 col-md-4 mb-3 ">
                        <img src="/images/newrisk2.jpg" alt="" className="img-fluid" />
                        <br />
                        <br />
                        <img src="/images/newrisk1.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>

                    <h3 className="fs-20 lh-34 font-weight-bold">Cancellation by You</h3>
                    <p>
                      For these reasons, at the time we receive written notice that you
                      wish to cancel your trip, you will be charged the following fees:
                    </p>
                    <ul>
                      <li>45 to 59 days before departure date: 20% of trip cost.</li>
                      <li>30 to 44 days: 40% of the trip cost.</li>
                      <li>15 to 29 days: 50% of the trip cost.</li>
                      <li>8 to 14 days: 70% of the trip cost.</li>
                    </ul>
                    <p>
                      Less than 7 days before departure date or no-show: 100% of trip
                      cost.
                    </p>
                  </div>
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

  const ourpurposeResponse = await fetch(`${PUBLIC_API}/ourpurpose/list/`);
  const ourpurpose = await ourpurposeResponse.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      popups,
      packagesAll,
    },
    revalidate: 1,
  };
}
