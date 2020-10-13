function Banner({ title, description, image, alt }) {
  return (
    <div className="container-fluid banner-secondary w-100 position-relative">
      <div className="l0 banner-shadow position-absolute w-100 h-100" />
      <img
        src={image}
        className="l0 position-absolute fit d-md-block w-100 h-100"
        alt={alt}
      />
      <div className="banner-content l0 position-absolute w-100 h-100">
        {description && (
          <div className="banner-align h-100">
            <p className="fs-25 pr-3 font-weight-bold text-white text-right">
              {description}
            </p>
          </div>
        )}
        {title && (
          <div className="banner-align banner-align-end h-100">
            <h2 className="fs-30 pr-3 font-weight-bold text-white text-right">{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export { Banner };
