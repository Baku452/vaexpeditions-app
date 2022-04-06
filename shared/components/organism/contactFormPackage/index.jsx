import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { saveContactUsB2C } from '@/core/index';
import recaptchaVerification from '@/utils/formValidation';
import { loadRecaptchaURL } from '@/utils/loadRecaptcha';

const URL_PACKAGE = process.env.NEXT_PUBLIC_DOMAIN;

function ContactFormPackage({ pack, cities }) {
  const router = useRouter();
  const [additionalInfo, setAdditionalInfo] = useState('Orgánico');
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isPromo, setPromo] = useState(pack.promo);
  // eslint-disable-next-line no-unused-vars
  const [urlPackage, setUrlPackage] = useState(URL_PACKAGE + router.asPath);
  const states2 = [...cities];
  const [isTravelAgent, setTravelAgent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [descriptionForm, setDescription] = useState('');
  const [email, setEmail] = useState();

  const handleEmail = event => {
    setEmail(event.target.value);
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

  const handleDescription = e => {
    setDescription(
      `Name Package: ${pack.title}  \n 
      URL Package: ${urlPackage} \n 
      Description: ${e.target.value}`,
    );
  };

  const sendingData = async data => {
    const formData = new FormData(data);
    const formDataEntries = Object.fromEntries(formData.entries());
    const formValues = {
      ...formDataEntries,
      ...{ is_promo: isPromo },
      ...{ url: urlPackage },
      ...{ extra_data: additionalInfo },
    };

    setSending(true);
    recaptchaVerification(formValues, email, saveContactUsB2C)
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

  useEffect(() => {
    if (router.query.utm_source) {
      if (router.query.utm_source.toString().toLowerCase() === 'travelzoo') {
        setAdditionalInfo('Paquete de TravelZoo');
      }
    }
    loadRecaptchaURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
    );
  }, [router.isReady]);
  return !sending ? (
    <Form
      id="contact-us-form"
      className="col-12 mx-auto p-0 text-start"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}>
      <input type="hidden" name="oid" value={process.env.NEXT_PUBLIC_OID} />
      <input
        type="hidden"
        id="lead_source"
        name="lead_source"
        value="Direct Web / Form"
      />
      <input
        type="hidden"
        id={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
        name={process.env.NEXT_PUBLIC_TYPE_AUTOCONVERT}
        value="1"
      />
      <div className="row mb-4">
        <div className="col-12 col-md-6">
          <Form.Group className="mb-3">
            <Form.Control
              id="first_name"
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
        </div>
        <div className="col-12 col-md-6">
          <Form.Group className="mb-3">
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
        </div>
        <div className="col-12 col-md-6">
          <Form.Group className="mb-3">
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
        </div>
        <div className="col-12 col-md-6">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              id="phone"
              name="phone"
              placeholder="Cellphone / Telephone"
              size="lg"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid cellphone.
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-12 col-md-12">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic_addon1">Package</InputGroup.Text>
            <Form.Control
              type="text"
              name="package"
              placeholder={pack.title}
              size="lg"
              readOnly
              value={pack.title}
            />
            <input
              type="hidden"
              id="00N3m00000QO5lJ"
              name="00N3m00000QO5lJ"
              value={pack.title}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Tour
            </Form.Control.Feedback>
          </InputGroup>
        </div>
        <div className="col-12 col-md-6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic_addon1">Country</InputGroup.Text>
            <Form.Control
              required
              onChange={handleChange}
              as="select"
              size="lg"
              id="country_code"
              name="country_code">
              <option value="US">United States</option>
              {states2.map(item => (
                <option key={item.iso2} value={item.iso2}>
                  {item.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </InputGroup>
          <input type="hidden" id="country" name="country" value={selectedCountry} />
        </div>
        <div className="col-12 col-md-6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic_addon1">City</InputGroup.Text>
            <Form.Control
              placeholder="City"
              as="textarea"
              size="lg"
              rows="1"
              id="city"
              name="city"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
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
              // name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              // id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
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
              // name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              // id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
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
              name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              value="B2B"
            />
            <input type="hidden" name="typeClient" value="B2B" id="typeClient" />
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
              name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
              value="B2C"
            />
            <input type="hidden" name="typeClient" value="B2C" id="typeClient" />
          </>
        )}
        <div className="col-12">
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Questions / Comments / Useful Information"
              as="textarea"
              size="lg"
              rows="5"
              name="message"
              id="message"
              onChange={e => handleDescription(e)}
              required
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
          </Form.Group>
        </div>
        <p className="col-12 pt-3 fs-14">
          *By submitting your information, you are automatically accepting our
          <Link href="/pages/privacy-policy-of-valencia-travel">
            <a target="_blank"> privacy policy. </a>
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 mx-auto">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary fs-16 w-100"
          />
        </div>
      </div>
    </Form>
  ) : (
    <div className="container text-center">
      <img alt="sending GIF" src="/gifs/sending.gif" />
      <p>We are sending you´re mail</p>
    </div>
  );
}
export { ContactFormPackage };
