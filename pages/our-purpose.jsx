import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

export default function OurPurpose() {
  return (
    <Base>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/arequipa3.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <div className="col-10 mx-auto">
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-3">
                  <h2 className="fs-20 lh-34 font-weight-bold">
                    We have more than 15 years in the travel industry
                  </h2>
                  <p className="m-0 fs-20 lh-34">
                    Valencia travel’s histoy began 15 years ago. It is a family owned
                    business but we have taken more than 6,000 travelleres in adventure
                    all over Peru. Escribir un poco más sobre la agencia de viajes pero
                    que no sea un texto interminable. Algo relativamente corto que vaya al
                    grano.
                  </p>
                </div>
                <div className="col-12 col-md-6 m-b-25">
                  <img src="images/cusco2.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row m-b-5">
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <img
                      src="images/cusco2.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Our team of experts
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <img
                      src="images/cusco2.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Social Responsabiliy
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <img
                      src="images/cusco2.jpg"
                      height="247"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row align-items-start justify-content-start">
                        <div className="col-12 text-center">
                          <h5 className="card-title p-t-25 fs-25 fw-bold lh-23">
                            Cusco, our home
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-1">
                  <h2 className="m-0 fs-25 font-weight-bold pb-5">Our Mision</h2>
                  <p className="m-0 fs-20 lh-34">
                    Acá debería ir la misión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-5 order-2">
                  <img src="images/cusco2.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-md-6 mb-5 order-2 order-md-1">
                  <img src="images/cusco2.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 mb-5 order-1 order-md-2">
                  <h2 className="m-0 fs-25 font-weight-bold pb-5">Our Vision</h2>

                  <p className="m-0 fs-20 lh-34">
                    Acá debería ir la misión de la empresa. This is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen
                    book.
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
