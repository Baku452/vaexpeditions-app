import styles from './index.module.scss';

const rating = [1, 2, 3, 4, 5];

function Rating({ number }) {
  return (
    <>
      {rating.map(item => (
        <div
          key={item}
          className={`${styles.circle} ${item <= Number(number) ? styles.active : ''}`}
        />
      ))}
    </>
  );
}

export { Rating };
