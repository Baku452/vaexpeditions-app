import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

SwiperCore.use([Navigation]);

function VacationType({ packagetypes }) {
  return (
    <>
      <section id="vacation-type" className={`${styles.vacation} container mb-5`}>
        <div className="row pt-5 pb-4">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-3 d-none d-md-block" />
              <div className="col-12 col-md-6">
                <h2 className=" titleUnderline text-center">Choose your vacation type</h2>
              </div>
              <div className="col-md-3 d-none d-md-block  text-md-end align-self-end ">
                <Link href="/holiday-types">
                  <a className="btn btn-primary fs-15">Explore all vacation types</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {packagetypes.length > 0 && (
          <Swiper
            navigation
            preventClicks={false}
            slidesPerView={4}
            grabCursor
            breakpoints={{
              280: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              420: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}>
            {packagetypes.map(type => (
              <SwiperSlide key={type.id} className={styles.slide}>
                <Link key={type.id} href={`/holiday-types/${type.slug}`}>
                  <a>
                    <div className="vacation position-relative">
                      <img
                        src={PUBLIC_API + type.thumbnail}
                        className="d-block w-100 h-100"
                        alt={type.title}
                      />
                      <div className={styles.info}>
                        <h3 className="lh-25">{type.title}</h3>
                        <p className="fs-15 lh-27">{type.content}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="col-12 d-md-none d-sm-block text-center pt-4">
          <Link href="/holiday-types">
            <a className="btn btn-primary fs-15">Explore all vacation types</a>
          </Link>
        </div>
      </section>
    </>
  );
}

export { VacationType };
