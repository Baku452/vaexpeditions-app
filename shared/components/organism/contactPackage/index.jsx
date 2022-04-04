import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactFormPackage } from '@/components/index';

import styles from './index.module.scss';

function ContactPackage({ title = true, pack, cities }) {
  return (
    <section id="contact-form-package" className="row overflow-hidden">
      <div className="row mb-5">
        {title && <h2 className="title">CONTACT US</h2>}
        <div className={`${styles.form} text-center overflow-hidden`}>
          <div className="p-3">
            <img alt="VA Expeditions logo" src="/icons/logo_horizontalWeb.svg" />
            <h5 className="mt-5">Book with confidence</h5>
            <h6>
              We´re flexible! Postpone your tour with zero cost up to 15 days prior to
              departure
            </h6>
          </div>
          <Row className="px-0 px-lg-5">
            <Col>
              <ContactFormPackage cities={cities} pack={pack} />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export { ContactPackage };
