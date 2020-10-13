import { ContactUsForm } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function ContactUs({ destinations }) {
  return (
    <Base>
      <ContactUsForm destinations={destinations} />
    </Base>
  );
}

export async function getStaticProps() {
  const responseTypes = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await responseTypes.json();

  return {
    props: {
      destinations,
    },
    revalidate: 1,
  };
}

export default ContactUs;
