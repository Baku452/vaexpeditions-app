/* import Link from 'next/link'; */
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

SwiperCore.use([Navigation, Pagination]);

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Slide({ images, navigation = true, pagination = true, title = false, isHome = false }) {
  return (
    <div className={styles.slide}>
      <Swiper
        slidesPerView={1}
        navigation={navigation}
        pagination={pagination ? { pagination, ...{ clickable: true } } : false}
        className={styles.swiper}
        loop>
        {images &&
          images.map(item => (
            <SwiperSlide key={item.id} className={styles.shadow}>
              <img src={PUBLIC_API + item.image} className="d-block w-100 fit" alt={item.alt} />
              {isHome && (
                <section>
                  <h2>{item?.name}</h2>
                  <h3>{item?.description}</h3>
                </section>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      {title && <h2 className={`${styles.title} fs-48 font-weight-bold text-white text-left`}>{title}</h2>}
    </div>
  );
}

export { Slide };
