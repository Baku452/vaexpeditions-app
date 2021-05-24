import Link from 'next/link';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import StickyBox from 'react-sticky-box';

import { Divider } from '@/components/index';

import styles from './index.module.scss';

const menuList = [
  { name: 'Trip Overview', to: 'trip-overview' },
  { name: 'Itinerary', to: 'itinerary' },
  { name: "What's Included", to: 'whats-included' },
  { name: 'Prices and dates', to: 'prices-and-dates' },
  { name: 'Optional for renting', to: 'optional-for-renting' },
  { name: 'Trip Preparation & FAQS', to: 'trip-preparation-faqs' },
  { name: 'Optional Tours', to: 'optional-tours' },
  { name: 'Related Trips', to: 'related-trips' },
  { name: 'Related Overview', to: 'old-overview' },
  { name: 'Related Itinerary', to: 'old-itinerario' },


];

function StikyBox({ pack }) {
  console.log('object', pack);
  return (
    <StickyBox
      offsetTop={95}
      offsetBottom={20}
      className="col-3 d-none d-sm-none d-md-none d-lg-block d-lx-block px-5">
      <ul className={styles.styky}>
        {menuList.map((item, index) => (
          <li key={index.toString()}>
            <LinkScroll
              className={styles.link}
              activeClass={styles.active}
              offset={-130}
              to={item.to}
              spy
              smooth
              duration={500}>
              {item.name}
            </LinkScroll>
          </li>
        ))}
      </ul>
      <Divider />
      <br />
      <Link
        href={{
          pathname: '/contact-us',
          query: { package: pack.slug },
        }}>
        <a className="btn btn-primary fs-16 w-100 mb-2">Contact Us</a>
      </Link>
      <p
        className="mb-5 px-3"
        style={{
          fontSize: '14px',
          color: '#424242',
        }}>
        Or call Toll Free: 1-(888)803-8004 / (511) 423 6758
      </p>
    </StickyBox>
  );
}

export { StikyBox };
