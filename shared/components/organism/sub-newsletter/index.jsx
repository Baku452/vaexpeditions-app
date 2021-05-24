import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SwiperCore, { Navigation } from 'swiper';

import styles from './index.module.scss';

SwiperCore.use([Navigation]);

function SubNewsletter() {
  const router = useRouter();

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());

      router.push({
        pathname: '/our-newsletter',
        query: { email: formDataEntries.email },
      });
    }
    setValidated(true);
  };

  return (
    <section id="recommendations" className={`${styles.news} mt-5`}>
      <img
        src="/images/newsletter.png"
        className="fit  w-100 h-100 position-absolute"
        alt="newsletter"
      />
      <div className={styles.found} />

      <div className="container">
        <Form
          className="form-inline"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}>
          <div className="row pt-5">
            <div className="d-md-flex pt-5">
              <div className="col-10 col-md-9 mx-auto p-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-12 col-md-5 text-left p-0 p-lg-2">
                    <h4 className="fs-26 font-weight-bold text-white pb-3">
                      Suscribe to our newsletter to get tips and travelling ideas
                    </h4>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="row">
                      <div className="col-12 col-md-9 p-0 pr-lg-1">
                        <Form.Control
                          type="email"
                          className="form-control w-100 h-45 mb-2"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-3 p-0">
                        <button className="btn btn-primary btn-block" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}

export { SubNewsletter };
