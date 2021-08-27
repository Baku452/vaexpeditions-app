import Head from 'next/head';
import { Banner, CardBox } from '@/components/index';
import { Base } from '@/layouts/index';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({
  destinations,
  packagetypes,
  notifications,
  ourpurpose,
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
       <title>Va Expeditions - Our Purpose</title>
        <meta
          name="description"
          content="Here at Va Expeditions, we strive to unite people through travel. 
          Each itinerary is especially designed to create a global community of travellers, 
          free to immerse themselves in different cultures and ways of life, free from fear 
          and with a focus on creating a sustainable future"
        />
      </Head> 
      <Banner
        description=""
        image="/images/portada our purpose.jpg"
        alt="Our Purpose - Valencia Travel"
      />

      <section
        id="ourPurpose"
        className="row containerBox text-justify py-5 align-items-center">
        <div className="col-12 col-md-6 p-3 mb-3">
          <h2 className="title m-0 fs-20 font-weight-bold mb-4">Our Purpose</h2>
          <p className="m-0 fs-16 lh-34">
            Here at Va Expeditions, we strive to unite people through travel. 
            Each itinerary is especially designed to create a global community of travellers, 
            free to immerse themselves in different cultures and ways of life, free from fear 
            and with a focus on creating a sustainable future. 
          </p>
          
        </div>
        <div className="col-12 d-none d-md-block p-3 col-md-6 align-self-center">
          <img src="images/our-purpose-min.jpg" alt="Our Purpose" className="img-fluid" />
        </div>
      </section>

      <section
        id="vision"
        className="containerBox text-justify row align-items-center pb-5">
        <div className="col-12 col-md-6 order-2 order-md-1 align-self-center">
          <img
            alt="Valencia Travel visión"
            src="images/vision2.jpg"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-5 order-1 order-md-2">
          <h2 className="title m-0 fs-20 font-weight-bold mb-4">Our Vision</h2>
          <p className="m-0 fs-16 lh-34">
          Our aim is to position ourselves as one of the leaders in the international 
          travel market with a people -first ethic, basic on customer satisfaction, 
          as well as ethical and sustainable tourism. 
          </p>
        </div>
      </section>
      <section
        id="mision"
        className="containerBox text-justify row align-items-center pb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-5 order-1">
          <h2 className="title m-0 fs-20 font-weight-bold mb-4">Our Mision</h2>
          <p className="m-0 fs-16 lh-34">
          To design creative and innovative travel experiences to motivate people to explore the 
          incredible natural diversity of Central and South America, as well as the cultural and historical   
          magnificence of its countries, positively contributing to local communities and travellers to the continent.   
          </p>
        </div>
        <div className="col-12 col-md-6 mb-5 order-2 align-self-center">
          <img
            alt="Valencia Travel misión"
            src="images/mision2.jpg"
            className="img-fluid"
          />
        </div>
      </section>

      <CardBox items={ourpurpose} />
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

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
      packagesAll,
    },
    revalidate: 1,
  };
}
