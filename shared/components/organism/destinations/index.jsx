/* eslint-disable max-len */
import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

SwiperCore.use([Navigation]);

function Destinations({ countries }) {
  return (
    <>
      <div className={`${styles.destination} container`}>
        <div className="row pt-5 pb-5">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-3 d-none d-md-block" />
              <div className="col-12 col-md-6">
                <h2 className="font-weight-bold text-center fs-30">
                  Choose your destinations
                </h2>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-10 mx-auto">
                <div className="row">
                  {countries.length > 0 &&
                    countries.map(item => (
                      <Link
                        key={item?.id.toString()}
                        href={`/country/${item.slug}?slug=${item.slug}`}>
                        <div className="d-flex col-12 col-md-6 col-lg-3 mb-4 cursor-pointer">
                          <img
                            src={PUBLIC_API + item.thumbnail}
                            className="card-img-top"
                            alt={item.name}
                          />
                          <div className={styles.title}>{item.name}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Destinations };
