import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/our-philosophy.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <p>
                    At Valencia Travel we have a philosophy that guides everything we do.
                    We believe:
                  </p>
                  <p>
                    We are all the same regardless of countries, social classes and
                    gender.
                  </p>
                  <p>
                    We promote equal opportunities through authenticity, collaboration,
                    passion and diversity in an environment where everyone, from any
                    origin or location, can contribute to the best of their abilities and
                    have a positive impact that comes from the heart.
                  </p>
                  <p>
                    Our lives can be transformed by the travel experience, by the people,
                    the traditions and the customs of every destination.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <p>
                    We are committed to sharing the great cultural and natural wealth of
                    our country, we want all world travelers to be part of it.
                  </p>
                  <p>
                    Disproving false beliefs will help us to live without fear and
                    ascertain the true nature of all destinations.
                  </p>
                  <p>
                    We always have an open mind and an inclusive perspective when we look
                    at different cultures and the huge diversity they reveal, and we
                    believe that you have to travel to open your mind and learn to trust
                    new people.
                  </p>
                  <p>
                    Being responsible and aware of the environment will help us grow as
                    one global community.
                  </p>
                  <p>
                    We always promote the highest environmental sustainability practices,
                    as a basis for achieving global development and improving people's
                    quality of life.
                  </p>
                </div>
              </div>
              <div className="row m-b-5">
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="why-valencia-travel" className="link-our">
                      <img
                        src="images/why-chose-valencia-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Why Valencia Travel"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">Why Valencia Travel</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="travel-with-purpose" className="link-our">
                      <img
                        src="images/social-responsability-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Travel with Purpose"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">Travel with Purpose</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="our-core-values" className="link-our">
                      <img
                        src="images/our-values-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Our core values"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">Our core values</h5>
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
                    <a href="valencia-travel-history" className="link-our">
                      <img
                        src="images/history-of-the-valencia-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Valencia Travel history"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Valencia Travel history
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
                        alt="Our philosophy"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">Our philosophy</h5>
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
                        alt="Local Experts"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">Local Experts</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
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
