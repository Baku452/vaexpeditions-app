/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react';

import { Banner, ContactUsForm } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TailorMade({ destinations }) {
  const [show, setShow] = useState(false);
  return (
    <Base>
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
                    Acá debería ir la visión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
                <div className="col-12 col-md-3 mx-auto mb-5">
                  <a
                    data-toggle="collapse"
                    role="button"
                    onClick={() => setShow(true)}
                    aria-expanded="false"
                    className="btn bc-3583E0 text-white fs-15 w-100">
                    Begin here
                  </a>
                </div>

                {show && (
                  <div className="w-100">
                    <ContactUsForm destinations={destinations} title={false} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tailor_option">
        <div className="container bc-F7F5F5">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-12 pb-5">
                  <h2 className="fs-20 font-weight-bold text-center">
                    Why chose a tailor made option?
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-5">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                  <p className="m-0 fs-20 pt-4">
                    Acá debería ir la visión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                  <p className="m-0 fs-20 pt-4">
                    Acá debería ir la visión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                  <p className="m-0 fs-20 pt-4">
                    Acá debería ir la visión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                  <p className="m-0 fs-20 pt-4">
                    Acá debería ir la visión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default TailorMade;
