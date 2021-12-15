import Link from 'next/link';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { Rating } from '../../molecules/rating/index';
import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TripOverview({ pack }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Element name="trip-overview" className="container">
      <div className={styles.overview}>
        <div className="container">
          <div className={`${styles.content} row pb-2 mb-3`}>
            <div className="containerBox col-12 col-md-5">
              <div className="row pt-4 pb-2">
                <div className="col-12 pt-3 pb-2">
                  <div className="row ">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0 font-weight-bold ">
                      Physical Difficulty
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.physical_difficulty} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row ">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0  font-weight-bold">
                      Cultural rating
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.cultural_rating} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row">
                    <div className="col-12 col-md-7 pt-1 pb-3 pt-md-0 pb-md-0  fs-16 font-weight-bold">
                      Wildlife expectation
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.wildlife_expectation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className="row pt-4 pb-2">
                <div  
                role="button" 
                className="col-12 col-md-6 text-center"
                tabIndex={0}
                onClick={handleShow}>
                <div className={`${styles.specialist}`}>
                  <p className="font-weight-bold">
                  <span>Travel specialist</span>
                  </p>
                  <img
                    src={PUBLIC_API + pack?.specialist?.thumbnail}
                    alt="Contact Us"
                    className={styles.circle}
                  />
                    <h6 className="pt-2 ">
                      {pack?.specialist?.fullname}
                    </h6>
                </div>
                </div>
                <Modal className="p-4" show={show} onHide={handleClose}>
                <Modal.Header className="p-4" closeButton>
                  <Modal.Title className="fw-bold">{pack?.specialist?.fullname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <div className={`row ${styles.specialist} align-items-center`}>
                      <div className="col-12 col-sm-6 align-self-center text-center ">
                        <img src={PUBLIC_API + pack?.specialist?.thumbnail} alt={pack?.specialist?.fullname} className=" img-fluid" />
                      </div>
                      <div
                        className="col-12 col-sm-6 p-2 align-self-center  "
                        dangerouslySetInnerHTML={{ __html: pack?.specialist?.content }}
                      />
                    </div>
                    <div className="row ps-4 pb-4">
                      <div className={`${styles.title} col-12`}>Travel Specialist</div>
                      <div className="col-12 fs-16 ps-3">
                        Contact:{' '}
                        <span>
                          <a href={`mailto:${pack?.specialist?.email}`}>{pack?.specialist?.email}</a>{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
                
                <div className="col-12 col-md-6 text-center pt-2 ">
                  <h4 className="fs-20 font-weight-bold m-0 pb-3">
                    Talk to your travel specialists
                  </h4>
                  <Link
                    href={{
                      pathname: '/contact-us',
                      query: { package: pack.slug },
                    }}>
                    <a className="btn btn-primary fs-16 w-100">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-12 fs-16 lh-25"
          dangerouslySetInnerHTML={{ __html: pack?.description }}
        />
      </div>
    </Element>
  );
}

export { TripOverview };
