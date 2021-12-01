import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const router = useRouter();

  function active(pathname, page) {
    return pathname === page ? 'nav-link active' : 'nav-link';
  }

  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto mt-1 pt-4 pl-3 pb-4">
        <Link href="/search">
          <a className={active(router.pathname, '/experiences')}>Destinations</a>
        </Link>

        <Link href="/search">
          <a className={active(router.pathname, '/search')}>Tailor-Made Tours</a>
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
  );
}

export { Navigation };
