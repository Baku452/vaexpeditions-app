import Link from 'next/link';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;
function TopTours({ tours }) {
  return (
    <>
      <section id="top-rated-tours" className={styles.package}>
        <div className="container">
          <div className="row py-5">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-3 d-none d-md-block" />
                <div className="col-12 col-md-6">
                  <h2 className="text-center titleUnderline">Top rated tours</h2>
                </div>
                <div className="col-md-3 d-none d-md-block text-end align-self-end ">
                  <Link href="/search">
                    <a className="btn btn-primary fs-15">Explore all tours</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                {tours.map(item => (
                  <Link key={item.id} href={`/package/${item.slug}`}>
                    <div className="d-flex col-12 col-md-6 col-lg-6 col-xl-4 pb-4 mb-2">
                      <div className={`${styles.card} w-100`}>
                        {item.thumbnail ? (
                          <img
                            src={PUBLIC_API + item.thumbnail}
                            className="card-img-top"
                            alt={item.title}
                          />
                        ) : (
                          <img
                            src="/images/colca.jpg"
                            className="card-img-top"
                            alt={item.title}
                          />
                        )}

                        <div className={`${styles.body} p-4`}>
                          <h5 className="card-title mb-2 fs-18 font-weight-bold">
                            {item.title}
                          </h5>
                          <h6 className="fs-18 m-0 pb-3">
                            {item?.days > 1 ? `${item?.days} days` : 'Half-Day'}
                          </h6>
                          {/* <SmartText text={item?.summary} length={324} /> */}
                          <p className="card-text fs-14 lh-25 p-b-30">{item.summary}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-md-none d-sm-block text-center pb-4">
          <Link href="/search">
            <a className="btn btn-primary fs-15">Explore all tours</a>
          </Link>
        </div>
      </section>
    </>
  );
}

export { TopTours };
