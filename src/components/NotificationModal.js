import React from 'react';
import Button from './Buttons/Buttons';
import { Modal } from 'react-bootstrap';
import { UPDATE_SEVERE_TREATMENT } from '../store/actions';

export const NotificationModal = (props) => {
  const { content, heading, isShow, setShow, dispatch, type } = props;
  const handleCloseConfirmed = () => {
    setShow(false);
    if (type === UPDATE_SEVERE_TREATMENT) {
      dispatch({
        type,
        payload: [false, null, null, null, null, null, null, null, null],
      });
    } else {
      dispatch.push('/treatment/severe');
    }
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button err display height="5vmin" width="7vw" onClick={handleClose}>
          Stay
        </Button>
        <Button
          primary
          display
          height="5vmin"
          width="7vw"
          onClick={handleCloseConfirmed}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
