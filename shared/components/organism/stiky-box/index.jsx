import React from 'react';
import { Link } from 'react-scroll';
import StickyBox from 'react-sticky-box';

import styles from './index.module.scss';

const menuList = [
  { name: 'Trip Overview', to: 'trip-overview' },
  { name: 'Itinerary', to: 'itinerary' },
  { name: "What's Included", to: 'whats-included' },
  { name: 'Prices and dates', to: 'prices-and-dates' },
  { name: 'Optional for renting', to: 'optional-for-renting' },
  { name: 'Trip Preparation & FAQS', to: 'trip-preparation-faqs' },
  { name: 'Related Trips', to: 'related-trips' },
];

function StikyBox() {
  return (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      className="col-3 d-none d-sm-none d-md-none d-lg-block d-lx-block">
      <ul className={styles.styky}>
        {menuList.map((item, index) => (
          <li key={index.toString()}>
            <Link
              className={styles.link}
              activeClass={styles.active}
              to={item.to}
              spy
              smooth
              duration={500}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </StickyBox>
  );
}

export { StikyBox };
