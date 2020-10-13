/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

/* import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'; */
import {
  Banners,
  Icon,
  OurRecommendations,
  PackageTypes,
  Reviews,
  Slide,
  TopTours,
} from '@/components/index';
import { getItinerariesByPackage, getPackageDetail } from '@/core/index';
import Culture from '@/icons/culture.svg';
import Hike from '@/icons/hike.svg';
import Wildlife from '@/icons/wildlife.svg';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Gallery(props) {
  const { images } = props;

  console.log('SDASDA', images);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        {images.length > 0 && <Slide images={images} navigation pagination={false} />}
      </Modal.Body>
    </Modal>
  );
}

function Itineraries({ id }) {
  const [itineraries, setItineraries] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  async function fetchItineraries(itinerary) {
    const { result } = await getItinerariesByPackage({ id: itinerary });
    setItineraries(result?.data);
  }

  function openModal(event, item) {
    event.preventDefault();
    setImages(item?.images);
    setModalShow(true);
  }

  useEffect(() => {
    fetchItineraries(id);
  }, []);
  return (
    <>
      {itineraries.map(item => (
        <div className="row pb-4 pt-4 mt-3 itinerary" key={item?.id}>
          <div className="col-12 col-md-8">
            <h2 className="fs-16 m-0 font-weight-bold pb-2">{item?.subtitle}</h2>
            <p
              className="fs-16 lh-29"
              dangerouslySetInnerHTML={{ __html: item?.content }}
            />
          </div>

          {item.images.length > 0 && (
            <div className="col-12 offset-md-1 col-md-3 pt-2 text-right">
              <img
                src={PUBLIC_API + item.images[0].image}
                className="d-block w-100 fit"
                alt={item.alt}
              />
              <a
                href="/gallery"
                onClick={event => openModal(event, item)}
                className="btn btn-link fs-16 pt-3 d-block text-right">
                View all photos
              </a>
            </div>
          )}
        </div>
      ))}
      <Gallery images={images} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default function Home() {
  const router = useRouter();

  const [packageDetail, setPackageDetail] = useState(null);
  async function fetchPackage(slug) {
    const { result } = await getPackageDetail({ slug });
    setPackageDetail(result?.data);
  }

  useEffect(() => {
    if (router?.query?.p) {
      fetchPackage(router?.query?.p);
    }
  }, [router]);

  return (
    <Base>
      {packageDetail && <Slide images={packageDetail.images} />}
      <div className="container package-detail">
        {/*  <div className="row pb-4">
          <div className="col-12 fs-16 lh-29 pt-5 pb-4">
            <p
              className="fs-16 lh-29"
              dangerouslySetInnerHTML={{ __html: packageDetail?.description }}
            />
          </div>
        </div> */}
      </div>
      <div className="package-panel">
        <div className="container package-detail">
          <div className="row pb-4 mb-3">
            <div className="col-12 col-md-4">
              <div className="row  pt-4 content-details">
                <div className="col-12 pt-2 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0 font-weight-bold w-300">
                      Physical Difficulty
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={packageDetail?.physical_difficulty} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0  font-weight-bold w-300">
                      Cultural rating
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={packageDetail?.cultural_rating} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 pt-1 pb-3 pt-md-0 pb-md-0  fs-16 font-weight-bold w-300">
                      Wildlife expectation
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={packageDetail?.wildlife_expectation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="row  pt-4 content-details">
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={PUBLIC_API + packageDetail?.specialist?.thumbnail}
                    alt="Contact Us"
                    className="image-circle"
                  />
                </div>
                <div className="col-12 col-md-6 text-center pt-2">
                  <h4 className="fs-20 font-weight-bold pb-3">
                    Talk to your travel specialists
                  </h4>
                  <a href="#" className="btn btn-contact btn-outline-dark fs-16 w-100">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container package-detail">
        <div className="row">
          <div className="col-12">
            <h2 className="fs-16 m-0 font-weight-bold">
              {packageDetail?.days > 1 ? 'Day by Day Schedule' : 'Half-Day Schedule'}
            </h2>
          </div>
        </div>

        <Itineraries id={packageDetail?.id} />
      </div>
    </Base>
  );
}
