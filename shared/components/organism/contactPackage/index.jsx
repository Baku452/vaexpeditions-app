import React, { useState } from 'react';

import { ContactFormB2B, ContactFormB2C } from '@/components/index';

import styles from './index.module.scss';

function ContactPackage({ title = true, pack, cities }) {
  const [isb2b, setIsb2b] = useState(false);

  return (
    <section id="contact-form-package" className="overflow-hidden">
      <div className="container p-0">
        <div className="row mb-5">
          <div className="col-11 col-md-10 p-0 pb-5 mb-5 p-0 mx-auto">
            {title && <h2 className="fs-35 pb-1">Contact Us</h2>}
            <div className="pb-2 text-center font-weight-bold">
              {isb2b ? (
                <div>
                  <a href="#contact-form-package" onClick={() => setIsb2b(!isb2b)}>
                    Click Here If you´re a Customer
                  </a>
                </div>
              ) : (
                <div>
                  <a href="#contact-form-package" onClick={() => setIsb2b(!isb2b)}>
                    Click Here If you´re a Travel Agent
                  </a>
                </div>
              )}
            </div>
            <div className={`${styles.form} card text-center overflow-hidden`}>
              <div className="p-3">
                <img alt="logo Valencia Travel" src="/icons/logo_horizontalWeb.svg" />
                <h5 className="font-weight-bold mt-5">Book with confidence</h5>
                <h6>
                  We´re flexible! Postpone your tour with zero cost up to 15 days prior to
                  departure
                </h6>
              </div>
              {isb2b ? (
                <div className="row px-0 px-lg-5">
                  <ContactFormB2B cities={cities} pack={pack} />
                </div>
              ) : (
                <div className="row px-0 px-lg-5">
                  <ContactFormB2C cities={cities} pack={pack} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactPackage };
