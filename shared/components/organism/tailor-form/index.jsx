/* eslint-disable import/extensions */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// import { DestinationCheck } from '@/components/index';
import { Divider } from '@/components/index.js';
import { accomodations, budget, hear, saveTailorForm, weeks } from '@/core/index';
import recaptchaVerification from '@/utils/formValidation';

function TailorForm({ destinations, types }) {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);
  const [isTravelAgent, setTravelAgent] = useState(false);
  const [typeInput, setInputType] = useState('text');
  // State for form values
  const [email, setEmail] = useState();
  const [tripType, setTriptype] = useState([]);
  const [destinationChecked, setDestinationChecked] = useState([]);
  const [formDescriptionState, setFormDescriptionState] = useState({
    accommodation: '',
    departureDate: '',
    lengthStay: '',
    adults: '',
    children: '',
    internationalFlight: '',
    budget: '',
    hear_about: '',
    message: '',
  });
  // State Trip Type
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handleTriptype = (e, stateTarget, setStateTarget) => {
    if (e.target.checked) {
      setStateTarget([...stateTarget, e.target.value]);
    } else {
      const deletedItem = stateTarget.filter(item => item !== e.target.value);
      setStateTarget(deletedItem);
    }
  };

  const handleChange = e => {
    setFormDescriptionState({
      ...formDescriptionState,
      [e.target.name]: e.target.value,
    });
  };

  const adults = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Set input type for form
  const displayDate = () => {
    setInputType('date');
  };
  const displayText = () => {
    setInputType('text');
  };
  const sendingData = async data => {
    const formData = new FormData(data);
    const formDataEntries = Object.fromEntries(formData.entries());
    const descriptionSend = Object.keys(formDescriptionState)
      .map(key => `${key} : ${formDescriptionState[key]}`)
      .join('\n ');
    const formValues = {
      ...formDataEntries,
      ...{
        description: `Tailor made \n ${descriptionSend} 
        \n Trip Types: ${tripType} \n Destinations: ${destinationChecked}`,
        destination_interest: destinationChecked.toString(),
        trip_type: tripType.toString(),
      },
    };

    setSuccess(true);
    recaptchaVerification(formValues, email, saveTailorForm)
      .then(router.push('/contact-us/thank-you-contact-us'))
      .catch(() => {
        router.push('/');
      });
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

  return (
    <>
      {success ? (
        <Row className="pb-5">
          <Col>
            <h2 className="pb-5">Thank you for contacting us!</h2>
            <p>
              One of our Travel Specialists will contact you in less than 48 hours
              <br />
              While you are still here, feel free to navigate through our
              <Link href="/search">
                <a> travel destinations</a>
              </Link>
            </p>
          </Col>
        </Row>
      ) : (
        <div className="pt-5 text-center px-5" style={{ backgroundColor: '#f2f2f2' }}>
          <h2 className="fw-bold mb-5">Tailor-made Travel Enquiry</h2>
          <p>
            At Valencia Travel we are committed to protecting your privacy. We will not
            pass on your details to any third parties. <br />
            Fields marked * are required.
          </p>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="pb-5 text-start">
            <input type="hidden" name="oid" value={process.env.NEXT_PUBLIC_OID} />
            <input
              type="hidden"
              id={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
              name={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
              value="1"
            />
            <input
              type="hidden"
              id="lead_source"
              name="lead_source"
              value="Direct Web / Form"
            />
            <Row>
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
              <Form.Group className="col-12 col-md-6 mb-3" controlId="last_name">
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
              </Form.Group>
              <Form.Group className="col-12 col-md-4 mb-3" controlId="number">
                <Form.Control
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Telephone *"
                  size="lg"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Phone number
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="pb-3">All Destinations</h4>
              </Col>
              <Form.Group controlId="destChecked">
                <Row className="px-5">
                  {destinations.map(item => (
                    <Form.Check
                      type="checkbox"
                      key={item.title + item.id}
                      name="destinations"
                      id="destinations"
                      onChange={e =>
                        handleTriptype(e, destinationChecked, setDestinationChecked)
                      }
                      value={item.title}
                      label={item.title}
                      className="col-lg-2 col-md-3 col-sm-3 col-xs-12"
                    />
                  ))}
                </Row>
                <Divider />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">Accommodation Type *</h4>
              </Col>
              <Form.Group className="col-12 col-md-4" controlId="accommodation">
                <Form.Control
                  as="select"
                  size="lg"
                  name="accommodation"
                  defaultValue=""
                  onChange={handleChange}
                  required>
                  <option value="">Please select an option</option>
                  {accomodations?.map(item => (
                    <option key={item.id + item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Accommodation Type
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-4" controlId="departureDate">
                <Form.Control
                  as="input"
                  type={typeInput}
                  size="lg"
                  name="departureDate"
                  placeholder="Departure Date"
                  defaultValue=""
                  onFocus={() => displayDate()}
                  onBlur={() => displayText()}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Departure Date
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-4" controlId="lengthStay">
                <Form.Control
                  as="select"
                  size="lg"
                  name="lengthStay"
                  className="col-12 col-md-4"
                  defaultValue=""
                  onChange={handleChange}
                  required>
                  <option value="">Please select Length of stay</option>
                  {weeks?.map(item => (
                    <option key={item.id + item.label} value={`${item.label}`}>
                      {item.label}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid week selection
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">How many are travelling?</h4>
              </Col>
              <Form.Group className="col-12 col-md-4" controlId="adults">
                <Form.Control
                  as="select"
                  size="lg"
                  name="adults"
                  defaultValue={0}
                  onChange={handleChange}
                  placeholder="How many"
                  required>
                  <option value={0}>Please select adults*</option>
                  {adults?.map(item => (
                    <option key={item} value={`${item}`}>
                      {item}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-12 col-md-4" controlId="children">
                <Form.Control
                  as="select"
                  size="lg"
                  name="children"
                  defaultValue={0}
                  onChange={handleChange}
                  required>
                  <option value={0}>Please select children*</option>
                  {adults?.map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">Include international Flights?</h4>
              </Col>
              <Form.Group className="col-12 col-md-4" controlId="internationalFlight">
                <Form.Check
                  type="radio"
                  name="internationalFlight"
                  required
                  inline
                  value="yes"
                  onChange={handleChange}
                  label="Yes"
                />
                <Form.Check
                  type="radio"
                  name="internationalFlight"
                  required
                  inline
                  value="no"
                  onChange={handleChange}
                  label="No"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">Budget per Person</h4>
              </Col>
              <Form.Group className="col-12 col-md-4" controlId="budget">
                <Form.Control
                  as="select"
                  size="lg"
                  name="budget"
                  defaultValue=""
                  onChange={handleChange}
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
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">Trip type</h4>
              </Col>
              <Form.Group className="d-flex justify-content-between" controlId="trips">
                {types.map(item => (
                  <Form.Check
                    id="trips"
                    type="checkbox"
                    key={item.title}
                    onChange={e => handleTriptype(e, tripType, setTriptype)}
                    name="trip_type"
                    inline
                    value={item.title}
                    label={item.title}
                  />
                ))}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-18 pb-3">How did you hear about us?</h4>
              </Col>
              <Form.Group className="col-12 col-md-4" controlId="hear">
                <Form.Control
                  as="select"
                  size="lg"
                  name="hear_about"
                  defaultValue=""
                  onChange={handleChange}
                  required>
                  <option value="">Please select an option</option>
                  {hear?.map(item => (
                    <option key={item.id} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <div className="col-12">
                  <h4 className="fs-18 pb-3">Are you a Travel Agent ?</h4>

                  <InputGroup className="mb-3">
                    <Form.Check
                      required
                      type="radio"
                      name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      label="No"
                      value="B2C"
                      className="me-2"
                      feedback="You must select one type."
                      feedbackType="invalid"
                      onChange={() => setTravelAgent(false)}
                    />
                    <Form.Check
                      type="radio"
                      name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      value="B2C"
                      label="Yes"
                      onChange={() => setTravelAgent(true)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid last name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                {isTravelAgent ? (
                  <>
                    <input
                      type="hidden"
                      name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      value="B2B"
                    />
                    <input type="hidden" name="typeClient" value="B2B" id="typeClient" />
                    <div className="col-12">
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Company</InputGroup.Text>
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
                      name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
                      value="B2C"
                    />
                    <input type="hidden" name="typeClient" value="B2C" id="typeClient" />
                  </>
                )}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={12}>
                <h4 className="fs-20">Further Information</h4>
                <p>
                  Please describe as much detail as you can about your intended itinerary
                  including destinations, touring, accommodation, flight preferences and
                  any special interests or requirements.
                </p>
              </Col>
              <Form.Group>
                <Form.Control
                  placeholder="Message"
                  as="textarea"
                  size="lg"
                  rows="5"
                  id="message"
                  name="message"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col lg={12} className="fs-14 pt-3">
                <p>
                  *By submitting your information, you are automatically accepting our
                  <Link href="/pages/privacy-policy-of-valencia-travel">
                    <a> privacy policy. </a>
                  </Link>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={5} className="mx-auto">
                <input
                  type="submit"
                  value="Submit Request"
                  className="btn btn-primary fs-16 w-100"
                />
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </>
  );
}

export { TailorForm };
