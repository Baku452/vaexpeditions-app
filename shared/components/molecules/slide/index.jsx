import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Slide({ images, navigation = true, pagination = true, title = false }) {
  return (
    <div className="package-slide position-relative">
      <Swiper
        slidesPerView={1}
        navigation={navigation}
        pagination={pagination ? { pagination, ...{ clickable: true } } : false} // { clickable: true }}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        {images &&
          images.map(item => (
            <SwiperSlide key={item.id}>
              <img
                src={PUBLIC_API + item.image}
                className="d-block w-100 h-100 fit"
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {title && (
        <h2 className="title-slide fs-40 font-weight-bold text-white text-left">
          {title}
        </h2>
      )}
    </div>
  );
}

export { Slide };
