import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function PopUp({ popup }) {
    const [show, setShow] = useState(false);
    const delay = 3;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(
        () => {
            let timer = setTimeout(() => setShow(true), delay * 1000);

            return () => {
                clearTimeout(timer);
            };
        }, []
    );

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName={styles.modal}
            >
                <Modal.Body>
                    <div className="row">
                        <div className={`pl-5 py-5 col-md-5 d-none d-md-block ${styles.content}`}>
                            <h4 className="pb-3">{popup.title}</h4>
                            <p>{popup.content}</p>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </div>
                        <div className={`col-md-5 d-none d-md-block`}>
                            <img src={PUBLIC_API + popup.original}></img>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export { PopUp };