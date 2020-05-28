import React, { useState, useEffect } from 'react';
import { Paragraph, SubText } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { css } from 'styled-components';
import './assessment.css';
import { assessment1 } from '../../resource/content';
import bg6 from '../../resource/illu6.svg';
import { enterAni, exitAni } from '../../theme/animation';
import { SecondaryColor_Blk } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import DSM from './DSM';
export default function Intro(props) {
  const [hide, setHide] = useState(false);
  const [showModal, setShowModeal] = useState(false);

  const MarginP = '20px 0 20px 0';
  useEffect(() => {
    let a = props.hide;

    setHide(a);
  }, [props.hide]);

  return (
    <Container id="assess_intro" hide={hide}>
      <Card height="60vh" width="80vw" padding="50px">
        <Paragraph weight="bold" size="3vmin" color={SecondaryColor_Blk}>
          {assessment1[0]}
        </Paragraph>
        <Row className="assess_intro_row2">
          <Col md={8}>
            <Paragraph
              weight="normal"
              size="3vmin"
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[1]}
            </Paragraph>
            <Paragraph
              weight="normal"
              size="3vmin"
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[2]}
            </Paragraph>
            <Paragraph
              weight="normal"
              size="3vmin"
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[3]}
            </Paragraph>
            <SubText size="2vmin">{assessment1[4]}</SubText>
            <Button
              primary={false}
              type=" "
              height="7vh"
              width="20vw"
              onClick={() => setShowModeal(true)}
              display
            >
              DSM-5
            </Button>
          </Col>
          <Col md={4}>
            <IMG src={bg6} />
          </Col>
        </Row>
        <Row className="assess_intro_row3"></Row>
      </Card>
      <DSM show={showModal} onClose={setShowModeal} />
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 6vmin 6vmin 2vmin 6vmin;
  overflow: hidden;
  transition: all 1s linear;
  ${({ hide }) =>
    hide
      ? css`
          animation: ${exitAni} 0.5s linear;
          animation-fill-mode: forwards;
          display: none;
        `
      : css`
          animation: ${enterAni} 0.5s linear;
          animation-fill-mode: forwards;
          diplay: flex;
        `}
`;

const IMG = styled.img`
  height: 40%;
  width: auto;
  opacity: 0.7;
`;
