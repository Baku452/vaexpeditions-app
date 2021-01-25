/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import {
  Icon,
  OurRecommendations,
  PackageTypes,
  Reviews,
  TopTours,
} from '@/components/index';
import Asta from '@/icons/asta.svg';
import Attamember from '@/icons/attamember.svg';
import Guarranty from '@/icons/guarranty.svg';
import Lata from '@/icons/lata.svg';
import Tripadvisor from '@/icons/tripadvisor.svg';
import Ustoa from '@/icons/ustoa.svg';
import { Home } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Index({
  types,
  tours,
  destinations,
  banners,
  packagetypes,
  interests,
  notification,
}) {
  const router = useRouter();

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());

      router.push({
        pathname: '/our-newsletter',
        query: { email: formDataEntries.email },
      });
    }
    setValidated(true);
  };

  return (
    <Home
      destinations={destinations}
      banners={banners}
      packagetypes={packagetypes}
      interests={interests}
      notification={notification}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2047841,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      <PackageTypes types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <Reviews />
      <section id="recommendations" className="news mt-5">
        <img
          src="/images/newsletter.png"
          className="fit  w-100 h-100 position-absolute"
          alt="..."
        />
        <div className="found" />

        <div className="container">
          <Form
            className="form-inline"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <div className="row pt-5">
              <div className="d-md-flex pt-5">
                <div className="col-10 col-md-9 mx-auto p-0">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-md-5 text-left p-0 p-lg-2">
                      <h4 className="fs-26 font-weight-bold text-white pb-3">
                        Suscribe to our newsletter to get tips and travelling ideas
                      </h4>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="row">
                        <div className="col-12 col-md-9 p-0 pr-lg-1">
                          <Form.Control
                            type="email"
                            className="form-control w-100 h-45 mb-2"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-3 p-0">
                          <button
                            className="btn w-100 h-45 bc-3583E0 text-white fs-15"
                            type="submit">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>

      {/* <section id="clientes">
        <div className="container bc-F7F5F5">
          <div className="row p-t-55 p-b-40">
            <div className="col-12 text-center">
            </div>
          </div>
        </div>
      </section> */}

      <div className="container">
        <div className="row">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Attamember}
                  viewBox="0 0 268 70"
                  style={{ fontSize: '150px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center pt-4">
                <Icon
                  component={Tripadvisor}
                  viewBox="0 0 146 144"
                  style={{ fontSize: '100px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center  pt-3">
                <Icon
                  component={Lata}
                  viewBox="0 0 176 129"
                  style={{ fontSize: '110px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center pt-3">
                <Icon
                  component={Guarranty}
                  viewBox="0 0 176 144"
                  style={{ fontSize: '120px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Ustoa}
                  viewBox="0 0 240 70"
                  style={{ fontSize: '150px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Asta}
                  viewBox="0 0 190 82"
                  style={{ fontSize: '150px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}

export async function getStaticProps() {
  const typesResponse = await fetch(`${PUBLIC_API}/experiences/list/`);
  const types = await typesResponse.json();

  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  const bannersResponse = await fetch(`${PUBLIC_API}/banners/`);
  const banners = await bannersResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notification = await notificationResponse.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notification,
    },
    revalidate: 1,
  };
}

export default Index;
