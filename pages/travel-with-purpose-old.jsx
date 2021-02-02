import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/social-responsability.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <h2 className="font-weight-bold">
              Fair wages
                  </h2>

            <div>

              <img src="images/cusco2.jpg" alt="" className="img-our" />
              <p className="m-0 fs-20 lh-34">
                We use our inclusive and sustained economic growth to reward the daily contribution of our local experts through economic compensation and performance bonuses. The people that work with us are not nameless faces: They are what make Valencia Travel great.
                  </p>
              <p className="m-0 fs-20 lh-34">
                Each person has a story to tell. And from the small city of Cusco, leaders are born who make it possible to think about tomorrow in a better way. People who come from the breathtaking heights of the Andes, with strong lungs that take in the purest mountain air. These are the people – the guides, porters, cooks and more – who have enabled us to build our agency at more than 3,399 meters above sea level.
                  </p>
              <p className="m-0 fs-20 lh-34">
                We rely on them, and that’s why we treat them as equals and with the respect that they deserve. This is reflected in the fair salaries that we share with our great family of local experts. Beyond on that, we have in place a range of incentives and programs to further show our thanks to our great team of local experts, including:
                  </p>
              <p className="m-0 fs-20 lh-34">
                <ul classNane="fs-20">
                  <li> Constant training and knowledge of all areas.</li>
                  <li> Organizational culture - We seek to be a great place to work.</li>
                  <li> Training our allies in local communities.</li>
                  <li> Empowerment of female guides.</li>
                  <li> Workshops and skills training in technological tools.</li>
                  <li> Professional trainings in tourist destinations.</li>
                  <li> Experts by areas of operation.</li>
                  <li> Commission system.</li>
                  <li> Fellowship meetings (lunches, walks and excursions).</li>
                  <li> Salary increases.</li>
                  <li> Vouchers to use in restaurants and hotels.</li>
                  <li> Travel experiences.</li>
                  <li> Birthday celebrations and meetings for special occasions (Labor Day, company anniversary, Christmas etc.).</li>
                </ul>
                <p></p>
              </p>
              <p></p>
            </div>
            <div className="col-10 mx-auto"></div>
            <div className="row m-b-5">
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="why-chose-valencia" className="link-our">
                    <img
                      src="images/why-chose-valencia-min.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Why chose Valencia
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="social-responsability" className="link-our">
                    <img
                      src="images/social-responsability-min.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Social Responsability
                            </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="our-values" className="link-our">
                    <img
                      src="images/our-values-min.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Our values
                            </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row m-b-5">
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="history" className="link-our">
                    <img
                      src="images/history-of-the-valencia-min.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            History of Valencia Travel
                            </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="our-philosophy" className="link-our">
                    <img
                      src="images/our-philosophy-min.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Our philosophy
                            </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="local-experts" className="link-our">
                    <img
                      src="images/local-experts.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Local Experts
                            </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section >
    </Base >
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
    },
  };
}
