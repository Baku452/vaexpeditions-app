import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Hero({ title, image, alt }) {
  return (
    <div className={`position-relative ${styles.banner}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      <img
        src={image}
        // className="img-fluid"
        alt={alt}
        // layout="fill"
      />
    </div>
  );
}

function HeroBlog({ title, image, alt }) {
  return (
    <div className={`position-relative ${styles.bannerBlog}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 text-center ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}

function HeroBlog2({ title, image, alt, navBreadcrums, time }) {
  return (
    <div className={`w-100 position-relative ${styles.bannerBlogSlug}`}>
      <div className="banner-content">
        <nav aria-label="breadcrumb" className={`${styles.breadcrumbs2}`}>
          <ol className="">
            <li>
              <Link href="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a href="/blog">Passion Passport - Blog</a>
              </Link>
            </li>
            {navBreadcrums.map(item => (
              <li key={item.title}>
                <a>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`${styles.cardTime} text-center `}>
          <span>0{time}</span>
          <span className={`${styles.min}`}>MIN</span>
          <span className={`${styles.read}`}>READ</span>
        </div>
      </div>
      {title && (
        <div className={`${styles.boxTitleMobile} `}>
          <h1 className={` text-center  ${styles.title}`}>{title}</h1>
        </div>
      )}
      {image ? <img src={image} alt={alt} /> : null}
    </div>
  );
}

function Hero2({ title, image, alt }) {
  return (
    <div className={`position-relative ${styles.banner2}`}>
      <div className="banner-content">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}

function Hero3({ title, image, images, alt, breadcrumbs }) {
  return (
    <div className={`w-100 position-relative ${styles.banner3}`}>
      <div className="banner-content">
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
          {breadcrumbs ? (
            <ol className="">
              {breadcrumbs.map(item => (
                <li key={item.slug}>
                  <Link href={item.slug}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <ol>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/continent/central-and-south-america">
                  <a href="/">Central and South America</a>
                </Link>
              </li>
            </ol>
          )}
        </nav>
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h1 className={`fs-48 text-center p-5 d-none d-lg-block ${styles.title}`}>
              {title}
            </h1>
          </div>
        )}
      </div>
      {images ? (
        <Swiper
          initialSlide={0}
          lazy
          grabCursor
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={styles.swiper}
          loop>
          {images
            ? images.map(item => (
                <SwiperSlide key={item.id} className={styles.shadow}>
                  <img
                    src={PUBLIC_API + item.image}
                    className="l0 0 d-md-block w-100 fit h-100 position-relative"
                    alt={item.alt}
                  />
                  <section>
                    <h2>{item?.subtitle}</h2>
                  </section>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      ) : (
        <img src={PUBLIC_API + image} alt={alt} />
      )}
    </div>
  );
}

function HeroBlogSlug({ title, image, alt, navBreadcrums, time }) {
  return (
    <div className={`w-100 row position-relative ${styles.bannerBlogSlug}`}>
      <div className="banner-content">
        <nav aria-label="breadcrumb" className={`${styles.breadcrumbs} `}>
          <ol className="">
            <li>
              <Link href="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/passion-passport">
                <a href="/passion-passport">Passion Passport</a>
              </Link>
            </li>
            {navBreadcrums.map(item => (
              <li key={item.title}>
                <a>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`${styles.cardTime} text-center `}>
          <span>{time}</span>
          <span className={`${styles.min}`}>MIN</span>
          <span className={`${styles.read}`}>READ</span>
        </div>
        {title && (
          <div className={`${styles.boxTitleMobile} `}>
            <h1 className={` text-center  ${styles.title}`}>{title}</h1>
          </div>
        )}
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}

export { Hero, HeroBlog, HeroBlog2, HeroBlogSlug, Hero2, Hero3 };
