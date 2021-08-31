import Link from 'next/link';

import styles from './index.module.scss';

function OurRecommendations() {
  return (
    <>
      <section id="travelers" className={`${styles.recomendation} position-relative`}>
        <div className="container">
          <div className="row py-4 ">
            <div className="col-12">
              <h2 className="text-center titleUnderline">
                Our recommendations for travelers
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className={`${styles.content} d-none d-lg-block`} />
            <div className="col-12 mx-auto">
              <div className={`${styles.contentBox} row mb-5`}>
                <div className="col-12 col-lg-4 text-center">
                  <Link href="/continent/latin-america?slug=latin-america">
                    <div className={`${styles.item} position-relative `}  >
                      <img src="images/experiences.jpg" className="img-fluid" />
                      <h4  className="m-0 fs-20 lh-20 text-white position-absolute">
                      Experience South America
                      </h4>
                      </div>
                   </Link>
                </div>
                <div className="col-12 col-lg-4  text-center">
                  <Link href="/search?destination=&start=0&end=1&status=1%2C0%2C0%2C0">
                    <div className={`${styles.item} position-relative`}>
                    <img src="images/add experiences.jpg" className="img-fluid" />
                      <h4 className="m-0 fs-20 lh-20 text-white position-absolute">
                        Add experiences to your tours to enhance your travel
                      </h4>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-4 text-center">
                  <Link href="/tailor-made-tour">
                    <div className={`${styles.item} position-relative`}>
                    <img src="images/tm_peru.jpg" className="img-fluid" />
                      <h4 className="m-0 fs-20 lh-20 text-white position-absolute">
                        Design your own travel experience. We can help you.
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { OurRecommendations };
