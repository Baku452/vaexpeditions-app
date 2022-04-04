import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CollapseContentMenu1, CollapseMenu } from '@/components/index';
import { menuAbout } from '@/core/index';

import styles from './index.module.scss';

function Navigation({ destinations, packagetypes }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className={`${styles.nav}`}>
      <Nav className="me-auto mt-1 pt-4">
        <CollapseMenu key={1} keyCollapse={1} open={1}>
          <CollapseContentMenu1
            index={1}
            title="DESTINATIONS"
            link="/continent/central-and-south-america"
            className="">
            {destinations.map(destination => (
              <CollapseMenu key={destination.name} open={1}>
                <CollapseContentMenu1
                  index={1}
                  title={destination.title}
                  link={`/destination/${destination.slug}`}
                  className="d-block ">
                  {destination.where.map(item => (
                    <Navbar.Toggle key={item.id} className="d-block border-0 p-0">
                      <Link
                        key={item}
                        href={{
                          pathname: `/destination/${destination.slug}/${item.slug}`,
                        }}>
                        <a className="$" key={item.id} name={item.slug} id={item.id}>
                          {`${item.title}`}
                        </a>
                      </Link>
                    </Navbar.Toggle>
                  ))}
                </CollapseContentMenu1>
              </CollapseMenu>
            ))}
          </CollapseContentMenu1>
        </CollapseMenu>

        <CollapseMenu key={2} open={0}>
          <CollapseContentMenu1
            index={0}
            title="HOLIDAY TYPES"
            link="/search"
            className="d-block p-0">
            {packagetypes.map(types => (
              <Link
                key={types.id}
                className="d-block"
                href={{
                  pathname: '/search',
                  query: { types: types.id },
                }}>
                <a className="d-block" key={types.id} id={`${types.id}`}>
                  {types.title}
                </a>
              </Link>
            ))}
          </CollapseContentMenu1>
        </CollapseMenu>

        <Link key="tm" href="/tailor-made-tour">
          <a className={`${styles.sub} fs-18 border-bottom `}>Tailor-Made Tours</a>
        </Link>

        <CollapseMenu key={3} open={0}>
          <CollapseContentMenu1
            index={0}
            title="ABOUT"
            link="/about/who-we-are"
            className={` ${styles.sub} text-uppercase`}>
            {menuAbout.map(item => (
              <CollapseMenu
                key={item.titulo}
                open={1}
                className={` ${styles.sub} text-uppercase`}>
                <CollapseContentMenu1
                  index={0}
                  title={item.titulo}
                  link={item.slug}
                  className={` ${styles.sub} text-uppercase`}>
                  {item.submenu.map(submenu => (
                    <Navbar.Toggle
                      key={submenu.id}
                      className={` ${styles.sub} d-block border-0 p-0 `}>
                      <Link href={submenu.slug}>
                        <a
                          className="d-block"
                          key={submenu.id}
                          name={submenu.slug}
                          id={submenu.id}>
                          {`${submenu.titulo}`}
                        </a>
                      </Link>
                    </Navbar.Toggle>
                  ))}
                </CollapseContentMenu1>
              </CollapseMenu>
            ))}
          </CollapseContentMenu1>
        </CollapseMenu>

        <Link key="blog" href="/blog">
          <a className={`${styles.sub} fs-16 border-bottom`}>Passion Passport - Blog</a>
        </Link>
        <div className={`${styles.boxNav}`}>
          <Link key="contact" href="/contact-us">
            <a className="text-dark">Contact Us</a>
          </Link>
          <Link key="newsletter" href="/our-newsletter">
            <a className="text-dark">Sign Up for Email</a>
          </Link>
          <a href="tel:1-(888) 803-8004">Call Us 1-(888) 803-8004</a>
        </div>
      </Nav>
    </Navbar.Collapse>
  );
}

export { Navigation };
