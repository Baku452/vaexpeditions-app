import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/history-of-the-valencia.jpg"
        alt="weq"
      />

      <section id="more">

        <div className="container text-justify">
          <div className="row mb-5 px-5">
            <div className="col-lg-7 col-md-12 mt-4">
              <p>
                Valencia Travel was born in 2009 as the fulfillment of a dream shared by the Hurtado Valencia brothers: René, a professional guide and the current manager of the company, and Amílcar, a professor of philosophy and the assistant manager of the company. Both came from a relatively large family from Chumbivilcas, a province about eight hours from Cusco, and both shared the same entrepreneurial spirit.
                    </p>
              <p>
                The two brothers had the vision of creating the best travel agency located in the city of Cusco: a company that connects people through travel, to foster a single global community of travelers, free of fear and aware of the sustainable future. The origin of the company name was inspired by the maternal surname of the family, Valencia, a name of Spanish descent.
                    </p>
            </div>
            <div className="col-lg-5 col-md-12 mt-4">
              <img src="images/cusco2.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="px-5">
            <p>
              And as the two brothers say today: “We started with a small office, but a very big dream. Now our company is one of the most recognized travel agencies in Cusco, for its exemplary quality of service, unique experiences and commitment to the empowerment of local people.”
                  </p>
            <h2 className="fs-20 lh-34 font-weight-bold">What inspired the company logo?</h2>
            <p>The idea for the company logo was inspired by Rene’s experience as a guide and tour leader at Machu Picchu. After taking many photos of the Inca citadel, one image caught his attention: Two llamas, with their necks crossed one over the other, standing right in front of Machu Picchu. </p>
            <p>This is where the history of Valencia Travel began, with the wonder of Machu Picchu: “It is impossible not to wonder what Machu Picchu is doing there, with so many possible places to build an empire that controlled a territory that spanned from Chile to Ecuador. Why were the Incas inspired to build such a magnificent site in this remote corner five hundred meters above the Urubamba River? It seems like an unanswered question, but now we know that the Incas had more than one reason to choose this hidden place in the center of four peaks, each oriented according to the cardinal points.” Still, many mysteries surround this incredible archaeological site. </p></div>
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
                        height="auto"
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
                        height="auto"
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
                        height="auto"
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
                        height="auto"
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
                        height="auto"
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
                        height="auto"
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
