import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/why-chose-valencia.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Extraordinary Life experiences</h2>
                  <p className="m-0 fs-17 lh-34">
                    Transform, renew y reconnect with life. Discover new ways to see the world and experience the magic that encompasses this region. We have defined itineraries incorporating freedom and flexibility for our passengers.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/extraordinary-life-experiences.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/reconnection-with-the-real-world.png" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Reconnection with the real world.
                  </h2>
                  <p className="m-0 fs-17 lh-34">We changed the definition of luxury for your wellbeing with the places we visit, the local cultures and the appreciate the natural beauty that surrounds us, encouraging physical and mental wellbeing to reconnect once more with life.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Profound local experience.</h2>
                  <p className="m-0 fs-17 lh-34">
                    We want to share the essence of our region, whether that be eating some local food, sharing some amazing local sites, or learning about mysterious history and folklore. Our immersive experiences will enable you to submerge yourself into different local cultures. Our travel experts will show you a different side to the places we visit, who will always be available with their knowledge and local advice.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/profound-local-experience.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/attention-24-7.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Attention 24/7 </h2>
                  <p className="m-0 fs-17 lh-34">
                    We are available and connected with the world; we are always available for whatever our clients need. Simply give us a call or send us an email. We operate 24 hours a day, 7 days per week and 365 days of the year.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">100% Guaranteed departures.</h2>
                  <p className="m-0 fs-17 lh-34">
                    All of our departures are guaranteed. Once the trip has been reserved and paid for, we will guarantee your trip.
                  </p>
                  <p className="m-0 fs-17 lh-34">
                    We will not under any circumstances cancel your trip. The only reason your travel could be postponed would be due to issues of public security or weather conditions.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/100-guaranteed-departures.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/guarantee-of-best-quality.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Guarantee of best quality.</h2>
                  <p className="m-0 fs-17 lh-34">
                    We are committed to fulfilling the highest possible international standards of service as well as standards of security and safety. We also offer regular training courses to our guides, field staff and office staff as they will be the first contact with our clients and the people who will be responsible for the safety of our clients.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">We are worldwide connected!</h2>
                  <p className="m-0 fs-17 lh-34">
                    We form part of a global community of travellers who respect and integrate our own cultures and travellers, to the regions we visit. Through our social commitment policy, we encourage cultural differences to be able to generate a deeper connection.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/we-are-worldwide-connected.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/our-purpose/why-valencia/responsible-travel.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-17 lh-34 font-weight-bold">Responsible travel.</h2>
                  <p className="m-0 fs-17 lh-34">
                    We aim to have a positive impact in any of the areas that we visit. We empower women, indigenous communities and local people, through training sessions, the careful selection of our providers and by helping a number of community projects. We are committed to working in a way that is socially and environmentally conscious with the aim to promote positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5 pt-5">
          <div className="row pt-5 pb-5">
            <div className="col-10 mx-auto">
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
                        height="247"
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
                        height="247"
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
                        src="images/local-experts.jpg"
                        height="247"
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
