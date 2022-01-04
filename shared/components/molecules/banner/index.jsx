import styles from './index.module.scss';

function Banner({ title, description, image, alt }) {
  return (
    <div className={`w-100 position-relative ${styles.banner}`}>
      <div className={`0 position-absolute w-100 h-100 ${styles.shadow}`} />
      <img
        src={image}
        className="l0 position-absolute fit d-md-block w-100 h-100"
        alt={alt}
      />
      <div className="banner-content l0 position-absolute w-100 h-100">
        {description && (
          <div className={`h-100 ${styles.align}`}>
            <p className="fs-25 pe-3 font-weight-bold text-white text-end">
              {description}
            </p>
          </div>
        )}
        {title && (
          <div className={`h-100 ${styles.title} ${styles.align}`}>
            <h2 className="fs-30 pe-3 font-weight-bold text-white text-end">{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export { Banner };
