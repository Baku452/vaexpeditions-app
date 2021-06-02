import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function PopUp() {
  const [show, setShow] = useState(false);
  const delay = 3;
  const handleClose = () => setShow(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay * 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { PopUp };
