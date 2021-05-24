import { Banner, CardBox } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes, notifications, ourpurpose }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Banner
        description="Connecting humanity with the essence of the world"
        image="/images/our-purpose.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container text-justify">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-20 lh-34 font-weight-bold">Our Purpose</h2>
                  <p className="m-0 fs-20 lh-34">
                    We strive to connect people's lives. Through each trip, we seek to
                    create a global community of travelers, free from fear and aware of a
                    sustainable future.
                  </p>
                  <p />
                  <p className="m-0 fs-20 lh-34">
                    With 12 years of experience in the industry, we are passionate local
                    experts with a deep and genuine love for our culture. We love to share
                    the natural wonders of our country and, at the same time, connect with
                    the global community of world travelers.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img
                    src="images/our-purpose-min.jpg"
                    alt="Our Purpose"
                    className="img-fluid"
                  />
                </div>
              </div>
              <CardBox items={ourpurpose}></CardBox>
            </div>
          </div>
        </div>
      </section>
      <section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5 pt-5 text-justify">
          <div className="row pt-5 pb-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">Our Mision</h2>
                  <p className="m-0 fs-20 lh-34">
                    We strive to create innovative travel experiences that motivate you to
                    explore the incredible geographic diversity of Peru, and at the same
                    time learn from its historical and cultural legacy, providing a
                    personalized and responsible service that contributes to the
                    development of both the community and the travel sector.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="images/mision.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img src="images/vision.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2">
                  <h2 className="m-0 fs-20 font-weight-bold pb-5">Our Vision</h2>

                  <p className="m-0 fs-20 lh-34">
                    We aim to place ourselves as the Peruvian tourism company with the
                    greatest presence in the national and international market, with a
                    people-first ethic focused on customer satisfaction and the promotion
                    of sustainable tourism.
                  </p>
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

  const ourpurposeResponse = await fetch(`${PUBLIC_API}/ourpurpose/list/`);
  const ourpurpose = await ourpurposeResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      ourpurpose,
    },
  };
}
