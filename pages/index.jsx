import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { OurRecommendations, PackageTypes, Reviews, TopTours } from '@/components/index';
import { Home } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Index({ types, tours, destinations, banners, packagetypes }) {
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
    <Home destinations={destinations} banners={banners} packagetypes={packagetypes}>
      <PackageTypes types={types} />
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
                    <div className="col-12 col-md-5 text-left">
                      <h4 className="fs-30 font-weight-bold text-white pb-3">
                        Suscribe to our newsletter to get tips and travelling ideas
                      </h4>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="row">
                        <div className="col-12 col-md-9">
                          <Form.Control
                            type="email"
                            className="form-control w-100 h-45 mb-2"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-3">
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

      <section id="clientes">
        <div className="container bc-F7F5F5">
          <div className="row p-t-55 p-b-40">
            <div className="col-12 text-center">
              <img src="static/img/clientes.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
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

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
    },
    revalidate: 1, // In seconds
    // fallback: true,
  };
}

export default Index;
