import { Banner, PageContent } from '@/components/index';
import { CardBox } from '@/components/index';
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

<section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5">
          <div className="row">
            <div className="col-0 mx-auto">
            <h2 className=" font-weight-bold text-center">Va Expeditions History</h2>
              <div className="row mb-5 pt-5">
                <div className="col-0 mb-5 col-md-6 order-1 order-md-2  m-0 fs-17 lh-34 text-fluid align-self-center">
                 <p >
                  Va Expeditions was founded in 2009. The company came about as a dream of the Hurtado Valencia brothers to 
                  create a business venture in the world of tourism.  René, a professional guide and the actual CMO of the Company, 
                  Amílcar, a philosophy student and assistant manager of the company come from a relatively large family from the 
                  province of Chumbivilcas, found 8 hours away from Cusco, Peru.   
                  The brothers had a vision to create the best possible travel agency in the city of Cusco; an agency that connects 
                  the lives of people through travel, to form a global community free of fear of the unknown and conscious about the planet.  
                  The name of the company was inspired by their mothers’ surname, Valencia, originating from Spain.  
                  </p>
                  <p>
                  We connect our passengers through travel experiences which will transform their lives through authenticity, innovation and dedication. 
                  Our whole purpose is to offer a service that goes above and beyond the expectations of the client and which is based on excellence and 
                  high standards. 
                  </p>
                  </div>
                  <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="/images/llamas-cruzadas-2.jpg" className="img-fluid llama"/> 
                  </div>
                  <div className="col-12 mb-5 order-md-2  m-0 fs-17 lh-34 text-fluid">
                  <p>
                  ´´We started with a small office space and an enormous dream. Now our company is one of the leaders in the tourism 
                  industry and renowned for its quality of service, technology and the unique experiences that we offer”.   
                  </p>
                  <p>
                  In the words of Rene Valencia:  
                  </p>
                  <p>
                  Our Brand identity emerged from an idea that came about from the numerous visits to Machu Picchu working as a tour 
                  guide and Tour conductor. I had the opportunity to photograph the many archaeological sites in the area. 
                  “It is impossible to NOT ask yourself about why Machu Picchu is here. There are so many possible places that 
                  this amazing site could have been built and create an empire that controlled the territory from Chile to Ecuador.”
                  </p>
                  <p>
                  For what unfathomable reason did the Incas decide to build this site here, given the difficulty of the geography of the 
                  region, 500 metres above the River Urubamba?  My curiosity as to why these magnificent monuments and archaeological sites 
                  came about have led me to travel through most of Latin America to understand why ancient civilizations across the continent 
                  can give us the perfect insight into history, culture and the origins of ancient civilizations. These days I can combine 
                  these incredible sites with idyllic beaches, fascinating cultures, abundant rainforests and delicious cuisine, all through 
                  Central and South America and I consider myself to be lucky and blessed to have been born in this part of the world.   
                  </p>
                </div>
                </div>
            </div>
          </div>
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
