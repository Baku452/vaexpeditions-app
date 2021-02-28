import { Banner, PageContent } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPhilosophy({ destinations, packagetypes, notifications, ourpurpose, pagecontent }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
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
