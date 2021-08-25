/* import Link from 'next/link'; */
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Days({ days }) {
  function getNameDays(day) {
    switch (day) {
      case 0:
        return 'Half-Day';
      case 1:
        return 'Full Day';
      default:
        return `${day} Days / ${day - 1} Nights`;
    }
  }
  return <p>{getNameDays(days)}</p>;
}

function Slide({
  images,
  navigation = true,
  pagination = true,
  title = false,
  isHome = false,
  isDestination = false,
}) {
  return (
    <div className={`${styles.slide} ${isHome ? styles.slideHome : ''}`}>
      {title && (
        <div className={`${styles.boxTitleMobile} d-block d-md-none`}>
          <h2 className={`${styles.title} text-left`}>{title}</h2>
        </div>
      )}
      <Swiper
        initialSlide={0}
        lazy
        grabCursor
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={navigation}
        pagination={pagination ? { pagination, ...{ clickable: true } } : false}
        className={styles.swiper}
        loop>
        {images &&
          images.map(item => (
            <SwiperSlide key={item.id} className={styles.shadow}>
              <img
                src={PUBLIC_API + item.image}
                className="d-block w-100 fit"
                alt={item.alt}
              />
              {isHome && (
                <section>
                  <h2 className="slidesHeadings">{isDestination ? title : item?.name}</h2>
                  <h3>{item?.subtitle}</h3>
                </section>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      {title && !isDestination && (
        <div className={`${styles.boxTitle} d-none d-md-block mb-3 mb-lg-5 `}>
          <h2 className={`${styles.title} text-left`}>{title}</h2>
        </div>
      )}
    </div>
  );
}

export { Days, Slide };
