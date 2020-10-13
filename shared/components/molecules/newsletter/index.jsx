import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Icon } from '@/components/index';
import Logo from '@/icons/logo2.svg';

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
      <div className="header-lg container d-none d-md-block">
        <div className="row flex-nowrap justify-content-between align-items-start level-1">
          <div className="col-auto p-0">
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
              <button className="btn bc-3583E0 text-white fs-15 h-36" type="submit">
                Subscribe
              </button>
            </Form>
          </div>

          <div className="col-auto pt-2">
            <div className="row flex-nowrap align-items-start right">
              <div className="col-auto p-0">
                <div className="fw-bold text-right fs-13 p-r-28i">
                  Toll Free: 1-(888)803-8004 <br />
                  {/*                 <img src="static/img/ico_usa.png" alt="" /> <br />
                   */}{' '}
                  (511) 423 6758
                  {/*                 <img src="static/img/ico_peru.png" alt="" />
                   */}{' '}
                </div>
              </div>
              <div className="col-auto">
                <Link href="/contact-us">
                  <a className="btn btn-contact btn-outline-dark fs-15">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" className="navbar d-md-none d-block">
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
          <Nav className="mr-auto mt-4">
            <Link href="/experiences">
              <a className={active(router.pathname, '/experiences')}>Experiences</a>
            </Link>

            <Link href="/tailor-made-tour">
              <a className={active(router.pathname, '/tailor-made-tour')}>
                Tailor Made Tours
              </a>
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

            {/*  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export { Newsletter };
