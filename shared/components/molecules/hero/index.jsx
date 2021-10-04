import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Hero({ title, image, alt }) {
  return (
    <div className={`position-relative ${styles.banner}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      {image ? <img src={image} alt={alt} /> : null}
    </div>
  );
}

export { Hero };

function Hero2({ title, image, alt }) {
  return (
    <div className={`position-relative ${styles.banner2}`}>
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

export { Hero2 };

function Hero3({ title, image, images, alt }) {
  return (
    <div className={`w-100 position-relative ${styles.banner3}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      {images ? (
        <Swiper
          initialSlide={0}
          lazy
          grabCursor
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={styles.swiper}
          loop>
          {images
            ? images.map(item => (
                <SwiperSlide key={item.id} className={styles.shadow}>
                  <img
                    src={PUBLIC_API + item.image}
                    className="l0 0 d-md-block w-100 fit h-100 position-relative"
                    alt={item.alt}
                  />
                  <section>
                    <h2>{item?.subtitle}</h2>
                  </section>
                  )
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      ) : null}
      {images ? <img src={image} alt={alt} /> : null}
    </div>
  );
}

export { Hero3 };
