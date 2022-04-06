/* eslint-disable import/extensions */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { saveNewsletter } from '@/core/index';
import { loadRecaptchaURL } from '@/utils/loadRecaptcha';
import sendDataSalesforce from '@/utils/salesforceConnect';

const NewsletterForm = ({ success, setSuccess, emailProp }) => {
  const [validated, setValidated] = useState(false);
  const [errorLabel, setError] = useState(null);
  const [email, setEmail] = useState(emailProp);

  // const [successForm, setSuccess] = useState(success);

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const submitData = async (token, formValues) => {
    // eslint-disable-next-line no-unused-vars
    const req = await fetch(`/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        token: token,
        email: email,
      }),
    })
      .then(respuesta => respuesta.json())
      .then(json => {
        if (json.success) {
          sendDataSalesforce(formValues);
          return saveNewsletter({ data: formValues });
        }
        return 1;
      })
      .then(errorRes => {
        const { error } = errorRes;
        if (error) {
          setError(error);
        } else {
          setSuccess(true);
        }
      });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    let formValues = '';
    if (form.checkValidity() !== false) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      formValues = { ...formDataEntries };
    }
    setValidated(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' })
        .then(token => {
          submitData(token, formValues);
        });
    });
  };

  useEffect(() => {
    loadRecaptchaURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
    );
  }, []);
  return !success ? (
    <Form
      validated={validated}
      // action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
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
        name={process.env.NEXT_PUBLIC_TYPE_CLIENT}
        id={process.env.NEXT_PUBLIC_TYPE_CLIENT}
        value="B2C"
      />
      <Form.Group className="col-12 mb-3" controlId="firstName">
        <Form.Control type="text" name="first_name" placeholder="First Name*" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid First Name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="col-12 mb-3" controlId="lastName">
        <Form.Control type="text" name="last_name" placeholder="Last Name*" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid Last Name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-12 mb-3" controlId="email">
        <Form.Control
          type="email"
          name="email"
          placeholder="E-mail Address*"
          defaultValue={emailProp}
          onChange={event => handleEmail(event)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      {errorLabel ? <p className="py-2 text-danger">This email already exists</p> : null}
      <h6 className="fs-12 py-2">
        *By submitting your information, you are automatically accepting our{' '}
        <Link href="/pages/privacy-policy-of-valencia-travel">
          <a>privacy policy.</a>
        </Link>
      </h6>
      <div className="row mt-3 text-center">
        <div className="col-12 ">
          <input
            type="submit"
            value="Download free brochure"
            className="btn btn-primary fs-16 "
          />
        </div>
      </div>
      {/* <input id="lead_source" name="lead_source" type="hidden" value="Other" />
    <input
      id="Web_to_Lead__c"
      name="Web_to_Lead__c"
      type="hidden"
      value="true"
    />
    <input
      id="Subscription__c"
      name="Subscription__c"
      type="hidden"
      value="true"
    />
    <input type="hidden" name="oid" value="00D1N000000GccP" />
    <input
      type="hidden"
      name="retURL"
      value="https://valenciatravelcusco.com/contact-us/thank-you-contact-us"
    /> */}
    </Form>
  ) : (
    <h3 className="text-center">
      Thank you for submitting your information. You will soon receive an email with a
      link to download the brochure. Thank you!
    </h3>
  );
};

export { NewsletterForm };
