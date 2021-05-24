import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

SwiperCore.use([Navigation]);

function VacationType({ types, packagetypes }) {
  const packagesTypes = packagetypes.map(item => item.id);

  return (
    <>
      <div className={`${styles.vacation} container mb-5`}>
        <div className="row pt-5 pb-5">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-3 d-none d-md-block" />
              <div className="col-12 col-md-6">
                <h2 className="font-weight-bold text-center fs-30">
                  Choose your vacation type
                </h2>
              </div>
              <div className="col-md-3 d-none d-md-block text-right">
                <Link
                  href={{ pathname: '/search', query: { types: packagesTypes.join() } }}>
                  <a className="btn btn-primary fs-15">Explore all vacation types</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {types.length > 0 && (
          <Swiper
            navigation
            slidesPerView="auto"
            loop
            breakpoints={{
              280: {
                width: 300,
                spaceBetween: 20,
                slidesPerView: 'auto',
              },
              420: {
                width: 300,
                spaceBetween: 20,
                slidesPerView: 'auto',
              },
            }}>
            {types.map(type => (
              <SwiperSlide key={type.id} className={styles.slide}>
                <Link
                  key={type.id}
                  href={{
                    pathname: '/search',
                    query: { types: type.package_type.join() },
                  }}>
                  <div className="vacation position-relative">
                    {
                      type.thumbnail ?
                    
                    <img
                      src={PUBLIC_API + type.thumbnail}
                      className="d-block w-100 h-100"
                      alt={type.title}
                    />
                  :null}
                    <div className={styles.info}>
                      <h3 className="fs-24 font-weight-bold lh-25">{type.title}</h3>
                      <p className="fs-15 lh-27 d-none">{type.content}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export { VacationType };
