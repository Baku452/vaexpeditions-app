/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const ItemTravelAdvice = ({ title, content, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div role="button" className={styles.box} tabIndex={0} onClick={handleShow}>
        <h3  className={styles.shadow} >{title}</h3>
        <img className="w-100" src={PUBLIC_API + image} alt={title} />
      </div>

      <Modal size="lg" className="p-4" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <img className=" col-12 col-lg-6 pb-2 " src={PUBLIC_API + image} alt={title} />
                       
            <div className={` col-12 col-lg-6 w-80 ${styles.abc}`} dangerouslySetInnerHTML={{ __html: content }}/>
            
            </div>
            
        </Modal.Body>
        {/* <Modal.Footer className="py-3 mx-auto">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export { ItemTravelAdvice };
