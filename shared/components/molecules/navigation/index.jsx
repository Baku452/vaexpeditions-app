import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from 'node_modules/react-bootstrap/esm/Card';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CollapseContent, CollapseMenu } from '@/components/index';

import styles from './index.module.scss';

function Navigation({ continents, packagetypes }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`me-auto  pt-4 ${styles.nav}`}>
        <Accordion defaultActiveKey="0">
          <Card index={0}>
            <CollapseMenu key={1} open={1}>
              <CollapseContent index={1} title="destination" link="/search">
                {continents.map(continent =>
                  continent.destinations.map(destination => (
                    <CollapseMenu key={destination.name} open={1}>
                      <CollapseContent index={1} title={destination.title} link="/search">
                        {destination.where.map((item, index) => (
                          <Navbar.Toggle key={index} className="d-block border-0 p-0">
                            <Link
                              key={index}
                              href={{
                                pathname: '/search',
                                query: { destination: item.id },
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
              <CollapseContent index={1} title="Holiday Types" link="/search">
                {packagetypes.map(item => (
                  <Link
                    key={item.id}
                    href={{
                      pathname: '/search',
                      query: { item: item.id },
                    }}>
                    <a className="d-block" key={item.id} id={`${item.id}`}>
                      {item.title}
                    </a>
                  </Link>
                ))}
              </CollapseContent>
            </CollapseMenu>
          </Card>
        </Accordion>

        <Link key="tm" href="/tailor-made-tour">
          <a className="text-dark">Tailor-Made Tours</a>
        </Link>

        <Link key="op" href="/about/who-we-are#aboutUs">
          <a className="text-dark">About</a>
        </Link>

        <Link key="bl" href="/blog">
          <a className="text-dark">Passion Passport - Blog</a>
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
