import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ContactForm } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({ destinations, packagetypes, packages, notifications }) {
  const router = useRouter();
  const [pack, setPack] = useState('');

  useEffect(() => {
    if (router?.query?.package) setPack(router?.query?.package);
  }, [router]);

  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <ContactForm destinations={destinations} packages={packages} pack={pack} />
    </Base>
  );
}

export async function getStaticProps() {
  const responseTypes = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await responseTypes.json();
  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();
  const packagesResponse = await fetch(`${PUBLIC_API}/packages/`);
  const packages = await packagesResponse.json();
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();


  return {
    props: {
      destinations,
      packagetypes,
      packages,
      notifications,
    },
    revalidate: 1,
  };
}

export default ContactUs;
