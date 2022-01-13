import Head from 'next/head';

import { GridCard, Hero, OurCoreValue, PageContent } from '@/components/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPeople({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
  packagesAll,
  pagecontent,
  collaborators,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      pixels={700}>
      <Head>
        <title>Our People - Va Expeditions </title>
        <meta
          name="description"
          content="Our People - Our Team - Local Experts - Our Core Values"
        />
      </Head>

      <Hero
        title="Our People"
        image="/images/why-chose-va.jpg"
        description=""
        alt="who we are"
      />

      <div className={`${styles.anchor} pt-4 px-xl-0 lh-34`}>
        <section id="OurTeam" className="containerBox row py-4 py-xl-5">
          <div className="col-12 text-center">
            <h2 className="titleUnderline fs-30 lh-34 text-center">Our Team</h2>
            <p className="pt-5">
              Our team is the reason of our success. We are committed to them, and the
              result is a joined effort of discovering new extraordinary, transformative,
              revitalizing and personalized travel experiences that are connected to the
              lives of our clients.
            </p>
          </div>
        </section>
        {collaborators ? (
          <section className="background2 py-4 py-xl-5">
            <div className="containerBox">
              <GridCard
                items={collaborators}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              />
            </div>
          </section>
        ) : null}
        <section id="LocalExperts" className="containerBox row py-4 py-xl-5">
          <PageContent page={pagecontent[2]} ourpurpose={ourpurpose} />
        </section>

        <section id="OurCoreValues" className="containerBox row py-4 py-xl-5">
          <OurCoreValue />
        </section>
      </div>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const ourpurposeResponse = await fetch(`${PUBLIC_API}/ourpurpose/list/`);
  const ourpurpose = await ourpurposeResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const pagecontentResponse = await fetch(`${PUBLIC_API}/history/`);
  const pagecontent = await pagecontentResponse.json();

  const collaboratorsReq = await fetch(`${PUBLIC_API}/collaborators`);
  const collaborators = await collaboratorsReq.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      packagesAll,
      pagecontent,
      collaborators,
    },
    revalidate: 1,
  };
}
