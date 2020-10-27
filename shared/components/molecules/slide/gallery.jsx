import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Gallery({ images, navigation = true, pagination = true }) {
  return (
    <div className="package-slide-modal position-relative">
      <Swiper
        slidesPerView={1}
        navigation={navigation}
        pagination={pagination ? { pagination, ...{ clickable: true } } : false} // { clickable: true }}
        loop>
        {images &&
          images.map(item => (
            <SwiperSlide key={item.id}>
              <h1 className="p-2 p-lg-3">{item.alt}</h1>

              <img
                src={PUBLIC_API + item.image}
                className="d-block w-100 h-100 fit"
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export { Gallery };
