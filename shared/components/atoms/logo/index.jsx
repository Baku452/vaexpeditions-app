import Link from 'next/link';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { Icon } from '@/components/index';
import Valencia from '@/icons/logo_horizontalWeb.svg';

import styles from './index.module.scss';

function Logo() {
  return (
    <Link href="/">
      <Navbar.Brand className="position-relative">
        <Icon component={Valencia} viewBox="0 0 600 600" className={styles.logo} />
      </Navbar.Brand>
    </Link>
  );
}

export { Logo };
