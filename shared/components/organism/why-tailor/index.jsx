import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

SwiperCore.use([Navigation]);

function WhyTailor({ tailors }) {
  return (
    <>
      <div className={`${styles.why_tailor} container mb-5`}>
        <div className="row pt-5 pb-5">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-3 d-none d-md-block" />
              <div className="col-12 col-md-6">
                <h2 className="font-weight-bold text-center fs-30">Why Tailor-made?</h2>
              </div>
            </div>
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
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}>
            {tailors.map(tailor => (
              <SwiperSlide key={tailor.id} className={styles.slide}>
                <div key={tailor.id} className="why-tailor position-relative">
                  {tailor.thumbnail ? (
                    <img
                      src={PUBLIC_API + tailor.thumbnail}
                      className="d-block w-100 h-100"
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
                    <h3 className="fs-20 font-weight-semi-bold">{tailor.title}</h3>
                    <p className="fs-15 lh-27">{tailor.content}</p>
                  </div>
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
