import React, { useState, useEffect, Fragment } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { keyframes, css } from 'styled-components';
import './assessment.css';
import { assessment1 } from '../../resource/content';
import bg6 from '../../resource/illu6.svg';
import { enterAni, exitAni, setDelay } from '../../theme/animation';
import { SecondaryColor_Blk } from '../../theme/resource';
export default function Intro(props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let a = props.hide;

    setHide(a);
  }, [props.hide]);

  return (
    <Container id="assess_intro" hide={hide}>
      <Card height="60vh" width="80vw" padding="50px">
        <Heading type="h2" weight="bold" size="5vmin">
          Introduction
        </Heading>
        <Paragraph weight="normal" size="3vmin" color={SecondaryColor_Blk}>
          {assessment1}
        </Paragraph>
        <IMG src={bg6} />
      </Card>
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
  height: auto;
  width: 15%;
  opacity: 0.7;
`;
