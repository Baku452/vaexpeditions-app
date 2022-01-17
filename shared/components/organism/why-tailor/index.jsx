import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

SwiperCore.use([Navigation]);

function WhyTailor({ tailors }) {
  return (
    <>
      <div className="container mb-5">
        <div className="row pt-5 pb-5">
          <div className="col-12 mx-auto">
            <h2 className="text-center fs-30">Why choose a tailor-made vacation?</h2>
          </div>
        </div>
        {tailors.length > 0 && (
          <Swiper
            navigation
            loop
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}>
            {tailors.map(tailor => (
              <SwiperSlide
                key={tailor.id}
                className={`${styles.slide} d-flex flex-column h-auto`}>
                {tailor.thumbnail ? (
                  <img
                    src={PUBLIC_API + tailor.thumbnail}
                    className="d-block w-100"
                    alt={tailor.title}
                  />
                ) : (
                  <img
                    src="/images/why-chose-valencia-min.jpg"
                    className="d-block w-100 h-100"
                    alt={tailor.title}
                  />
                )}
                <div className={styles.info}>
                  <h3 className="fs-20 fw-semi-bold">{tailor.title}</h3>
                  <p className="fs-15 lh-27">{tailor.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export { WhyTailor };
