import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ContactUsForm } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({ destinations, packagetypes, packages }) {
  const router = useRouter();
  const [pack, setPack] = useState('');

  useEffect(() => {
    if (router?.query?.package) setPack(router?.query?.package);
  }, [router]);

  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <ContactUsForm destinations={destinations} packages={packages} pack={pack} />
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

  return {
    props: {
      destinations,
      packagetypes,
      packages,
    },
    revalidate: 1,
  };
}

export default ContactUs;
