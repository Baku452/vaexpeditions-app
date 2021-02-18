/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react';

//Error de immportac
// import { Banner, ContactUsForm } from '@/components/index';

//Linea agregada de componente Contact
import { Banner, TailorForm, WhyTailor } from '@/components/index';
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
        description="We are ready to design your ideal travel experiencia with you"
        image="/images/arequipa3.jpg"
        alt="weq"
      />

      <section id="descripion">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-12">
                  <p className="fs-20 pb-5 m-0">
                    This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen
                    book. Lorem
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
                    <TailorForm destinations={destinations} title={false} pack="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyTailor tailors={tailors} />
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
