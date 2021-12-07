import Head from 'next/head';

import { Hero , PageContent , OurCoreValue} from '@/components/index';
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
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      pixels={700}>
      <Head>
        <title>Va Expeditions - Our People</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      <Hero
        title="Our People"
        image="/images/why-chose-va.jpg"
        alt="who we are"
      />

        <div className={`containerBox ${styles.anchor} px-4 px-lg-5 px-xl-0 lh-34`}>
                        

            <section id="LocalExperts" className="row py-4 py-xl-5">
              <PageContent page={pagecontent[2]} ourpurpose={ourpurpose} />
            </section>

            <section id="OurCoreValues" className="row py-4 py-xl-5">
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

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      packagesAll,
      pagecontent,
    },
    revalidate: 1,
  };
}
