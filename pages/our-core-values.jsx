import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes, notifications }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/our-values.jpg"
        alt="weq"
      />

      <section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5 pt-5">
          <div className="row pt-5 pb-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">We believe in our people. </h2>
                  <p className="m-0 fs-17 lh-34">
                    Every person that forms part of our organization has a voice in the decisions of the company. Each member is a local expert in their area, who gets involved and participates in the development of our goals, and who values ​​family, tradition and a love for sharing all the magic that Peru has to offer.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="images/our-purpose/our-core-values/we-believe-in-our-people.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img src="images/our-purpose/our-core-values/we-are-committed-to-being-extraordinary.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">We are committed to being extraordinary.</h2>

                  <p className="m-0 fs-17 lh-34">
                    We connect people to travel experiences that transform their lives through authenticity, innovation and commitment. Our purpose is to provide an experience that exceeds customer expectations, based on excellence.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">We promote positive change.</h2>
                  <p className="m-0 fs-17 lh-34">
                    We foster an operational resilience that helps to anticipate, prevent, recover and adapt to circumstances posed by unexpected events. Through teamwork, we ensure the constant improvement and renewal of processes that help us to achieve objectives and goals.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="images/our-purpose/our-core-values/we-promote-positive-change.jpg" className="img-fluid" />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img src="images/our-purpose/our-core-values/we-are-connected-to-the-world.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">We are connected to the world.</h2>

                  <p className="m-0 fs-17 lh-34">
                    We are part of a global community of travelers that respects and integrates the culture of tourists and the local communities where we operate. Through our social commitment, we always welcome differences to generate a deeper connection with tourists and locals alike.
                  </p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">We take care of our planet. </h2>
                  <p className="m-0 fs-17 lh-34">
                    We are an environmentally conscious company and are committed to conserving the environment, including through the promotion of rational and sustainable uses of natural resources to minimize any possible impacts.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="images/our-purpose/our-core-values/we-take-care-of-our-planet.jpg" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="row m-b-5">
              <div className="col-12 col-md-4 mb-5">
                <div className="card">
                  <a href="why-valencia-travel" className="link-our">
                    <img
                      src="images/why-chose-valencia-min.jpg"
                      className="card-img-top"
                      alt="Why Valencia Travel"
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title purpose">
                            Why Valencia Travel
                          </h5>
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
                      className="card-img-top"
                      alt="Travel with Purpose"
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title purpose">
                            Travel with Purpose
                            </h5>
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
                      className="card-img-top"
                      alt="Our core values"
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title purpose">
                            Our core values
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
                  <a href="valencia-travel-history" className="link-our">
                    <img
                      src="images/history-of-the-valencia-min.jpg"
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
                      className="card-img-top"
                      alt="Our philosophy"
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title purpose">
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
                      src="images/local-experts-min.jpg"
                      className="card-img-top"
                      alt="Local Experts"
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title purpose">
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
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
    },
  };
}
