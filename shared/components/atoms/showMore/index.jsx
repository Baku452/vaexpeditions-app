import React from 'react';

import styles from './index.module.scss';

function ShowMore({ eventHandler }) {
  return (
    <button className={`${styles.boton} p-2 my-4`} onClick={eventHandler} type="button">
      SHOW MORE
    </button>
  );
}

export { ShowMore };
