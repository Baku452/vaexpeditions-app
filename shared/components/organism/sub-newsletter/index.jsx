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
        pathname: '/newsletter',
        query: { email: formDataEntries.email },
      });
    }
    setValidated(true);
  };

  return (
    <section id="recommendations" className={`${styles.news}`}>
      <div className={` ${styles.found}`}>
        <Form
          className="form-inline container h-100"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}>
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-4 text-start p-0 p-lg-2">
              <h4 className="fs-26 fw-bold pb-3">
                Subscribe to our newsletter to get tips and travelling ideas
              </h4>
            </div>
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-12 col-md-9  pe-lg-1">
                  <Form.Control
                    type="email"
                    className="form-control w-100 h-45 mb-2"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={`${styles.button} col-12 col-md-3`}>
                  <button className="btn btn-primary btn-block" type="submit">
                    Subscribe
                  </button>
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
