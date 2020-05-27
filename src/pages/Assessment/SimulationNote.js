import React, { useState, useEffect } from 'react';
import Header, { Paragraph } from '../../components/Text/Heading';
import { Row, Col, Modal, ModalBody } from 'react-bootstrap';
import { wentWell, couldHave } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';
import styled from 'styled-components';

const SimulationNote = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const MarginP = '20px 0 20px 0';
  const fontWeight = 400;

  useEffect(() => {
    let s = props.show;
    setShow(s);
  }, [props.show]);

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Header type="h2" weight="bold" size="3vmin" margin="0 5px 0 20px">
          Assessment Simulation Review
        </Header>
      </Modal.Header>
      <ModalBody>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              {wentWell.map((w) => (
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {w}
                </Paragraph>
              ))}
            </Col>
            <Col md={6} xs={12}>
              {couldHave.map((c) => (
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {c}
                </Paragraph>
              ))}
            </Col>
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default SimulationNote;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
`;
