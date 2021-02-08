import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import styles from './index.module.scss';

function PricesAndDates({ dates }) {
  return (
    <Element name="prices-and-dates" className="container pt-5 pb-5">
      <Title title="DATES & PRICES" />

      <div className="row">
        <div className="col-12">
          <div className="table-responsive-sm">
            <table className="table table-borderedless">
              <thead>
                <tr className={styles.wrapper}>
                  <th scope="col" className={styles.header}>
                    Click a date to book online
                  </th>
                  <th scope="col" className={styles.header}>
                    Spots
                  </th>
                </tr>
              </thead>
              <tbody className={styles.table}>
                {dates.map(item => (
                  <tr key={item.id} className={styles.row}>
                    <td className={styles.column}>
                      {item.date_range}, {item.year}
                    </td>
                    <td className={styles.column}>{item.spots}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Element>
  );
}

export { PricesAndDates };
