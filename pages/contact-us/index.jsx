import Head from 'next/head';

import { ContactForm, Hero2 } from '@/components/index';
import { Base } from '@/layouts/index';
import { fetchCities } from '@/utils/citiesApi';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  resCities,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Contact Us | Va Expeditions</title>
        <meta
          name="Description"
          content="Contact Us to Explore Multidestinations with VAExpeditions"
        />
      </Head>
      <Hero2 title="Contact US" image="/images/contact.jpg" alt="contact us" />
      <ContactForm destinations={destinations} cities={resCities} />
    </Base>
  );
}

export async function getStaticProps() {
  const responseTypes = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await responseTypes.json();
  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const resCities = await fetchCities();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      resCities,
    },
    revalidate: 60,
  };
}

export default ContactUs;
