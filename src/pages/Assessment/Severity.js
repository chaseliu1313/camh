import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Card from '../../components/Cards/Card';
import StepCard from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { Severity } from '../../resource/content';
import { SecondaryColor_Blk, PrimaryColor } from '../../theme/resource';
import { enterAni2, exitAni3 } from '../../theme/animation';

import { Modal, ModalBody } from 'react-bootstrap';

const SeverityCard = (props) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setmodalContent] = useState('');
  const Pmarging = '20px 0';

  //show page state function
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  //mouse over eventhandler
  const mouseOver = (index) => {
    setModalShow(true);
    setModalTitle(index === 3 ? 'Mild' : index === 4 ? 'Moderate' : 'Severe');
    setmodalContent(Severity[index]);
  };

  return (
    <>
      <Container show={show}>
        <Card height="70vh" width="80vw" padding="50px 20px">
          <Paragraph margin={Pmarging} color={SecondaryColor_Blk} weight="bold">
            {Severity[0]}
          </Paragraph>
          <Paragraph margin={Pmarging} color={SecondaryColor_Blk}>
            {Severity[1] + Severity[2]}
          </Paragraph>
          <Row>
            <Col md={{ span: 8, offset: 2 }} id="serverity_group">
              <StepCard
                height="20vmin"
                width="20vmin"
                background={PrimaryColor}
                padding="0 10px"
                className="tool_card"
                onClick={() => mouseOver(3)}
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Mild
                </Heading>
              </StepCard>
              <StepCard
                height="20vmin"
                width="20vmin"
                background={PrimaryColor}
                padding="0 10px"
                className="tool_card"
                onClick={() => mouseOver(4)}
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Moderate
                </Heading>
              </StepCard>
              <StepCard
                height="20vmin"
                width="20vmin"
                background={PrimaryColor}
                padding="0 10px"
                className="tool_card"
                onClick={() => mouseOver(5)}
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Severe
                </Heading>
              </StepCard>
            </Col>
          </Row>
        </Card>
      </Container>
      <SeverityModal
        show={modalShow}
        title={modalTitle}
        content={modalContent}
        onClose={setModalShow}
      />
    </>
  );
};

export default SeverityCard;

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  felx-
  overflow: hidden;
  transition: all 1s linear;

  ${({ show }) =>
    show
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
          flex-shrink: 1;
        `
      : css`
          animation: ${exitAni3} 0.8s linear forwards;
          flex-shrink: 2000;
        `}
`;

const SeverityModal = (props) => {
  const [mshow, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.onClose(false);
  };
  useEffect(() => {
    let s = props.show;
    setShow(s);
  }, [props.show]);

  const MarginP = '20px 0 20px 0';
  const fontWeight = 'normal';
  return (
    <Modal show={mshow} onHide={handleClose} size="lg" centered id="sev_modal">
      <Modal.Header closeButton id="sev_header">
        <Heading
          type="h2"
          weight="bold"
          size="2.5vmin"
          margin="0 5px 0 20px"
          color="white"
        >
          {props.title}
        </Heading>
      </Modal.Header>
      <ModalBody>
        <Paragraph
          margin={MarginP}
          color="white"
          weight={fontWeight}
          size="2vmin"
        >
          {props.content}
        </Paragraph>
      </ModalBody>
    </Modal>
  );
};
