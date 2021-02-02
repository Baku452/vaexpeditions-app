import React from 'react';

import styles from './index.module.scss';

function Title({ title }) {
  return (
    <h3 className={styles.title}>
      <div>{title}</div>
    </h3>
  );
}

export { Title };
