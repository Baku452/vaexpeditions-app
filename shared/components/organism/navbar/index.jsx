import Link from 'next/link';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import styles from './index.module.scss';

import { Navigation, Toggle } from '@/components/index';

function NavToolbar({ destinations, continents, packagetypes }) {
  return (
    <Navbar 
    id="nav-mobile"
    collapseOnSelect
    expand="xl"
    className={`navbar border-bottom d-lg-none px-3 d-block pb-2 position-sticky`}>
      <Link href="/">
      <a className="position-relative">
          <img
            alt="nav-bar-logo"
            className={styles.logo}
            src="/icons/logo_horizontalWeb.svg"
          />
        </a>
    </Link>
    <Toggle />
    <Navigation continents={destinations} packagetypes={packagetypes} />
    </Navbar>
  );
}

export { NavToolbar };
