/* eslint-disable max-len */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputGroup } from 'node_modules/react-bootstrap/esm/index';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaHome, FaMapMarker, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import { countries, saveContactUs } from '@/core/index';

function ContactForm({ destinations }) {
  const router = useRouter();
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const formValues = { ...formDataEntries, ...{ is_newsletter: newsletter } };
      await saveContactUs({ data: formValues });
      router.push('/contact-us/thank-you-contact-us');

      setSuccess(true);
      window.scroll(0, 0);
    }
    setValidated(true);
  };

  return (
    <section id="thank_you">
      <div className="container">
        <div className="row mb-3">
          <div className="col-11 col-md-10 p-0 py-5 p-0 mx-auto ">
            {/* {title && <h2 className="fs-35 pt-5 pb-4">Contact Us</h2>} */}

            {success ? (
              // router.push('/contact-us/thank-you-contact-us')
              <h2 className="text-center">Sending Mail...</h2>
            ) : (
              <div className="card border">
                <div className="row px-5">
                  <div className="fs-14 col-md-12 col-lg-3 pt-3 mb-3 pb-0 order-2 align-self-center background2">
                    <p className="p">
                      Portal Panes #123 / Centro Comercial Ruiseñores
                      <br />
                      Office #: 306-307 / Cusco - Peru
                    </p>
                    <p>
                      Hours of Operation <br />
                      Monday through Friday: 9:00am to 6:00pm
                    </p>

                    <p>
                      For general questions about our Expeditions, please call 1 - (860)
                      856 5858 or 1 - (917) 983 2727.
                    </p>

                    <p>
                      If you have a question about our Va Expeditions trips, please submit
                      your inquiry via the form below:
                    </p>

                    <p>
                      <span className="redtext">*</span> Indicates required field
                    </p>
                  </div>

                  <Form
                    id="contact-us-form"
                    className="col-sm-12 col-md-12 col-lg-9 px-2 p-0 text-start order-1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <div>
                      <p className="card-text fs-20 lh-29 py-5 text-center">
                        Please fill out the following information. <br />
                        We will get back to you in a maximum time of 48 hours.
                      </p>
                      <div className="row mb-4">
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <FaUserAlt />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="first_name"
                              placeholder="First Name *"
                              size="lg"
                              required
                            />
                          </InputGroup>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid first name.
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <FaUserAlt />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="last_name"
                              placeholder="Last Name *"
                              size="lg"
                              required
                            />
                          </InputGroup>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid last name.
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <GrMail />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="E-mail Address *"
                              size="lg"
                              required
                            />
                          </InputGroup>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <FaPhoneAlt />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="number"
                              placeholder="Cellphone / Telephone ... *"
                              size="lg"
                            />
                          </InputGroup>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid number
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <FaHome />
                            </InputGroup.Text>
                            <Form.Control
                              as="select"
                              size="lg"
                              name="country_residence"
                              required>
                              <option value="">Country of Residence</option>
                              {countries.map(item => (
                                <option key={item.code} value={item.name}>
                                  {item.name}
                                </option>
                              ))}
                            </Form.Control>
                          </InputGroup>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12 col-md-6">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <FaMapMarker />
                            </InputGroup.Text>
                            <Form.Control
                              as="select"
                              size="lg"
                              name="destination_interest"
                              required>
                              <option value="">Destination of interest</option>
                              {destinations.map(item => (
                                <option key={item.title} value={item.title}>
                                  {item.title}
                                </option>
                              ))}
                            </Form.Control>
                          </InputGroup>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Destination of interest.
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Form.Control
                              placeholder="Questions / Comments / Useful Information"
                              as="textarea"
                              size="lg"
                              rows="5"
                              name="message"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid message
                            </Form.Control.Feedback>
                          </div>
                        </div>

                        <div className="col-12 text-start">
                          <Form.Check
                            value
                            label="Please send me your email newsletter"
                            onChange={e => setNewsletter(e.target.checked)}
                            name="is_newsletter"
                            id="validationFormik0"
                          />
                        </div>
                        <p className="col-12 pt-3 fs-9">
                          We respond to all inquiries within one business day. If you do
                          not hear back from us within this timeframe, please check your
                          spam folder or call 1-860-856-5858. By Signing up for this
                          email, you are agreeing to receive new, offers, and information
                          from Va Expeditions or our partners. Click
                          <Link href="/pages/privacy-policy-of-va-expeditions">
                            <a> here </a>
                          </Link>
                          to visit our Privacy Policy. Easy unsubscribe links are provided
                          in every email.
                        </p>
                      </div>
                    </div>
                    <div className="row form-group pb-3">
                      <div className="col-12 col-md-5 mx-auto">
                        <input
                          type="submit"
                          data-sitekey="6LeoM4oaAAAAAKeP7g_6B2QCobemeKfIcyVmI3Ur"
                          value="Send Message"
                          className="btn btn-primary fs-16 w-100"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactForm };
