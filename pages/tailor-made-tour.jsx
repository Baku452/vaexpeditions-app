/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react';

//Error de immportac
// import { Banner, ContactUsForm } from '@/components/index';

//Linea agregada de componente Contact
import { Banner, TailorForm, WhyTailor, TailorWork } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TailorMade({
  destinations,
  packagetypes,
  tailors,
  notifications
}) {
  const [show, setShow] = useState(false);
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Banner
        description="DESIGN YOUR ULTIMATE ADVENTURE WITH OUR TAILORMADE TOURS SERVICE"
        image="/images/tailor-made.jpg"
        alt="weq"
      />

      <section id="descripion">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-12">
                  <p className="fs-20 pb-5 m-0 text-center">
                    Real life experiences are extremely difficult to find by simply performing a Google search. Experience a total change of perspective by allowing us to design a unique and flexible travel itinerary to enjoy the vacation you have always dreamed of. Offering the freedom to go, see and do exactly what you like.
                    Far removed from large group tours and well-trodden paths, our focus is on visiting authentic local cultures in a sustainable manner, overflowing with uniquely rich experiences. A holiday with Valencia Travel, is a personal experience from the moment you contact us, until you have returned home and become absorbed by your daily routine.
                    Our personalized travel experts will assist you in taking maximum advantage of your time restraints and your holiday budget. All you need to do is start dreaming about your perfect itinerary and we will take charge of the remaining details.  Contact us today or fill in the contact form and one of our experts will be in touch before you know it.
                  </p>
                </div>
                <div className="col-12 col-md-3 mx-auto mb-5">
                  <a
                    data-toggle="collapse"
                    role="button"
                    onClick={() => setShow(v => !v)}
                    aria-expanded="false"
                    className="btn btn-primary w-100">
                    Begin here
                  </a>
                </div>

                {show && (
                  <div className="w-100">
                    <TailorForm destinations={destinations} title={false} types={packagetypes} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyTailor tailors={tailors} />
      <TailorWork />
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const tailorsResponse = await fetch(`${PUBLIC_API}/tailors/list/`);
  const tailors = await tailorsResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      tailors,
      notifications,
    },
    revalidate: 1,
  };
}

export default TailorMade;
