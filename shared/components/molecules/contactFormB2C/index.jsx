/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputGroup } from 'node_modules/react-bootstrap/esm/index';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { getCities, getStates, saveContactUsB2C } from '@/core/index';

const URL_PACKAGE = process.env.NEXT_PUBLIC_DOMAIN;

function ContactFormB2C({ pack, cities }) {
  const router = useRouter();
  const [additionalInfo, setAdditionalInfo] = useState('Orgánico');
  const [validated, setValidated] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [sending, setSending] = useState(false);
  const [isPromo, setPromo] = useState(pack.promo);
  const [urlPackage, setUrlPackage] = useState(URL_PACKAGE + router.asPath);
  const states2 = [...cities];
  const [selectedCountry, setSelectedCountry] = useState('AF');
  const [selectedState, setSelectedState] = useState('BDS');
  const [selectedStates, setSelectedStates] = useState([
    {
      name: 'No states available',
      state_code: '',
    },
  ]);
  const [selectedCities, setSelectedCities] = useState([
    {
      name: 'No cities available',
      state_code: '',
    },
  ]);
  const handleChange = event => {
    switch (event.target.name) {
      case 'country':
        setSelectedCountry(event.target.value);
        return;
      case 'state':
        setSelectedState(event.target.value);

        return;
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    setSending(true);
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const formValues = {
        ...formDataEntries,
        ...{ is_newsletter: newsletter },
        ...{ is_promo: isPromo },
        ...{ url: urlPackage },
        ...{ extra_data: additionalInfo },
      };
      const { result, error } = await saveContactUsB2C({ data: formValues });
      router.push('/contact-us/thank-you-contact-us');
    }
    setValidated(true);
  };

  async function fetchStates() {
    const { result } = await getStates({ ciso: selectedCountry });
    setSelectedStates(result.data);
  }

  async function fetchCities() {
    const { result } = await getCities({ ciso: selectedCountry, siso: selectedState });
    setSelectedCities(result.data);
  }

  useEffect(() => {
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    fetchCities();
  }, [selectedState]);

  useEffect(() => {
    if (router.query.utm_source) {
      if (router.query.utm_source.toString().toLowerCase() === 'travelzoo') {
        setAdditionalInfo('Paquete de TravelZoo');
      }
    }
  }, []);
  return !sending ? (
    <Form
      id="contact-us-form"
      className="col-12 mx-auto p-0 text-left"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}>
      <div>
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
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
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
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
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
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
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
                <Form.Control
                  type="text"
                  name="number"
                  placeholder="Cellphone / Telephone"
                  size="lg"
                />
              </InputGroup>

              <Form.Control.Feedback type="invalid">
                Please provide a valid cellphone.
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic_addon1">Package</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="package"
                  placeholder={pack.title}
                  size="lg"
                  // disabled={true}
                  readOnly
                  value={pack.title}
                />
              </InputGroup>

              <Form.Control.Feedback type="invalid">
                Please provide a valid Tour
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic_addon1">Country</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={handleChange}
                  as="select"
                  size="lg"
                  name="country">
                  <option value="">Country of Residence</option>
                  {states2.map(item => (
                    <option key={item.iso2} value={item.iso2}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>

              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic_addon1">State</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control onChange={handleChange} as="select" size="lg" name="state">
                  {selectedStates.length === 0 ? <option value="">State</option> : null}
                  {selectedStates.map(item => (
                    <option
                      key={item.state_code}
                      value={item.iso2 ? item.iso2.replace('-', '') : ''}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic_addon1">City</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control onChange={handleChange} as="select" size="lg" name="city">
                  {selectedCities.length === 0 ? <option value="">City</option> : null}
                  {selectedCities.map(item => (
                    <option key={item.id} value={selectedCountry + item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>

              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Form.Control
                placeholder="Questions / Comments / Useful Information"
                as="textarea"
                size="lg"
                rows="5"
                name="message"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid message
              </Form.Control.Feedback>
            </div>
          </div>
          <p className="col-12 pt-3 fs-14">
            *By submitting your information, you are automatically accepting our
            <Link href="/pages/privacy-policy-of-valencia-travel">
              <a href="#"> privacy policy. </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="row form-group">
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
  ) : (
    <div className="container text-center">
      <img alt="sending GIF" src="/gifs/sending.gif" />
      <p>We are sending you´re mail</p>
    </div>
  );
}
export { ContactFormB2C };
