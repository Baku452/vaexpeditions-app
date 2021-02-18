import Link from 'next/link';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { accomodations, budget, hear, saveContactUs } from '@/core/index';
import { DestinationCheck } from '@/components/index'

function TailorForm({ destinations, packages, title = true, pack }) {
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

            const { result, error } = await saveContactUs({ data: formValues });

            setSuccess(true);
            window.scroll(0, 0);
        }
        setValidated(true);
    };

    return (
        <section id="thank_you">
            <div className="container">
                <div className="row pb-5 mb-5">
                    <div className="col-11 col-md-10 p-0 pb-5 mb-5 p-0 mx-auto">
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
                                <div className="card border">
                                    <div className="card-body pt-5 mt-3 text-center">
                                        <p className="card-text fs-20 lh-29 mb-5">
                                            Please fill out the following information. <br />
                    We will get back to you in a maximum time of 48 hours.
                  </p>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <div className="col-12 col-md-10 mx-auto p-0 text-left">
                                                <div className="row mb-4">
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
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
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
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
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="form-group">
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
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <Form.Control
                                                                type="tel"
                                                                name="telephone"
                                                                placeholder="Telephone *"
                                                                size="lg"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid Phone number</Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label>Destination</label>
                                                    </div>

                                                    <div className="col-12 col-md-12">
                                                        <div className="form-group">
                                                            {
                                                                destinations.map(dest => (
                                                                    <DestinationCheck destination={dest} />
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                    </div>
                                                    <div className="col-12 col-md-8">
                                                        <label>Accommodation Type</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="accommodation"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">Please select an option</option>
                                                                {accomodations?.map(item => (
                                                                    <option
                                                                        key={item.id}
                                                                        value={item.label}
                                                                    >
                                                                        {item.label}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid Accommodation Type
                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>Departure Date</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="package"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">Please select an option</option>
                                                                {accomodations?.map(item => (
                                                                    <option
                                                                        key={item.id}
                                                                        value={item.label}
                                                                    >
                                                                        {item.label}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid Accommodation Type
                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>How many are travelling?</label>
                                                        <div className="col-12 col-md-4">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="package"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">How many adults?</option>
                                                                {

                                                                    accomodations?.map(item => (
                                                                        <option
                                                                            key={item.id}
                                                                            value={item.label}
                                                                        >
                                                                            {item.label}
                                                                        </option>
                                                                    ))}
                                                            </Form.Control>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                        </div>
                                                    </div>


                                                    <div className="col-12">
                                                        <div className="form-group">
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

                                                    <div className="col-12 text-left">
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
                                                        from Valencia Travel or our partners. Click
                          <Link href="/Privacy-Policy">
                                                            <a> here </a>
                                                        </Link>
                          to visit our Privacy Policy. Easy unsubscribe links are provided
                          in every email.
                        </p>
                                                </div>
                                            </div>
                                            <div className="row form-group">
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

export { TailorForm };
