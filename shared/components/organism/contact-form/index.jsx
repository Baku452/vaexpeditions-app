import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaHome, FaMapMarker, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import { saveContactUs } from '@/core/index';
import recaptchaVerification from '@/utils/formValidation';
import { loadRecaptchaURL } from '@/utils/loadRecaptcha';

function ContactForm({ destinations, cities }) {
  const router = useRouter();
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState();
  const [isTravelAgent, setTravelAgent] = useState(false);
  const [destinationInterest, setDestinationInterest] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedPackage, setSelectedPackage] = useState();
  const [descriptionForm, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const states2 = [...cities];

  const fetchPackages = async id => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/packages/top/${id}`);
    setPackages(res.data.results);
    setLoading(false);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const sendingData = async data => {
    const formData = new FormData(data);
    const formDataEntries = Object.fromEntries(formData.entries());
    const formValues = {
      ...formDataEntries,
    };
    setSending(true);
    recaptchaVerification(formValues, email, saveContactUs)
      .then(router.push('/contact-us/thank-you-contact-us'))
      .catch(() => {
        router.push('/');
      });
  };
  const handleChange = event => {
    switch (event.target.name) {
      case 'country_code': {
        const obj = states2.find(item => item.iso2 === event.target.value);
        setSelectedCountry(obj.name);
        return;
      }
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  };

  const handlePackageChange = e => {
    setSelectedPackage(e.target.value);
  };

  const handleDestinationChange = e => {
    const idDest = e.target[e.target.selectedIndex].dataset.tag;
    setDestinationInterest({
      id: idDest,
      title: e.target.value,
    });
    setLoading(true);
    fetchPackages(idDest);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() !== false) {
      sendingData(event.target);
    }
    setValidated(true);
  };
  useEffect(() => {
    loadRecaptchaURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
    );
  }, []);

  useEffect(() => {
    setDescription(
      `Destination Interest: ${destinationInterest.title} 
      \n Message: ${message} 
      \n ${selectedPackage ? `Package: ${selectedPackage}` : ``}
      `,
    );
  }, [message, destinationInterest, selectedPackage]);
  return (
    <section id="thank_you">
      <div className="container">
        <div className="row mb-5">
          <div className="col-11 col-md-10 p-0 pb-5 mb-5 p-0 mx-auto">
            {<h2 className="fs-35 pt-5 pb-4 title">Contact Us</h2>}

            {sending ? (
              <h2 className="text-center">Sending Mail...</h2>
            ) : (
              <div className="card border">
                <p className="card-text fs-20 lh-29 py-5 text-center">
                  Please fill out the following information. <br />
                  We will get back to you in a maximum time of 48 hours.
                </p>
                <div className="row px-5">
                  <div className="fs-14 col-12 col-lg-3 pe-4">
                    <p>
                      Portal Panes #123 / Centro Comercial Ruiseñores
                      <br />
                      Office #: 306-307 / Cusco - Peru
                    </p>
                    <p>
                      Hours of Operation <br />
                      Monday through Friday: 8:00am to 7:00pm
                    </p>

                    <p>
                      For general questions about our Expeditions, please call 1 - (860)
                      856 5858 or 1 - (917) 983 2727.
                    </p>

                    <p>
                      If you have a question about our Valencia Travel trips, please
                      submit your inquiry via the form below:
                    </p>

                    <p>*Indicates required field</p>
                  </div>

                  <Form
                    id="contact-us-form"
                    className="col-sm-12 col-md-12 col-lg-9 mx-auto p-0 text-start"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      id={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
                      name={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
                      value="1"
                    />

                    <input type="hidden" name="oid" value={process.env.NEXT_PUBLIC_OID} />
                    <input
                      type="hidden"
                      id={process.env.NEXT_PUBLIC_DESTINATION_ID}
                      name={process.env.NEXT_PUBLIC_DESTINATION_ID}
                      maxLength="100"
                      size="20"
                      value={destinationInterest}
                    />
                    <input
                      type="hidden"
                      id="lead_source"
                      name="lead_source"
                      value="Direct Web / Form"
                    />
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
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid first name.
                          </Form.Control.Feedback>
                        </InputGroup>
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
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid last name.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic_addon1">
                              <GrMail />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              id="email"
                              name="email"
                              placeholder="E-mail Address *"
                              size="lg"
                              required
                              onChange={event => handleEmail(event)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid email address.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic_addon1">
                            <FaPhoneAlt />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Cellphone / Telephone ... *"
                            size="lg"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid cellphone
                          </Form.Control.Feedback>
                        </InputGroup>
                      </div>
                      <div className="col-12">
                        <InputGroup className="mb-3">
                          <Form.Label className="col-12">Country *</Form.Label>
                          <InputGroup.Text id="basic_addon1">
                            <FaHome />
                          </InputGroup.Text>
                          <Form.Control
                            as="select"
                            size="lg"
                            id="country_code"
                            name="country_code"
                            onChange={handleChange}
                            required
                            style={{ color: '#939393' }}>
                            <option value="US">United States</option>
                            {states2.map(item => (
                              <option key={item.iso2 + item.name} value={item.iso2}>
                                {item.name}
                              </option>
                            ))}
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
                          </Form.Control.Feedback>
                        </InputGroup>
                        <input
                          type="hidden"
                          id="country"
                          name="country"
                          value={selectedCountry}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <Form.Label className="col-12">
                          Destination of Interest *
                        </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic_addon1">
                            <FaMapMarker />
                          </InputGroup.Text>
                          <Form.Control
                            as="select"
                            size="lg"
                            name="destination_interest"
                            required
                            onChange={e => handleDestinationChange(e)}>
                            <option style={{ color: '#939393' }} value="">
                              Destination of interest
                            </option>
                            {destinations.map(item => (
                              <option
                                data-tag={item.id}
                                key={item.title}
                                value={item.title}>
                                {item.title}
                              </option>
                            ))}
                          </Form.Control>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Destination of interest.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </div>
                      <div className="col-12 col-md-6">
                        <Form.Label className="col-12">Package of Interest</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic_addon1">
                            <FaMapMarker />
                          </InputGroup.Text>
                          <Form.Control
                            as="select"
                            size="lg"
                            name="package"
                            onChange={e => handlePackageChange(e)}>
                            <option style={{ color: '#939393' }} value="">
                              {loading ? 'Loading' : 'Select a Package (optional)'}
                            </option>

                            {!loading ? (
                              packages.map(item => (
                                <option key={item.title} value={item.title}>
                                  {item.title}
                                </option>
                              ))
                            ) : (
                              <option style={{ color: '#939393' }} disabled value="">
                                Loading
                              </option>
                            )}
                            <input
                              type="hidden"
                              id="00N3m00000QO5lJ"
                              name="00N3m00000QO5lJ"
                              value={selectedPackage}
                            />
                          </Form.Control>

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Package
                          </Form.Control.Feedback>
                        </InputGroup>
                      </div>
                      <div className="col-12">
                        <p>Are you a Travel Agent ?</p>
                        <InputGroup className="mb-3">
                          <Form.Check
                            required
                            type="radio"
                            name="travelAgent"
                            // Salesforce
                            // id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            // name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            label="No"
                            value="B2C"
                            className="me-2"
                            feedback="You must select one type."
                            feedbackType="invalid"
                            onChange={() => setTravelAgent(false)}
                          />
                          <Form.Check
                            type="radio"
                            name="travelAgent"
                            // Salesforce
                            // id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            // name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            value="B2C"
                            label="Yes"
                            onChange={() => setTravelAgent(true)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid last name.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </div>
                      {isTravelAgent ? (
                        <>
                          <input
                            type="hidden"
                            id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            value="B2B"
                          />
                          <input
                            type="hidden"
                            name="typeClient"
                            value="B2B"
                            id="typeClient"
                          />
                          <div className="col-12">
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic_addon1">Company</InputGroup.Text>
                              <Form.Control
                                placeholder="Company"
                                as="textarea"
                                size="lg"
                                rows="1"
                                id="company"
                                name="company"
                                required
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid company.
                              </Form.Control.Feedback>
                            </InputGroup>
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            type="hidden"
                            id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                            value="B2C"
                          />
                          <input
                            type="hidden"
                            name="typeClient"
                            value="B2C"
                            id="typeClient"
                          />
                        </>
                      )}
                    </div>
                    <div className="col-12 ">
                      <Form.Control
                        required
                        placeholder="Questions / Comments / Useful Information"
                        as="textarea"
                        size="lg"
                        rows="5"
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />
                      <input
                        type="hidden"
                        name="description"
                        id="description"
                        value={descriptionForm}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid message
                      </Form.Control.Feedback>
                    </div>
                    <div className="row my-3">
                      <div className="col-12 col-md-5 mx-auto">
                        <input
                          type="submit"
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
