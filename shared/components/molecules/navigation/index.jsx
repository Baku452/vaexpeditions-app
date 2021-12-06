import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './index.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'node_modules/react-bootstrap/esm/Card';
import { Collapse, CollapseContent } from '@/components/index';
import { CollapseContentMenu, CollapseMenu } from '@/components/index';

function Navigation({ continents, packagetypes }) {
  const router = useRouter();

  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`me-auto  pt-4 ${styles.nav}`}>
        
      {/* <CollapseMenu open={1}>
          <CollapseContentMenu index={0} title="Destinations" link="/search">
            {continents.map(
              continent =>
              continent.destinations.filter(item => item.active).length > 0 && (
                  <CollapseMenu key={continent.name} open={1}>
                    <CollapseContentMenu index={0} title={continent.name} link="/search">
                      {continent.destinations.map((destination, index) => (
                        <Navbar.Toggle key={index} className="d-block border-0">
                          <Link
                            passHref
                            key={index}
                            href={{
                              pathname: '/search',
                              query: { destination: destination.id },
                            }}>
                            <a
                              className="d-block"
                              key={destination.id}
                              name={destination.slug}
                              id={destination.id}>
                              {`${destination.title}`}
                            </a>
                          </Link>
                        </Navbar.Toggle>
                      ))}
                    </CollapseContentMenu>
                  </CollapseMenu>
                ),
            )}
          </CollapseContentMenu>
        </CollapseMenu> */}

        {/* <Accordion  defaultActiveKey="0" >
          <Card index={0} > 
            <Card.Header className={` d-flex justify-content-between ` } >
            <Link href={`/continent/central-and-south-america`}>
              <a className="p-0">Destination</a>
            </Link>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
          <Card.Body className="py-0 ">
          <ul className="py-0 list-unstyled">
          {continents.map(continent =>
                  continent.destinations.map(item => (
                    <li key={item.slug}>
                      <Link href={`/destination/${item.slug}`}>
                        <a> {item.title}</a>
                      </Link>
                    </li>
                  )),
            )
          }
          </ul>
        </Card.Body>
       </Accordion.Collapse>     
      </Card>
      </Accordion>  */}

      {/* <Collapse open={1}>
          <CollapseContent title="Holiday Types" link="/search">
            <div>
          {packagetypes.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: '/search',
                  query: { item: item.id },
                }}>
                <a className="d-block" key={item.id} id={`${item.id}`}>
                  {item.title}
                </a>
              </Link>
            ))}
            </div>
            </CollapseContent>
       </Collapse>  */}

        <Link key="tm" href="/continent/central-and-south-america">
          <a className="text-dark">Destinations</a>
        </Link>

        <Link key="tm" href="/search?types=">
          <a className="text-dark">Holiday Types</a>
        </Link>

        <Link key="tm" href="/tailor-made-tour">
          <a className="text-dark">Tailor-Made Tours</a>
        </Link>

        <Link key="op" href="/our-purpose">
        <a className="text-dark">Our Purpose</a>
        </Link>

        <Link key="bl" href="/blog">
        <a className="text-dark">Passion Passport - Blog</a>
        </Link>

        <div className={`${styles.boxNav}`}>
          <Link key="cu" href="/contact-us">
            <a className="text-dark">
              Contact Us
            </a>
          </Link>
          <a href="tel:1-(888) 803-8004">Call Us 1-(888) 803-8004</a>
        </div>
      </Nav>
    </Navbar.Collapse>
  );
}

export { Navigation };
