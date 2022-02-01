import styles from './index.module.scss';

function Banner2({ title, image, alt }) {
  return (
    <section className={`w-100 position-relative ${styles.banner}`}>
      {title && (
        <div className={`${styles.texto}`}>
          <h2 className={`fs-48 text-center p-5 `}>{title}</h2>
        </div>
      )}
      <img src={image} className="" alt={alt} />
    </section>
  );
}

export { Banner2 };
