/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { CollapseContent1, Gallery, ItineraryItems } from '@/components/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const SmartText = ({ text }) => {
  const [showLess, setShowLess] = useState(true);

  return (
    <div>
      {text.length > 492 && text.length > 492 + 50 ? (
        <>
          <div
            className="fs-16 lh-29"
            dangerouslySetInnerHTML={{
              __html: showLess ? `${text.slice(0, 492)}...` : text,
            }}
          />
          <a
            role="presentation"
            style={{
              cursor: 'pointer',
              color: '#007bff',
              // marginTop: '-12px',
              display: 'block',
              fontSize: '14px',
              textDecoration: 'underline !important',
            }}
            onClick={() => setShowLess(!showLess)}>
            {showLess ? 'Show more' : 'Show less'}
          </a>
        </>
      ) : (
        <div className="fs-16 lh-29" dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </div>
  );
};

function GalleryWrapper(props) {
  const { images } = props;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        {images.length > 0 && <Gallery images={images} navigation pagination={false} />}
      </Modal.Body>
    </Modal>
  );
}

function List({ itineraries }) {
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  function openModal(event, item) {
    event.preventDefault();
    setImages(item?.images);
    setModalShow(true);
  }

  return (
    <>
      {/* <Collapse open={1}> */}
      {itineraries.map(
        (item, index) =>
          item.active && (
            <CollapseContent1 key={index.toString()} index={index} title={item?.subtitle}>
              <div className="row pb-4">
                <div className="col-12 col-md-8 order-2 order-md-1">
                  <SmartText text={item?.content} length={item?.limit} />
                  {item.items ? <ItineraryItems items={item?.items} /> : null}
                </div>
                {item.images
                  ? item.images.length > 0 && (
                      <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2">
                        <a
                          href="/gallery"
                          onClick={event => openModal(event, item)}
                          className="btn btn-link fs-16 pt-3 d-block text-start">
                          <img
                            src={PUBLIC_API + item.images[0].image}
                            className="d-block w-100 fit"
                            alt={item.alt}
                          />
                          View all photos
                        </a>
                      </div>
                    )
                  : null}
              </div>
            </CollapseContent1>
          ),
      )}
      {/* </Collapse> */}

      <GalleryWrapper
        images={images}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export { List };
