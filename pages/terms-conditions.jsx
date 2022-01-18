/* eslint-disable max-len */
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
        <title>Terms and Conditions - Va Expeditions</title>
        <meta name="description" content="Terms and conditions" />
        <meta name="keywords" content="Terms & conditions" />
      </Head>
      <div className="container">
        <div className="row col-12 pt-5 pb-4 mb-3 fs-16 lh-29 px-3">
          <div>
            <h1 className="text-center title">Terms and Conditions</h1>
            <div />
            <p>
              The use of the Va expeditions web site (here referred to as “the Web Site”)
              is subject to the terms and conditions stated below. The use of the Web Site
              constitutes an agreement by you, the user (here referred to as “the
              Client”), that your use is governed by these terms and conditions.
            </p>
            <p>
              In addition, when using particular Va expeditions services, you will be
              subject to any guidelines or rules applicable to such services that may be
              posted here. Make sure you check terms and conditions regularly for any
              updates.
            </p>
          </div>
          <h2>Contract between the Client and Va Expeditions</h2>
          <div>
            <p>
              To secure a booking with Va expeditions, the Client must deposit 40% of the
              entire cost of the trip. All domestic and international flights must be paid
              100% in advance to secure spaces. Cruise bookings are subject to a special
              deposit policy depending on the boat. This deposit is non-refundable.
              Clients booking by telephone or email will be deemed to have read the
              booking conditions.
            </p>
            <p>
              A booking is accepted and becomes definite from the date that Va Expeditions
              has received the deposit from the Client. It is at this point that a binding
              contract between Va Expeditions and the Client comes into existence.
            </p>
            <p>
              The contract is made between Va Expeditions and the Client, which includes
              all persons named on the booking form. The person signing the booking form
              warrants that he/she has full authority on behalf of all the persons whose
              names appear thereon and confirms that all such persons are fully aware of
              and accept these conditions.
            </p>
          </div>
          <h2>Payment</h2>
          <div>
            <p>
              The balance of the amount due must be paid to Va Expeditions no later than
              60 days before departure* (different policies may apply for cruise
              bookings). In case of non-payment of the balance by the due date, Peru for
              Less will treat the booking as being cancelled by the Client.
            </p>
            <p>
              In the case of bookings made within 45 days* of the departure date, the full
              amount of package price has to be paid at the time of the booking
              reservation.
            </p>
            <p>
              Payment can either be made by wire transfer, direct deposit or credit card.
              In case of a bank transfer, all wiring and transfer costs should be assumed
              by the Client.
            </p>
            <p>
              All prices are in United States of America Dollars. All quoted Euro and
              Pound prices are referential and for the convenience of the Client. The
              Client can choose to pay in Euros or Pounds; however this amount is
              dependent on the actual international exchange rate at the time of booking
            </p>
            <p>
              Our prices do not include Peruvian sales taxes. Those exempt from paying
              this tax must meet the legal standards. For an exemption from the IGV
              (General Sales Tax) the visitor (guest) must prove he or she meets the
              international treaty standards honoured in Peru by showing a passport,
              driver’s license or national identity card. Please note that visitors who
              have stayed in Peru longer than 60 calendar days are no longer exempt from
              IGV (General Sales Tax). Also please make sure that your identity documents
              are legible.
            </p>
            <p>
              *Please note that for large groups (e.g. 10 or more people travelling
              together) or for special quotes and services, different payment deadlines
              may apply and payment will typically be requested at least 61 days in
              advance of your departure date.
            </p>
          </div>
          <h2>Changes by the Client</h2>
          <p>
            Any changes to the original booking must be confirmed by the person signing
            the booking form. For any change by the Client to the itinerary after
            receiving a confirmed Travel Programme from Peru for Less, a US$35 changing
            fee will be charged plus any costs or charges which are incurred or levied by
            our suppliers as a result of the amendment. While every reasonable effort will
            be made to accommodate changes and additional requests, their availability
            cannot be guaranteed.
          </p>
          <p>
            Services can be transferred from one client to another as long as there is
            availability and the providers’ conditions allow it.
          </p>
          <div>
            <h2>Substitution of Client</h2>
            <p>
              If any member of your party is prevented from travelling, it may be possible
              to transfer the booking to another suitable person, provided that written
              notice is given at least 30 days prior to departure. An administration fee
              of US$50 will be charged plus any costs imposed by Va Expeditions suppliers.
              In the case of certain tickets, these have to be purchased again as they
              cannot be transferred.
            </p>
          </div>
          <div>
            <h2>Cancellation by the Client</h2>
            <p>
              The Client may cancel the booking at any time provided that the cancellation
              is communicated to Va Expeditions in writing. Deposit paid to reserve trip
              is non-refundable. Payments for flights, cruises and Inca Trail bookings are
              non-refundable due to airline and operator policies. All other reservations
              cancelled less than 45 days prior to the departure date of the tour are
              subject to the following cancellation fees:
            </p>
            <p>
              Period before departure when written notification is received. The
              Cancellation fee as a percentage of the refundable services price are as
              follows:
            </p>
            <ul>
              <li>22-45 days 40%</li>
              <li>9-21 days 75%</li>
              <li>8 days or less 100%</li>
            </ul>
            <p>
              In case part of a booking is cancelled, the remaining party may have to pay
              additional charges (e.g. under-occupancy, or single room supplements).
            </p>
            <p>
              *Please note that for large groups (e.g. 10 or more travelling together) or
              special quotes and services, different cancellation deadlines may apply.
            </p>
          </div>
          <div>
            <h2>Postponement by the Client</h2>
            <p>
              <strong>
                Note: This policy applies to all new bookings beginning May 1st, 2021.
              </strong>
            </p>
            <p>
              With written notification up to 10 days before departure, the client may
              postpone their trip with Va Expeditions to any date in 2021 or 2022 and
              receive 100% credit for the future trip.
            </p>
            <p>
              The client does not need to have new dates selected to postpone. The dates
              may be chosen at a later time, up to 7 days before departure. Please note,
              some services and hotels may need more advanced booking due to high
              demand/limited availability.
            </p>
            <p>
              With written notification 7-10 days before departure, the client may
              postpone their trip to any date in 2021 or 20222 and receive a 65% credit
              for the future trip. With written notification of less than 7 days before
              departure, the client may postpone their trip to any date in 2021 or 2022
              and receive 50% credit for the future trip.
            </p>
            <p>
              Period before departure when written notification is received, postponement
              fee as a percentage
            </p>
            <lu>
              <li>More than 10 days 0%</li>
              <li>7-10 days 35%</li>
              <li>6 days or less 50%</li>
            </lu>
            <p>
              Va Expeditions will cover all price increases between 2021 to 2022. For
              trips postponed to 2022 or later, additional standard inflation rates apply.{' '}
            </p>
            <p>*Notes</p>
            <p>
              International and domestic airfare is not applicable. Va Expeditions will
              use the airline’s postponement and cancellation policies. In most cases, a
              $20 change fee and difference in airfare applies
            </p>
            <p>
              Select hotels and cruises have different postponement terms. The client will
              be made aware of these exceptions at the time of booking. These will be
              reviewed case by case and negotiated with the hotel/cruise.
            </p>
            <p>
              The above terms are valid for postponements only. For cancellations,
              standard cancelation policy as outlined in point 5 applies.
            </p>
            <p>
              Please note that for large groups (e.g. 10 or more traveling together) or
              special quotes and services, different postponement deadlines may apply.
            </p>
          </div>
          <div>
            <h2>Changes and Cancellation by Va expeditions</h2>
            <p>
              While Va Expeditions use its best endeavours to operate all tours as
              advertised, by entering into this contract the Client accepts that it may
              prove necessary or advisable to vary or modify a tour itinerary or its
              contents due to prevailing local conditions. Va expeditions reserves the
              right to cancel or change any of the facilities, services or prices
              (including flights, accommodation or other arrangements) at any time and to
              substitute alternative arrangements of comparable monetary value without
              compensation and accepts no liability for loss of enjoyment as a result of
              these changes.
            </p>
            <p>
              If a major change is known to us at the time of the booking, the Client will
              be informed immediately. A major changed is defined as a change affecting at
              least one in three full tour days of the itinerary, or which materially
              affects the character of the Product in its entirety. If a major change
              becomes necessary after booking, Va Expeditions will inform the Clients as
              soon as reasonably possible.
            </p>
            <p>
              When a major change is made, the Client will have the choice to accept the
              change of arrangements, to purchase any other available tour or to cancel
              the tour and obtain a full refund. This is providing that the major change
              is not because of force majeure.
            </p>
            <p>
              Force majeure is war, threat of war, riots, civil strife, industrial
              dispute, terrorist activities, natural or nuclear disaster, fire or adverse
              weather conditions, technical or maintenance problems with transport,
              changes imposed by cancellation or rescheduling of flights by an airline,
              the alteration of airline or aircraft type, or other similar events beyond
              the control of Va Expeditions.
            </p>
            <p>
              Va Expeditions is not liable for any charges in the event of a change –
              beyond their control – to the departure time or date of a tour, flight or
              other form of transport.
            </p>
          </div>
          <div>
            <h2>Surcharges</h2>
            <p>
              Should any price increase, Va Expeditions will absorb the price increase if
              the price increase is less than 2% of the total package price. If the
              increase is more than 2%, the client will be surcharged the difference.
            </p>
          </div>
          <div>
            <h2>Passport, Visa and Vaccinations</h2>
            <p>
              It is the responsibility of the Client to be in possession of a valid
              passport, visa permits, inoculations and preventative medicines as may be
              required by the authorities of the visited countries for the duration of the
              tour. Information about these matters or related items is given in good
              faith but without responsibility on the part of Va Expeditions.
            </p>
          </div>
          <div>
            <h2>Age, Fitness and Participation</h2>
            <p>
              All Clients are expected to assess that their physical fitness aligns with
              the requirements of the itinerary of their choosing prior to booking.
              Travellers with pre-existing medical conditions are advised to check with a
              healthcare professional before traveling on the chosen itinerary. No
              unaccompanied minors (those under 18 years of age) can be accepted on tours
              operated by Va Expeditions however older teenagers may be considered
              provided they are accompanied by a parent or guardian who accepts full
              responsibility for the minor. Va Expeditions reserves the absolute right to
              decline a booking at their discretion. Clients agree to accept the authority
              and decisions of the employees of Va Expeditions, tour leaders and agents,
              while on the tour with Va Expeditions. If, in the opinion of such persons,
              the health or conduct of a Client before or after departure appears likely
              to endanger the safe, comfortable or happy progress of a tour, the Client
              may be excluded from all or part of the tour. In case of ill health Peru for
              Less may make such arrangements as it sees fit and recover the costs thereof
              from the Client.
            </p>
          </div>
          <div>
            <h2>Local laws</h2>
            <p>
              All participants on tours operated by Va Expeditions are expected to obey
              the laws and regulations of the countries visited and any failure to do so
              will relieve Va Expeditions of all obligations that they may otherwise have
              under these booking conditions.
            </p>
          </div>
          <div>
            <h2>Illness or disability</h2>
            <p>
              Anyone suffering from illness or disability or undergoing treatment for any
              physical or medical condition must declare the true nature of such condition
              at the time of booking and make arrangements for the provision of any
              medication or other treatment which may be required during the tour. Failure
              to make such disclosure will constitute a breach of these booking conditions
              and result in such persons being excluded from the tour in which case all
              monies paid will be forfeited.
            </p>
            <p>
              If the chosen holiday includes a cruise or excursion or transfer by boat of
              any sort, the Client must make it known at the time of booking if he/she is
              unable to swim. This will not prevent the Client from participating in the
              tour but will enable Va Expeditions to take additional precautions for the
              safety of the Client at such times as may be appropriate.
            </p>
          </div>
          <div>
            <h2>If the Client has a Complaint</h2>
            <p>
              If the Client has a complaint about any of the tour arrangements, he/she
              must bring it to the attention of the tour leader or other representative of
              Va Expeditions at the appropriate time so that they may use their best
              endeavours to rectify the situation. It is only if Va Expeditions made aware
              of any problems that there will be the opportunity to put things right.
              Making your complaint known to Va Expeditions as a problem arises during
              your trip will allow us to remedy the situation or facilitate compensation.
              Should the problem remain unsolved, a complaint must be made in writing to
              Va Expeditions within 28 days of the completion of the tour.
            </p>
          </div>
          <div>
            <h2>Flight Bookings</h2>
            <p>
              Peru for Less will use its best endeavors to ensure that all flight prices
              are correct at the time that they are quoted. Airlines reserve the right to
              amend or withdraw fares without prior notice. Once a deposit is paid on an
              airfare, it guarantees that a booking is being held for you, but it DOES NOT
              GUARANTEE the fare. The fare can only be guaranteed when the flight booking
              has been paid in full and a ticket has been issued. Flight bookings cannot
              be transferred.
            </p>
            <p>
              The flight times given by Peru for Less are for general guidance only and
              are subject to change. Up-to-date flight times will be shown on the tickets.
              The Client must check the tickets very carefully immediately upon reception
              of the latest timings. Peru for Less will endeavor to inform the Client as
              soon as possible in the event of any flight alteration. Details of airlines
              are also subject to change. Such alterations do not constitute a significant
              change to the trip arrangements and will therefore not be entitled to cancel
              without paying the normal charges as a result.
            </p>
            <p>
              Peru for Less cannot be held responsible for any delay to your flight
              whether this delay is caused by adverse weather conditions, the action of
              air traffic controllers, airport authorities or (local) governments, the
              rescheduling of flight times by the airline, mechanical breakdown, strike,
              industrial action or any other reason.
            </p>
          </div>
          <div>
            <h2>Our responsibility</h2>
            <p>
              Va Expeditions cannot guarantee the accuracy of any hotel, resort or other
              brochure which is not published by them but may be supplied as an additional
              service to the Client.
            </p>
            <p>
              Va Expeditions accepts responsibility for ensuring that the vacation which
              the Client books with them is supplied as described in the final version of
              the travel programme the Client will receive upon arrival and for ensuring
              that the services reach a reasonable standard.
            </p>
            <p>
              Va Expeditions acts only in the capacity of an agent upon the legal
              conditions that, while exercising every possible precaution, it is not
              responsible for injury, illness, damage, loss, additional expenses,
              accidental delay, or other irregularities which may be caused either through
              wilful or negligent acts or omissions made by the companies or individuals
              providing or engaged in transportation, accommodation or other services
              related to the operation of the tour, or through natural disasters, social
              upheavals or other causes.
            </p>
          </div>
          <div>
            <h2>Website Terms & Conditions</h2>
            <strong>Ownership of Copyrights/Usage Restrictions</strong>
            <p>
              The works of authorship contained in this Web Site, including but not
              limited to all design, text and images, are owned, except as otherwise
              expressly stated, by Va Expeditions. United States, worldwide copyright laws
              and treaty provisions protect the entire contents of this Web Site. In
              accordance with these terms, except as stated above, Web Site users may not:
              <ul>
                <li>
                  Copy, reproduce, modify, use, republish, upload, post, transmit or
                  distribute in any way material from the Web Site.
                </li>
                <li>
                  Copy, modify or display trademarks, names or logos appearing on this Web
                  Site in any way without the express written permission of Va expeditions
                </li>
                <li>
                  Redeliver any of the pages, text, images or other content of this Web
                  Site using “framing” technology without the express written permission
                  of Va Expeditions.
                </li>
              </ul>
            </p>
            <strong>Software</strong>
            <p>
              If you download software from this Web Site, the software, including all
              files, images contained in or generated by the software, and accompanying
              data (together, the “Software”) are deemed to be licensed to you by Va
              Expeditions.Neither title nor intellectual property rights are transferred
              to you, but remain with Va Expeditions who owns full and complete title. You
              may not resell, decompile, reverse engineer, disassemble, or otherwise
              convert the Software to a human perceivable form. Some software from this
              site may be subject to export controls imposed by the United States and may
              not be downloaded or otherwise exported or re-exported: (a) into (or to a
              national or resident of) any country to which the U.S. has placed an
              embargo, including without limitation, Cuba, Iran, Iraq, Libya, North Korea,
              Syria, or Yugoslavia; (b) to everyone on the U.S. Treasury Department’s
              Specially Designated Nationals list, or (c) the U.S. Commerce Department’s
              Table of Denial Orders. If you download or use the Software, you represent
              and warrant that you are not located in, or under the control of, or a
              national of any such country or on any such list.
            </p>
            <strong>Disclaimer; No Warranty</strong>
            <p>
              The factual information contained in this Web Site is obtained from sources
              believed to be reliable and accurate. Va Expeditions makes no guarantee or
              warranty, express or implied, as to the reliability, accuracy, timeliness or
              completeness of that information and is not responsible for any errors or
              omissions therein, whether caused by the source of the information or Va
              Expeditions. All factual and other information, including any opinions,
              accessible through the Web Site are provided on an “AS IS, AS AVAILABLE”
              basis without warranty of any kind and without limiting the generality of
              the foregoing, ANY AND ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A
              PARTICULAR PURPOSE ARE SPECIFICALLY DISCLAIMED. Va Expeditions is not
              responsible in any way for any loss that results from the use of the factual
              information, including but not limited to any lost profits or direct,
              indirect, special, consequential, compensatory or incidental damage. No
              advice or information, whether oral or written, obtained by you from Va
              Expeditions or through this Web Site, shall create any warranty
            </p>
            <strong>Limitation of Liability</strong>
            <p>
              You expressly understand and agree that Va Expeditions will not be liable
              for any direct, indirect, incidental, special, consequential or exemplary
              damages, including, without limitation, damages for loss of profits,
              goodwill, use, data or other intangible losses (even if Va Expeditions has
              been advised of the possibility of such damages), resulting from: (i) the
              use or the inability to use the Web Site; (ii) unauthorized access to or
              alteration of your transmissions or data; or (iii) any other matter relating
              to the Web Site.
            </p>
            <strong>Linkage/Advertising</strong>
            <p>
              You may, through hypertext or other computer links, gain access to third
              parties sites on the World Wide Web, which are not related to or maintained
              by Va Expeditions. Links to third party sites do not imply partnerships,
              relationships or affiliations with such third parties and Va Expeditions
              takes no responsibility for the content therein, regardless of whether the
              link is provided by Va Expeditions, or a third party. No judgment or
              warranty is made with respect to the accuracy, timeliness, or suitability of
              the content of any web site to which the Web Site may link, including
              information on such other web site regarding Va Expeditions.
            </p>
            <p>
              By providing access to other web sites, Va Expeditions, is not endorsing the
              products and services provided by any web site’s sponsoring organization.
              Other web sites may include a link to this Web Site; provided such sites
              link to the home page (www.vaexpeditions.com) only. Linking to other content
              within the Web Site is prohibited without express written consent from Va
              Expeditions.
            </p>
            <p>
              Please e-mail requests for such consent to info@vaexpeditions.com. This
              limited license expressly prohibits the framing of Va Expeditions, in any
              way or any other activity that may create a misimpression or confusion among
              users with respect to sponsorship or affiliation. Your correspondence or
              business dealings with, or participation in promotions of, any advertisers
              found through the Web Site, including payment and delivery of related goods
              or services, and any other terms, conditions, warranties or representations
              associated with such dealings, are solely between you and such advertiser.
            </p>
            <strong>Visitor Privacy</strong>
            <p>
              We recognize that you have an interest in how we collect, retain and use
              information about you. At www.vaexpeditions.com, we collect certain
              information about you through the use of “cookies”, which are small pieces
              of information that are stored by your browser on your computer’s hard
              drive. We collect, retain and use information about you solely for the
              purpose of better understanding our users and their use of the Web Site.
              This however is not personal information.
            </p>
            <p>
              We also collect information through the forms you complete when you elect to
              subscribe to e-mail newsletters. We consider your data to be private and
              confidential, and we hold ourselves to the highest standards of trust and
              fiduciary duty in their safekeeping and use. Va Expeditions will not release
              information collected about you unless we receive your prior consent or we
              are required by law to release information to the recipient. With
              permission, we may use your name and organization description in designated
              areas of the Web Site and services as well as other marketing materials used
              to promote Va Expeditions.
            </p>
            <p>
              Please read our full Privacy Statement for more information about our
              privacy practices.
            </p>
            <strong>Confidentiality Policy</strong>
            <p>
              To the extent a password is provided to you for access to a portion of the
              Web Site, you agree to keep your password confidential and to notify Va
              Expeditions promptly if such password is lost or stolen or if you become
              aware of unauthorized use of such password. You acknowledge that you are
              fully responsible for all activities that occur under your password.
            </p>
            <strong>Submissions/spam</strong>
            <p>
              While we value your feedback on our Web Site and services, we request that
              you be specific in your comments on those services and, not submit any
              ideas, suggestions, materials, concepts or other information (collectively
              referred to herein as “Non-Solicited Information”). If, despite our request,
              you send us any such Non-Solicited Information, all such Non-Solicited
              Information shall be deemed, and shall remain, the property of Va
              Expeditions and none of the Non-Solicited Information shall be subject to
              any obligation of confidence on our part. We shall not be liable for
              disclosure of any Non-Solicited Information and shall have unrestricted use
              of such Information for any purpose whatsoever, commercial or otherwise,
              without compensation or liability to you or other provider of the
              Information.
            </p>
            <strong>Representations Related to Submission of Plans and Resumes</strong>
            <p>
              By submitting a business plan to Va Expeditions, you represent that such
              information is true and accurate and that you have the authority to submit
              such information for review, development, and evaluation for potential
              partnership. Due to the open nature of the Internet, you acknowledge that
              transmission of business plans and confidential information may not be
              entirely secure. You further represent that you have had the opportunity to
              receive advice of counsel prior to submission of any information that may be
              deemed confidential. By submitting a resume to Va Expeditions, you represent
              that you are seeking employment and career information from Peru for Less,
              LLC, and its affiliates, each of which is an equal opportunity employer.
            </p>
            <p>
              You agree not to use the Web Site to post any incomplete, false or
              inaccurate biographical information or information which is not your own
              accurate resume. You acknowledge that Va Expeditions, may distribute your
              resume within the company or among its affiliates and may contact any
              references listed by you. No representation is given by Va Expeditions that
              any resume will be reviewed within a definitive period of time or that any
              action will be taken with respect to such resumes.
            </p>
            <strong>Operation of the Web Site</strong>
            <p>
              Va Expeditions, will use reasonable commercial efforts to keep this Web Site
              available for access on a 24 hour a day, 7 day a week basis, subject to
              scheduled downtime for maintenance purposes, unscheduled maintenance and
              systems outages. There are no assurances, however, that access will be
              available at all times and uninterrupted. Further, Va Expeditions, does not
              warrant that the operation of this Web Site will be error-free, that defects
              will be corrected, or that this Web Site or the servers that make it
              available are free from viruses or other harmful components.
            </p>
            <strong>Web Site Security</strong>
            <p>
              You are prohibited from violating or attempting to violate the security of
              the Web Site, including, without limitation, (a) accessing data not intended
              for your viewing or logging into a server or account which you are not
              authorized to access, (b) attempting to probe, scan or test the
              vulnerability of a system or network or to breach security or authentication
              measures without proper authorization or (c) attempting to interfere with
              service to any user, host or network. Violations of system or network
              security may result in civil or criminal liability. Va Expeditions will
              investigate occurrences that may involve such violations and may involve,
              and cooperate with, law enforcement authorities in prosecuting users who are
              involved in such violations.
            </p>
            <strong>Enforcement of Terms and Conditions</strong>
            <p>
              Va Expeditions, makes no representation that content provided is applicable
              or appropriate for use in all locations. These terms and conditions are
              governed and interpreted pursuant to the laws of the State f Florida, United
              States of America, notwithstanding any principles of conflicts of law. If
              you take legal action relating to these terms, you agree to file such action
              only in the state and federal courts located in the State of Florida. If any
              part of these terms and conditions is unlawful, void or unenforceable, that
              part will be deemed severable and will not affect the validity and
              enforceability of remaining provisions.
            </p>
            <strong>Amendments and Modifications</strong>
            <p>
              Va Expeditions reserves the right to amend the information, services, and/or
              content of this Web Site, including that related to career opportunities and
              benefits, at any time without prior notice. The information and materials
              contained in this Web Site, and the terms and conditions of the access to
              and use of such information and materials, are subject to change without
              notice. We suggest that you check these terms periodically for changes.
              These terms can be accessed from the link at the bottom of our Web Site
              pages. If you use this Web Site after we post changes to the terms, you
              accept the changed terms. Va Expeditions, expressly reserves the right to
              monitor any and all use of this Web Site.
            </p>
            <strong>Trademarks</strong>
            <p>
              Va Expeditions Logo and Design are trademarks or service marks of Va
              Expeditions and may not be copied, used, or displayed without the prior
              written consent of Va Expeditions.
            </p>
          </div>
        </div>
      </div>
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

export default TermsConditions;
