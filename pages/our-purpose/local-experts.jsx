import Head from 'next/head';

import { Banner, PageContent } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
  pagecontent,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        <title>Va Expeditions - Local Experts</title>
        <meta
          name="description"
          content="These incredible people were born in the heart of the destination that 
          you will visit. 
          These people adore their countries and have an innate knowledge about
          the country that they will be showing you around."
        />
      </Head>
      <Banner description="" image="/images/local-experts.jpg" alt="weq" />
      <PageContent page={pagecontent[2]} ourpurpose={ourpurpose} />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
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
      pagecontent,
      ourpurpose,
    },
  };
}
