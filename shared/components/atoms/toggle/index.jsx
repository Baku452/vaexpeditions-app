import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import styles from './index.module.scss';

function Toggle() {
  return (
    <Navbar.Toggle className={styles.toggle}>
      <div />
      <div />
      <div />
    </Navbar.Toggle>
  );
}

export { Toggle };
