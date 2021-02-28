import Link from 'next/link';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { accomodations, budget, hear, weeks, saveContactUs } from '@/core/index';
import { DestinationCheck } from '@/components/index'

function TailorForm({ destinations, title = true, types }) {
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    const adults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
                <div className="row pb-5 ">
                    <div className="col-11 col-md-10 p-0 pb-5 p-0 mx-auto">
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
                                                    <div className="col-12 col-md-4">
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
                                                                as="input"
                                                                type="date"
                                                                size="lg"
                                                                name="departureDate"
                                                                defaultValue=""
                                                                required>

                                                            </Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid Departure Date
                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>Length of stay</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="lengthStay"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">Please select an option</option>
                                                                {weeks?.map(item => (
                                                                    <option
                                                                        key={item.id}
                                                                        value={item.label}
                                                                    >
                                                                        {item.label}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid week selection
                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>How many adults are travelling?</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="adults"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">0</option>
                                                                {

                                                                    adults?.map(item => (
                                                                        <option
                                                                            key={item}
                                                                            value={item}
                                                                        >
                                                                            {item}
                                                                        </option>
                                                                    ))}
                                                            </Form.Control>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>How many children are travelling?</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="children"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">0</option>
                                                                {

                                                                    adults?.map(item => (
                                                                        <option
                                                                            key={item}
                                                                            value={item}
                                                                        >
                                                                            {item}
                                                                        </option>
                                                                    ))}
                                                            </Form.Control>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>Include international Flights?</label>
                                                        <div className="form-group">
                                                            <Form.Check
                                                                type="radio"
                                                                name="internationalFlight"
                                                                required
                                                                inline
                                                                value="yes"
                                                            />
                                                            <label for="yes">Yes</label>
                                                            <Form.Check
                                                                type="radio"
                                                                name="internationalFlight"
                                                                required
                                                                inline
                                                                value="no"
                                                            />
                                                            <label for="no">No</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <label>Budget per Person</label>
                                                        <div className="form-group">
                                                            <Form.Control
                                                                as="select"
                                                                size="lg"
                                                                name="budget"
                                                                defaultValue=""
                                                                required>
                                                                <option value="">Please select an option</option>
                                                                {budget?.map(item => (
                                                                    <option
                                                                        key={item.id}
                                                                        value={item.label}
                                                                    >
                                                                        {item.label}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid budget selection
                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-12">
                                                        <label>Budget per Person</label>
                                                        <div className="form-group">
                                                            <div className="row">

                                                                {
                                                                    types.map(item =>
                                                                        (
                                                                            <Form.Check
                                                                                key={item.title}
                                                                                name={item.name} value={item.title}
                                                                                label={item.title}
                                                                                className="col-lg-2 col-md-3 col-sm-3 col-xs-12"
                                                                            />
                                                                        )
                                                                    )
                                                                }

                                                            </div>

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
                                                        value="Submit Request"
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
