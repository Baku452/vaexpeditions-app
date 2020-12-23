import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Gallery({ images }) {
  const size = useWindowSize();

  let width = 1000;
  if (size.width < 500) {
    width = size.width;
  }

  return (
    <div className="package-slide-modal">
      <Swiper
        width={width}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        {images &&
          images.map(item => (
            <SwiperSlide key={item.id}>
              <h3 className="p-2 p-lg-2">{item.alt}</h3>

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
