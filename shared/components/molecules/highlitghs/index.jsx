import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

function Highligths({ item: highligths }) {
  return (
    <section className="py-5 background2">
      <div className="container">
        <h2 className="title2 py-4">
          Highligths in <span className="fw-semi-bold">{}</span>
        </h2>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          loop
          navigation
          pagination
          // loop
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          {highligths
            ? highligths.map(item => (
                <SwiperSlide className="d-inline-block" key={highligths.id}>
                  <div className={` ${styles.card}`}>
                    <div className="vacation position-relative">
                      {item.thumbnail != null ? (
                        <img src={item.thumbnail} className=" " alt={item.title} />
                      ) : (
                        <img
                          src="/images/colca.jpg"
                          className="d-block w-100"
                          alt={item.title}
                        />
                      )}
                      <h3 className="fs-20  lh-25 ">{item.title}</h3>
                      <p className="fs-15 lh-27 p-3">{item.summary}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
}

export { Highligths };
