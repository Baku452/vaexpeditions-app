/* eslint-disable react/no-danger */
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import { ContextAwareToggle, Gallery, Icon } from '@/components/index';
import Bed from '@/icons/bed.svg';
import Restaurant from '@/icons/restaurant.svg';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const SmartText = ({ text, length = 492 }) => {
  const [showLess, setShowLess] = useState(true);

  return (
    <div>
      {length === 0 ? (
        <div className="fs-16 lh-29" dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <>
          <div
            className="fs-16 lh-29"
            dangerouslySetInnerHTML={{
              __html: showLess ? `${text.slice(0, length)}...` : text,
            }}
          />
          <a
            role="presentation"
            style={{
              cursor: 'pointer',
              color: '#007bff',
              marginTop: '-12px',
              display: 'block',
              fontSize: '14px',
              textDecoration: 'underline !important',
            }}
            onClick={() => setShowLess(!showLess)}>
            {showLess ? 'Ver más' : 'Ver menos'}
          </a>
        </>
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

function Itineraries({ itineraries }) {
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  function openModal(event, item) {
    event.preventDefault();
    setImages(item?.images);
    setModalShow(true);
  }

  function getColorContent(index) {
    return (index + 1) % 2 === 0 ? 'content-gray' : 'content-white';
  }

  return (
    <>
      <Accordion defaultActiveKey={1} className="mb-5">
        {itineraries.map((item, index) => (
          <div key={item?.id}>
            <Card.Header>
              <ContextAwareToggle eventKey={index + 1} className={getColorContent(index)}>
                <h2 className="fs-16 m-0 font-weight-bold p-0">{item?.subtitle}</h2>
              </ContextAwareToggle>
            </Card.Header>

            <Accordion.Collapse eventKey={index + 1}>
              <Card.Body className={getColorContent(index)}>
                <div className="row pb-4 itinerary">
                  <div className="col-12 col-md-8 order-2 order-md-1">
                    {/* <div
                      className="fs-16 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    /> */}

                    <SmartText text={item?.content} length={item?.limit} />
                    <ul className="itinerary-items pt-2 pb-2 pl-0">
                      {item.items.map(element => (
                        <li key={element.id} className="pb-3">
                          <Icon
                            component={
                              element.types === 'Meals Included' ? Restaurant : Bed
                            }
                            viewBox="0 0 512 512"
                            className="icon-size-m mr-2"
                          />
                          <span className="font-weight-bold">{element.types}: </span>
                          {element.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.images.length > 0 && (
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
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
              </Card.Body>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>

      <GalleryWrapper
        images={images}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export { Itineraries };
