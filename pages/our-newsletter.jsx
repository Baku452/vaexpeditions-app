import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Hero2 } from '@/components/index';
import { saveNewsletter } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Newsletter({ destinations, packagetypes, notifications, packagesAll }) {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [packageTypes, setPackageTypes] = useState([]);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const formDataWithPackages = { ...formDataEntries, package_type: packageTypes };

      const { result } = await saveNewsletter({ data: formDataWithPackages });

      setSuccess(true);
      window.scroll(0, 0);
    }

    setValidated(true);
  }

  function actionFiltersTypes(event, id) {
    const index = packageTypes.findIndex(item => item === id);

    if (index === -1) packageTypes.push(id);
    else packageTypes.splice(index, 1);
  }

  useEffect(() => {
    if (router?.query?.email) setEmail(router?.query?.email);
  }, [router]);
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Hero2
        title="Subscribe Newsletter"
        image="/images/contact.png"
        alt="subscribe newsletter"
      />

      <section id="thank_you">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-10 p-0 py-5  p-0 mx-auto">
              {/* <h2 className="fs-35 pt-5 pb-4">Subscribe Newsletter</h2> */}

              {success ? (
                <div className="card border mb-5 pb-5">
                  <div className="card-body pb-5 pt-5 mt-4 text-center">
                    <h5 className="card-title fs-30 pb-5">
                      Thank you for subscribing to our newsletter!
                    </h5>
                    <p className="card-text fs-18 lh-29">
                      While you are still here, feel free to navigate through our
                      <Link href="/tailor-made-tour">
                        <a> Tailor-Made Tours</a>
                      </Link>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="card border">
                  <div className="col-12 pt-3 mt-3 text-left newsletter">
                    <h2 className="text-center">
                      View Central and South America from a totally different perspective.
                    </h2>
                    <p className="fs-18 lh-29 mb-4">
                      Unique destinations, travel advice, inspirational travel stories,
                      mindful travel tips, helpful information and advice from our experts
                      and clients delivered straight to your inbox!
                    </p>
                    <p className="fs-18 lh-29 mb-4">
                      Subscribe to our newsletter by completing the following information:
                    </p>
                  </div>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="col-12 col-md-12 p-0 mx-auto text-left">
                      <div className="row m-b-100 px-3">
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="E-mail Address"
                              size="lg"
                              defaultValue={email}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid email.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              name="first_name"
                              placeholder="First Name"
                              size="lg"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid First Name.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              name="last_name"
                              placeholder="Last Name"
                              size="lg"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Last Name.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group px-3">
                        <p className="col-12 fs-18 lh-29 pt-3 pb-4">
                          Please tell us some of your interests
                        </p>
                        {packagetypes.map(item => (
                          <div key={item.id} className="col-12 col-md-3 m-b-25 text-left">
                            <Form.Check
                              value={item.id}
                              type="checkbox"
                              onChange={event => actionFiltersTypes(event, item.id)}
                              name={`type${item.id}`}
                              id={`type${item.id}`}
                              label={item.title}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="row form-group pt-5">
                        <div className="col-12 col-md-5 mx-auto">
                          <input
                            type="submit"
                            value="Finish Subscription"
                            className="btn btn-primary fs-16 w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
    },
  };
}

export default Newsletter;
