import styles from './index.module.scss';

function OurRecommendations() {
  return (
    <>
      <div className="container">
        <div className="row pt-5 pb-5 mb-2">
          <div className="col-12">
            <h2 className="font-weight-bold text-center fs-30">
              Our recommendations for travelers
            </h2>
          </div>
        </div>
      </div>
      <section id="travelers" className={`${styles.recomentation} position-relative`}>
        <img
          src="images/cusco-tour-and-machu-picchu.jpg"
          className="fit position-absolute d-none d-lg-block w-100 h-100"
          alt="cusco tour and machu picchu"
        />
        <div className="container">
          <div className="row">
            <div className={`${styles.content} d-none d-lg-block`} />
            <div className="col-12 mx-auto">
              <div className="row pt-lg-5 mb-5">
                <div className="col-12 col-lg-4 mt-4 mb-4 text-center">
                  <div className={styles.item}>
                    <h4 className="m-0 fs-18 lh-20 text-white">
                      Experience South America with Valencia Travel
                    </h4>
                    <a href="#" className={styles.more}>
                      More information
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4  mt-4 mb-4 text-center">
                  <div className={styles.item}>
                    <h4 className="m-0 fs-18 lh-20 text-white">
                      Add experiences to your tours to enhance your travel experience
                    </h4>
                    <a href="#" className={styles.more}>
                      More information
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4  mt-4  mb-4 text-center">
                  <div className={styles.item}>
                    <h4 className="m-0 fs-18 lh-20 text-white">
                      Design your own travel experience. We can help you.
                    </h4>
                    <a href="#" className={styles.more}>
                      More information
                    </a>
                  </div>
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
