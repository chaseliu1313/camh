import React, { useState, useEffect } from 'react';
import Header, { Paragraph } from '../../components/Text/Heading';
import { Row, Col, Modal, ModalBody } from 'react-bootstrap';
import { wentWell, couldHave } from '../../resource/content';
import { SecondaryColor_Blk, Correct_G, Error_R } from '../../theme/resource';
import styled from 'styled-components';

const SimulationNote = ({ modalShow, hideNotes }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    hideNotes();
  };
  const MarginP = '20px 0 20px 0';
  const fontWeight = 'normal';

  useEffect(() => {
    let s = modalShow;
    setShow(s);
  }, [modalShow]);

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
              <Header type="h3" weight="normal" size="3vmin">
                What went well:
              </Header>
              {wentWell.map((w, index) => (
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  key={index}
                >
                  <p className="simu_marks">✔</p>
                  {w}
                </Paragraph>
              ))}
            </Col>
            <Col md={6} xs={12}>
              <Header type="h3" weight="normal" size="3vmin">
                Could Have:
              </Header>
              {couldHave.map((c, index) => (
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  key={index}
                >
                  <p className="simu_cross">✘</p>
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
