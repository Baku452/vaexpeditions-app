import SwiperCore, { Navigation } from 'swiper';

import styles from './index.module.scss';

SwiperCore.use([Navigation]);

function Associations() {
  return (
    <>
      <section id="associations" className="container overflow-hidden">
        <div className="row">
          <div className=" pt-4 pb-4">
            <div className={`row ${styles.containerBox} d-flex justify-content-center`}>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a
                  target="blank"
                  href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d2469804-Reviews-Valencia_Travel_Day_Tours-Cusco_Cusco_Region.html">
                  <img alt="Trip Advisor Logo" src="/images/aso_trip_advisor_logo.png" />
                </a>
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <img alt="Safe Travels" src="/images/aso_safetravels.png" />
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a
                  href="https://www.kayak.es/Machu-Picchu.45618.guide"
                  rel="noopener noreferrer"
                  target="_blank">
                  <img
                    alt="kayak logo"
                    src="https://www.kayak.com/news/wp-content/uploads/sites/78/2020/02/design_image_kayak_travel-guides_circle_orange_find-us-on-tg_150x150_20022x.png"
                    width="200px"
                  />
                </a>
              </div>

              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <img alt="guarranty logo" src="/images/aso_guarranty_logo.png" />
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a
                  rel="noopener noreferrer"
                  target="blank"
                  href="https://www.lata.travel/pre_registration/valencia-travel-cusco/#sthash.4lGwMWqs.dpbs">
                  <img alt="lata logo" src="/images/aso_lata_logo.png" />
                </a>
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.adventuretravel.biz/about/atta-members/">
                  <img
                    alt="adventure travel trade"
                    src="/images/aso_adventure-travel-trade.png"
                  />
                </a>
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a rel="noopener noreferrer" target="_blank" href="https://ustoa.com/">
                  <img alt="Ustoa Logo" src="/images/aso_ustoa_logo.png" width="300px" />
                </a>
              </div>
              <div className="col-6 col-md-4 col-lg-3 text-center pt-3">
                <a rel="noopener noreferrer" target="_blank" href="https://www.asta.org/">
                  <img alt="Asta logo" src="/images/aso_asta.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Associations };
