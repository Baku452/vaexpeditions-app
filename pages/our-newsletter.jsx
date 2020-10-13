import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Base } from '@/layouts/index';

function Newsletter() {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    if (router?.query?.email) setEmail(router?.query?.email);
  }, [router]);
  return (
    <Base>
      <section id="thank_you">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-10 p-0 pb-5 mb-5 p-0 mx-auto">
              <h2 className="fs-35 pt-5 pb-4">Newsletter</h2>
              <div className="card">
                <div className="card-body pt-5 mt-3 text-center">
                  <p className="card-text fs-20 lh-29 mb-4">
                    In order to complete your subscription please fill out the following
                    information
                  </p>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="col-12 col-md-10 p-0 mx-auto text-left">
                      <div className="row pt-3 pb-0 pb-md-3">
                        <div className="col-12 col-md-6 mx-auto">
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
                      </div>
                      <div className="row m-b-100">
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
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
                      {/* <div className="row form-group">
                        <p className="col-12 fs-18 lh-29 pt-5 pb-4">
                          Please tell us some of your interests
                        </p>
                        <div className="col-12 col-md-4 m-b-25 text-left">
                          <Form.Check
                            required
                            name="terms"
                            label="Please send me your newsletter"
                            // onChange={handleChange}
                            // isInvalid={!!errors.terms}
                            // feedback={errors.terms}
                          />
                        </div>
                      </div> */}
                      <div className="row form-group pt-5">
                        <div className="col-12 col-md-5 mx-auto">
                          <input
                            type="submit"
                            value="Finish Subscription"
                            className="btn bc-3583E0 text-white fs-18 w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default Newsletter;
