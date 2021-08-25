import { Banner, PageContent } from '@/components/index';
import Head from 'next/head';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function History({ destinations, packagetypes, notifications, ourpurpose, pagecontent }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Head>
        <title>Va Expeditions - Travel History</title>
        <meta
          name="description"
          content="Va Expeditions was founded in 2009. The company came about as a dream of the Hurtado Valencia 
          brothers to create a business venture in the world of tourism.  René, a professional guide and the actual 
          CMO of the Company, Amílcar, a philosophy student and assistant manager of the company come from a relatively 
          large family from the province of Chumbivilcas, found 8 hours away from Cusco, Peru."
        />
      </Head>
      <Banner
        description=""
        image="/images/history-of-the-valencia.jpg"
        alt="weq"
      />
      <PageContent page={pagecontent[0]} ourpurpose={ourpurpose} />
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

  const pagecontentResponse = await fetch(`${PUBLIC_API}/history/`);
  const pagecontent = await pagecontentResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      pagecontent
    },
  };
}
