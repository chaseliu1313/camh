import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody } from 'react-bootstrap';
import { DSM as content } from '../../resource/content';

import styled from 'styled-components';

const DSM = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.onClose(false);
  };
  const MarginP = '20px 0 20px 0';
  const fontWeight = 'normal';

  useEffect(() => {
    let s = props.show;
    setShow(s);
  }, [props.show]);

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered id="dsm_modal">
      <Modal.Header closeButton id="dsm_header">
        <Heading
          type="h2"
          weight="bold"
          size="2.5vmin"
          margin="0 5px 0 20px"
          color="white"
        >
          DSM-5 Criteria
        </Heading>
      </Modal.Header>
      <ModalBody>
        <Container>
          {content.map((c, index) =>
            index === 0 ? (
              <Paragraph color="white" weight="bold" size="2vmin" key={index}>
                {c}
              </Paragraph>
            ) : (
              <Paragraph
                margin={MarginP}
                color="white"
                weight={fontWeight}
                size="2vmin"
                key={index}
              >
                {c}
              </Paragraph>
            )
          )}
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

export default DSM;
