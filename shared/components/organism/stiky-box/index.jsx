import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import StickyBox from 'react-sticky-box';

import { Divider } from '@/components/index';

import styles from './index.module.scss';

const menuList = [
  { name: 'Trip Overview', to: 'trip-overview', backID: 'description' },
  { name: 'Promotional Video', to: 'promotional-video', backID: 'videoURL' },
  { name: 'Itinerary', to: 'itinerary', backID: 'itineraries' },
  { name: "What's Included", to: 'whats-included', backID: 'whats_included' },
  {
    name: 'Optional for renting',
    to: 'optional-for-renting',
    backID: 'optional_forRenting',
  },
  { name: 'Trip Preparation & FAQS', to: 'trip-preparation-faqs', backID: 'faqs' },
  { name: 'Optional Tours', to: 'optional-tours' },
  { name: 'Related Trips', to: 'related-trips' },
  // { name: 'Related Overview', to: 'old-overview', backID: 'old_overview' },
  // { name: 'Related Itinerary', to: 'old-itinerario', backID: 'old_itinerario' },
];

function StikyBox({ pack }) {
  return (
    <StickyBox
      offsetTop={-10}
      offsetBottom={20}
      className="col-3 d-none d-sm-none d-md-none d-lg-block d-lx-block px-5">
      <ul className={styles.styky}>
        {menuList.map((item, index) =>
          (pack[item.backID] instanceof Array ? pack[item.backID].length > 0 : true) &&
          pack[item.backID] ? (
            <li key={index.toString()}>
              <LinkScroll
                className={styles.link}
                activeClass={styles.active}
                to={item.to}
                spy
                smooth
                duration={500}>
                {item.name}
              </LinkScroll>
            </li>
          ) : null,
        )}
        {!pack.promo ? (
          <li key="opt1">
            <LinkScroll
              className={styles.link}
              activeClass={styles.active}
              to="optional-tours"
              spy
              smooth
              duration={500}>
              Optional Tours
            </LinkScroll>
          </li>
        ) : null}
        <li key="opt2">
          <LinkScroll
            className={styles.link}
            activeClass={styles.active}
            to="related-trips"
            spy
            smooth
            duration={500}>
            Related Trips
          </LinkScroll>
        </li>
      </ul>
      <Divider />
      <br />
      <LinkScroll
        className={`${styles.trackBook} btn btn-primary  fs-16 w-100 mb-2 `}
        to="contact-form-package"
        spy
        smooth
        duration={500}>
        Book Now
      </LinkScroll>
      {/* <a
        href="#contact-form-package"
        className={`${styles.trackBook} btn btn-primary  fs-16 w-100 mb-2 `}>
        Book Now
      </a> */}
      <p
        className="mb-5 px-3"
        style={{
          fontSize: '14px',
          color: '#424242',
        }}>
        Or call Toll Free: <br />
        <a href="tel:+18888038004">USA: 1-(888) 803-8004</a> <br />
        <a href="tel:+5184255907">Peru: (+51) 84 255907</a>
      </p>
    </StickyBox>
  );
}

export { StikyBox };
