/* eslint-disable import/extensions */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { removeNewsletter } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Unsubscribe({ destinations, packagetypes, notifications, packagesAll }) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  //   const [success, setSuccess] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const emailData = { ...formDataEntries };
      await removeNewsletter({ email: emailData.email });
    }
  };

  useEffect(() => {
    if (router?.query?.email) setEmail(router?.query?.email);
  }, [router]);
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
    >
      <Head>
        <title>Unsubscribe Newsletter | Valencia Travel</title>
      </Head>
      <section id="thank_you">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5">
              <h1 className="title">Unsubscribe Newsletter</h1>
              <div className="card border">
                <Form
                  noValidate
                  // action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                  method="DELETE"
                  onSubmit={handleSubmit}
                >
                  {/* <input type="hidden" name="oid" value="00D1N000000GccP" />
                  <input
                    type="hidden"
                    name="retURL"
                    value="https://valenciatravelcusco.com/contact-us/thank-you-contact-us"
                  /> */}
                  {/* <input
                    id="lead_source"
                    name="lead_source"
                    type="hidden"
                    value="Other"
                  />
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
                    value="false"
                  />
                  <input
                    id="last_name"
                    name="last_name"
                    type="hidden"
                    value="LeadDeleted"
                  /> */}
                  <div className="col-12 col-md-10 p-0 mx-auto text-start">
                    <div className="row pt-3 pb-0 pb-md-3">
                      <div className="col-12 col-md-6 mx-auto">
                        <div className="form-group">
                          <Form.Control
                            type="text"
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
                    <div className="row form-group pt-5">
                      <div className="col-12 col-md-5 mx-auto">
                        <input
                          type="submit"
                          value="Finish Subscription"
                          className="btn btn-primary fs-16 w-100"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/nav/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
    },
    revalidate: 1,
  };
}

export default Unsubscribe;
