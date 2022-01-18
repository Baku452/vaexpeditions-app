/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { DestinationCheck } from '@/components/index';
import { accomodations, budget, hear, saveContactUs, weeks } from '@/core/index';

function TailorForm({ destinations, title = true, types }) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [typeInput, setInputType] = useState('text');
  const [newsletter, setNewsletter] = useState(false);

  const adults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const displayDate = () => {
    setInputType('date');
    // ( "#datepicker" ).datepicker('show');
  };
  const displayText = () => {
    setInputType('text');
  };
  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const formValues = { ...formDataEntries, ...{ is_newsletter: newsletter } };

      const { result, error } = await saveContactUs({ data: formValues });

      setSuccess(true);
      window.scroll(0, 0);
    }
    setValidated(true);
  };

  return (
    <>
      {success ? (
        <div className="card mb-5 pb-5">
          <div className="card-body pb-5 pt-5 mt-4 text-center">
            <h5 className="card-title fs-30 pb-5">Thank you for contacting us!</h5>
            <p className="card-text fs-18 lh-29">
              One of our Travel Specialists will contact you in less than 48 hours
              <br />
              While you are still here, feel free to navigate through our
              <Link href="/">
                <a> travel destinations</a>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="pt-5 text-center px-5" style={{ backgroundColor: '#f2f2f2' }}>
          <h2 className="fw-bold ">Tailor-made Travel Enquiry</h2>
          <p className="pb-5">
            Please fill out the following information. <br />
            We will get back to you in a maximum time of 48 hours.
          </p>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="text-start">
            <>
              <div className="row mb-4">
                <Form.Group className="col-12 col-md-6 mb-3" controlId="firstName">
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
                </Form.Group>
                <Form.Group className="col-12 col-md-6 mb-3" controlId="lastname">
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
                </Form.Group>
                <Form.Group className="col-12 col-md-8 mb-3" controlId="email">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="E-mail Address *"
                    size="lg"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12 col-md-4 mb-3" controlId="telephone">
                  <Form.Control
                    type="tel"
                    name="telephone"
                    placeholder="Telephone *"
                    size="lg"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone number
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="col-12">
                  <label className=" pb-1 fw-bold">Destinations</label>
                </div>
                <div className="col-12 col-md-12">
                  <div className="form-group px-3">
                    {destinations.map(dest => (
                      <DestinationCheck key={dest} destination={dest} />
                    ))}
                  </div>
                </div>

                <div className="col-12 pb-3">
                  <div className="row">
                    <div className="col-12">
                      <label className="pb-3 fw-bold">Accommodation Type *</label>
                    </div>
                    <div className="col-12 col-md-4 pb-2">
                      <div className="form-group">
                        <Form.Control
                          as="select"
                          size="lg"
                          name="accommodation"
                          defaultValue=""
                          required>
                          <option value="">Please select an option</option>
                          {accomodations?.map(item => (
                            <option key={item.id} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Accommodation Type
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 pb-2">
                      <div className="form-group">
                        <Form.Control
                          as="input"
                          type={typeInput}
                          size="lg"
                          name="departureDate"
                          placeholder="Departure Date"
                          onFocus={() => displayDate()}
                          onBlur={() => displayText()}
                          defaultValue=""
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Departure Date
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="form-group">
                        <Form.Control
                          as="select"
                          size="lg"
                          name="lengthStay"
                          defaultValue=""
                          required>
                          <option value="">Please select an option</option>
                          {weeks?.map(item => (
                            <option key={item.id} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid week selection
                        </Form.Control.Feedback>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 pb-3">
                  <div className="row">
                    <div className="col-12">
                      <label className="pb-3 fw-bold">How many are travelling?</label>
                    </div>
                    <div className="col-12 col-md-4 pb-2">
                      <div className="form-group">
                        <Form.Control
                          as="select"
                          size="lg"
                          name="adults"
                          placeholder="How many"
                          defaultValue={0}
                          required>
                          <option value={0}>Please select adults*</option>
                          {adults?.map(item => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 pb-2">
                      <div className="form-group">
                        <Form.Control
                          as="select"
                          size="lg"
                          name="children"
                          defaultValue={0}
                          required>
                          <option value={0}>Please select children*</option>
                          {adults?.map(item => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 pb-3">
                  <div className="row">
                    <div className="col-12">
                      <label className="pb-3 fw-bold">
                        Include international Flights?
                      </label>
                    </div>
                    <div className="form-group">
                      <Form.Check
                        type="radio"
                        name="internationalFlight"
                        required
                        inline
                        value="yes"
                        label="Yes"
                      />
                      <Form.Check
                        type="radio"
                        name="internationalFlight"
                        required
                        inline
                        value="no"
                        label="No"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 pb-3">
                  <div className="row">
                    <div className="col-12">
                      <label className="pb-3 fw-bold">Budget per Person</label>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="form-group">
                        <Form.Control
                          as="select"
                          size="lg"
                          name="budget"
                          defaultValue=""
                          required>
                          <option value="">Please select an option</option>
                          {budget?.map(item => (
                            <option key={item.id} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid budget selection
                        </Form.Control.Feedback>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 pb-3">
                  <div className="row">
                    <div className="col-12">
                      <label className="pb-3 fw-bold">Trip Type</label>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <div className="row">
                          {types.map(item => (
                            <Form.Check
                              key={item.title}
                              name={item.name}
                              value={item.title}
                              label={item.title}
                              className="col-lg-2 col-md-3 col-sm-3 col-xs-12"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label className="fw-bold pb-1">Further Information</label>
                    <p>
                      Please describe as much detail as you can about your intended
                      itinerary including destinations, touring, accommodation, flight
                      preferences and any special interests or requirements.
                    </p>
                    <Form.Control
                      placeholder="Message"
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
                <p className="col-12 pt-3 fs-12">
                  *By submitting your information, you are automatically accepting our
                  <Link href="/pages/privacy-policy-of-va-expeditions">
                    <a href="/pages/privacy-policy-of-va-expeditions">
                      {' '}
                      privacy policy.{' '}
                    </a>
                  </Link>
                </p>
              </div>

              <div className="col-12 col-md-5 mx-auto pb-3">
                <input
                  type="submit"
                  value="Submit Request"
                  className="btn btn-primary fs-16 w-100"
                />
              </div>
            </>
          </Form>
        </div>
      )}
    </>
  );
}

export { TailorForm };
