import Link from 'next/link';
import Card from 'node_modules/react-bootstrap/esm/Card';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CollapseContent, CollapseMenu } from '@/components/index';
import { menuAbout } from '@/core/index';

import styles from './index.module.scss';

function Navigation({ continents, packagetypes }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className={`${styles.nav} navbar-nav-scroll`}>
      <Nav className={`ml-0 mt-0  ${styles.nav}`}>
        <Accordion defaultActiveKey="0">
          <Card index={0} open={1} className="pt-0">
            <CollapseMenu open={1} index={0}>
              <CollapseContent
                index={1}
                title="DESTINATIONS"
                link="/continent/central-and-south-america">
                {continents.map(continent =>
                  continent.destinations.map(destination => (
                    <CollapseMenu key={destination.name} open={1}>
                      <CollapseContent
                        index={1}
                        title={destination.title}
                        link={`/destination/${destination.slug}`}
                        className="d-block pt-0">
                        {destination.where.map(item => (
                          <Navbar.Toggle key={item.id} className="d-block border-0 p-0">
                            <Link
                              key={item}
                              href={{
                                pathname: `/destination/${destination.slug}/${item.slug}`,
                              }}>
                              <a
                                className="d-block pt-0"
                                key={item.id}
                                name={item.slug}
                                id={item.id}>
                                {`${item.title}`}
                              </a>
                            </Link>
                          </Navbar.Toggle>
                        ))}
                      </CollapseContent>
                    </CollapseMenu>
                  )),
                )}
              </CollapseContent>
            </CollapseMenu>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Card index={0}>
            <CollapseMenu open={1}>
              <CollapseContent
                index={1}
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
                    <a className="d-block pt-0" key={types.id} id={`${types.id}`}>
                      {types.title}
                    </a>
                  </Link>
                ))}
              </CollapseContent>
            </CollapseMenu>
          </Card>
        </Accordion>

        <Link key="tm" href="/tailor-made-tour">
          <a className={` ${styles.sub} fs-15 font-weight-bold border-bottom `}>
            Tailor-Made Tours
          </a>
        </Link>

        <Accordion defaultActiveKey="0">
          <Card index={0} className="pt-0">
            <CollapseMenu key={1} open={1}>
              <CollapseContent index={1} title="ABOUT" link="/about/who-we-are">
                {menuAbout.map(item => (
                  <CollapseMenu key={item.title} open={1}>
                    <CollapseContent
                      index={1}
                      title={item.titulo}
                      link={item.slug}
                      className="d-block pt-0">
                      {item.submenu.map(submenu => (
                        <Navbar.Toggle key={submenu.id} className="d-block border-0 p-0">
                          <Link key={submenu.id} href={submenu.slug}>
                            <a
                              className="d-block "
                              key={submenu.id}
                              name={submenu.slug}
                              id={submenu.id}>
                              {submenu.titulo}
                            </a>
                          </Link>
                        </Navbar.Toggle>
                      ))}
                    </CollapseContent>
                  </CollapseMenu>
                ))}
              </CollapseContent>
            </CollapseMenu>
          </Card>
        </Accordion>

        <Link key="bl" href="/blog">
          <a className={`${styles.sub} fs-16 font-weight-bold border-bottom`}>
            Passion Passport - Blog
          </a>
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
