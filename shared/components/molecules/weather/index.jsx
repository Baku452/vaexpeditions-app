import style from 'node_modules/dom-helpers/cjs/css';

import styles from './index.module.scss';

function Weather({ weathers }) {
  return (
    <>
      {weathers.map(weather => (
        <div key={weather.id.toString()} className={styles.weather}>
          <label className={styles.label}>{weather.month}</label>
          <div className={`${styles.glob} temp-${weather.degrees}`}>
            <div className={styles.degrees}>{weather.degrees}</div>
            <div className={styles.rain} style={{ height: `${weather.rain}px` }} />
          </div>
        </div>
      ))}
    </>
  );
}

export { Weather };
