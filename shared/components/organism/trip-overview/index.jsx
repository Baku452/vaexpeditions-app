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
    <Element name="trip-overview" className="container ">
      <div className={styles.overview}>
        <div className="container ">
          <div className="row mb-3">
            <div
              className={`${styles.content} containerBox col-12 col-md-6  mt-3 background2`}>
              <div className="row pb-2">
                <div className="col-12 pt-3 pb-2">
                  <div className="row ">
                    <div
                      className={` ${styles.titulo} row col-md-9 fs-16 pt-1 pt-md-0 pb-md-0 font-weight-bold`}>
                      <img
                        alt="Wildlife expectation"
                        className={` ${styles.icono} `}
                        src="/icons/hiking.svg"
                      />
                      <p className="pl-2">Physical Difficulty</p>
                    </div>
                    <div className={` ${styles.puntos} px-1 col-md-3 d-flex`}>
                      <Rating number={pack?.physical_difficulty} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row ">
                    <div
                      className={` ${styles.titulo} row col-md-9 fs-16 pt-1 pt-md-0 pb-md-0 font-weight-bold`}>
                      <img
                        alt="Wildlife expectation"
                        className={`card-img-top ${styles.icono}`}
                        src="/icons/culture2.svg"
                      />
                      <p className="pl-2">Cultural rating</p>
                    </div>
                    <div className={` ${styles.puntos} px-1 col-12 col-md-3 d-flex`}>
                      <Rating number={pack?.cultural_rating} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row">
                    <div
                      className={` ${styles.titulo} row col-md-9 fs-16 pt-1  pt-md-0 pb-md-0 font-weight-bold`}>
                      <img
                        alt="Wildlife expectation"
                        className={`card-img-top ${styles.icono}`}
                        src="/icons/ave.svg"
                      />
                      <p className="pl-2">Wildlife expectation</p>
                    </div>
                    <div className={` ${styles.puntos} px-1 col-12 col-md-3 d-flex`}>
                      <Rating number={pack?.wildlife_expectation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.content2} col-12 col-md-6 text-center mt-3 pt-2 background2`}>
              <div className="row  pb-2 ">
                <div
                  role="button"
                  className=" text-center  pt-3  col-md-3 col-12"
                  tabIndex={0}
                  onClick={handleShow}>
                  <div className={`${styles.specialist}`}>
                    <img
                      src={PUBLIC_API + pack?.specialist?.thumbnail}
                      alt="Contact Us"
                      className={styles.circle}
                    />
                  </div>
                </div>
                <div className=" pt-3 pl-3 col-md-9 col-12">
                  <p className="font-weight-bold p-0">
                    <span>Travel specialist</span>
                  </p>
                  <div role="button" tabIndex={0} onClick={handleShow}>
                    <h6 className={`${styles.name}`}>{pack?.specialist?.fullname}</h6>
                  </div>
                  <Link
                    href={{
                      pathname: '/contact-us',
                      query: { package: pack.slug },
                    }}>
                    <a className={`${styles.boton} btn btn-primary fs-16`}>Contact Us</a>
                  </Link>
                </div>

                <Modal className="p-4" show={show} onHide={handleClose}>
                  <Modal.Header className="p-4" closeButton>
                    <Modal.Title className="fw-bold">
                      {pack?.specialist?.fullname}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className={`row ${styles.specialist} align-items-center`}>
                        <div className="col-12 col-sm-6 align-self-center text-center ">
                          <img
                            src={PUBLIC_API + pack?.specialist?.thumbnail}
                            alt={pack?.specialist?.fullname}
                            className=" img-fluid"
                          />
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
                            <a href={`mailto:${pack?.specialist?.email}`}>
                              {pack?.specialist?.email}
                            </a>{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
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
