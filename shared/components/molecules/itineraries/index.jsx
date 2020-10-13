/* eslint-disable react/no-danger */
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Slide } from '@/components/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Gallery(props) {
  const { images } = props;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        {images.length > 0 && <Slide images={images} navigation pagination={false} />}
      </Modal.Body>
    </Modal>
  );
}

function Itineraries({ itineraries }) {
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  function openModal(event, item) {
    event.preventDefault();
    setImages(item?.images);
    setModalShow(true);
  }

  return (
    <>
      {itineraries.map(item => (
        <div className="row pb-4 pt-4 mt-3 itinerary" key={item?.id}>
          <div className="col-12 col-md-8">
            <h2 className="fs-16 m-0 font-weight-bold pb-2">{item?.subtitle}</h2>
            <div
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

export { Itineraries };
