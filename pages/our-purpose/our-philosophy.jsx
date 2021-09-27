import Head from 'next/head';
import { Banner, PageContent } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPhilosophy({ destinations, packagetypes, notifications, ourpurpose, pagecontent }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Head>
        <title>Va Expeditions - Our Philosophy</title>
        <meta
          name="description"
          content="We wholeheartedly believe that by travelling in a conscientious responsible and sustainable way, 
          we can connect different cultures and change perspectives about the world. We are fully committed to preserving 
          the unique magic of local communities, animal species and our natural environment by sharing our knowledge and 
          that of ancient communities to contribute to making our planet a better place."
        />
      </Head>
      <Banner
        description=""
        image="/images/our-philosophy.jpg"
        alt="weq"
      />
      <PageContent page={pagecontent[1]} ourpurpose={ourpurpose} />

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
