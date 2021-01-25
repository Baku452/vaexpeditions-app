import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Icon } from '@/components/index';
import Logo from '@/icons/valencia.svg';

function Newsletter() {
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

  function active(pathname, page) {
    return pathname === page ? 'nav-link active' : 'nav-link';
  }

  return (
    <>
      <div className="header-lg container d-none d-lg-block">
        <div className="row flex-nowrap justify-content-between align-items-start level-1">
          <div className="col-2 p-0">
            <Link href="/">
              <a className="position relatice">
                <Icon component={Logo} viewBox="0 0 600 600" className="logo" />
              </a>
            </Link>
          </div>
          <div className="col-auto p-0">
            <p className="m-0 fs-13">Subscribe to our newsletter</p>
            <Form
              className="form-inline"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}>
              <Form.Control
                type="email"
                className="mr-1 w-280i"
                name="email"
                placeholder="Email"
                required
              />
              <button className="btn bc-3583E0 text-white fs-13 h-38" type="submit">
                SUBSCRIBE
              </button>
            </Form>
          </div>

          <div className="col-auto pt-3">
            <div className="row flex-nowrap align-items-start">
              <div className="col-auto p-0">
                <div className="fw-bold text-right fs-13">
                  Toll Free: 1-(888)803-8004 <br />
                  (511) 423 6758
                </div>
              </div>
              <div className="col-auto">
                <Link href="/contact-us">
                  <button type="button" className="btn bc-3583E0 text-white fs-13 h-38">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" className="navbar d-lg-none d-block">
        <Link href="/">
          <Navbar.Brand className="position-relative">
            <Icon component={Logo} viewBox="0 0 600 600" className="logo-responsive" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="toggle-burguer">
          <div />
          <div />
          <div />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto mt-1 pt-4 pl-3 pb-4">
            <Link href="/search">
              <a className={active(router.pathname, '/experiences')}>Destinations</a>
            </Link>

            <Link href="/search">
              <a className={active(router.pathname, '/search')}>Tailor Made Tours</a>
            </Link>

            <Link href="/our-purpose">
              <a className={active(router.pathname, '/our-purpose')}>Our Purpose</a>
            </Link>

            <a className="nav-link" href="#">
              Blog
            </a>

            <Link href="/contact-us">
              <a className={active(router.pathname, '/contact-us')}>Contact Us</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export { Newsletter };
