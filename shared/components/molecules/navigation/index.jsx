/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CollapseContent, CollapseContentMenu, CollapseMenu } from '@/components/index';
import { menuAbout } from '@/core/index';

import styles from './index.module.scss';

function Navigation({ continents, packagetypes }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className={`${styles.nav}`}>
      <Nav className="me-auto mt-1 pt-4">
        <CollapseMenu open={1}>
          <CollapseContentMenu
            index={1}
            title="DESTINATIONS"
            link="/continent/central-and-south-america"
            className="">
            {continents.map(continent =>
              continent.destinations.map(destination => (
                <CollapseMenu key={destination.name} open={1}>
                  <CollapseContentMenu
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
                          <a
                            className="d-block"
                            key={item.id}
                            name={item.slug}
                            id={item.id}>
                            {`${item.title}`}
                          </a>
                        </Link>
                      </Navbar.Toggle>
                    ))}
                  </CollapseContentMenu>
                </CollapseMenu>
              )),
            )}
          </CollapseContentMenu>
        </CollapseMenu>

        <CollapseMenu open={0}>
          <CollapseContentMenu
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
          </CollapseContentMenu>
        </CollapseMenu>

        <Link key="tm" href="/tailor-made-tour">
          <a className={` ${styles.sub} fs-15 border-bottom `}>Tailor-Made Tours</a>
        </Link>

        <CollapseMenu open={0}>
          <CollapseContentMenu index={0} title="About" link="/about/who-we-are">
            {menuAbout.map((item, index) => (
              <CollapseMenu key={index} open={1}>
                <CollapseContentMenu index={0} title={item.titulo} link={item.slug}>
                  {item.submenu.map((submenu, index) => (
                    <Navbar.Toggle key={index} className="d-block border-0 p-0">
                      <Link key={index} href={submenu.slug}>
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
                </CollapseContentMenu>
              </CollapseMenu>
            ))}
          </CollapseContentMenu>
        </CollapseMenu>

        <Link key="bl" href="/blog">
          <a className={`${styles.sub} fs-16 border-bottom`}>Passion Passport - Blog</a>
        </Link>
        <div className={`${styles.boxNav}`}>
          <Link key="cu" href="/contact-us">
            <a className="text-dark">Contact Us</a>
          </Link>
          <Link key="cu" href="/our-newsletter">
            <a className="text-dark">Sign Up for Email</a>
          </Link>
          <a href="tel:1-(888) 803-8004">Call Us 1-(888) 803-8004</a>
        </div>
      </Nav>
    </Navbar.Collapse>
  );
}

export { Navigation };
