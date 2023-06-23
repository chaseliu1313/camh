import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { PrimaryColor } from '../../theme/resource';

const SurveyModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    props.setShowSurvey();
  };

  useEffect(() => {
    setShow(props.show);

    return () => {
      setShow(false);
    };
  }, [props.show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      centered
      id="survey_modal"
    >
      <Modal.Header closeButton id="survey_header">
        <Heading
          type="h2"
          weight="normal"
          size="2.5vmin"
          margin="0 5px 0 20px"
          color={PrimaryColor}
        >
          Will you implement any new practices based on this tool?
        </Heading>
      </Modal.Header>
      <ModalBody>
        <Container>
          <Checkboxes>
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Yes" />
            </InputGroup.Prepend>
            <Paragraph size="2vmin">Yes</Paragraph>
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="No" />
            </InputGroup.Prepend>
            <Paragraph size="2vmin">No</Paragraph>
          </Checkboxes>
          <Paragraph>Tell us more? Complete our 5 minute survey</Paragraph>
        </Container>
      </ModalBody>
    </Modal>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const Checkboxes = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SurveyModal;
