import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ContactForm, Hero2 } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({ destinations, packagetypes, packages, notifications, packagesAll }) {
  const router = useRouter();
  const [pack, setPack] = useState('');

  useEffect(() => {
    if (router?.query?.package) setPack(router?.query?.package);
  }, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>Contact Us - Va Expeditions</title>
        <meta
          name="Description"
          content="Contact Us to Explore Multidestinations with VAExpeditions"
        />
      </Head>
      <Hero2 title="Contact US" image="/images/contact.jpg" alt="contact us" />
      <ContactForm destinations={destinations} packages={packages} pack={pack} />
    </Base>
  );
}

export async function getStaticProps() {
  const responseTypes = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await responseTypes.json();
  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();
  const packagesResponse = await fetch(`${PUBLIC_API}/packages/`);
  const packages = await packagesResponse.json();
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      packages,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default ContactUs;
