import styles from './index.module.scss';

function Hero({ title, description, image, alt }) {
  return (
    <div className={`position-relative ${styles.banner}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      <img
        src={image}
        // className="img-fluid"
        alt={alt}
        // layout="fill"
      />
    </div>
  );
}

export { Hero };
