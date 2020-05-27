import React, { useState, useEffect, Fragment } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { keyframes, css } from 'styled-components';
import './assessment.css';
import { enterAni, exitAni, setDelay } from '../../theme/animation';
import ReactPlayer from 'react-player';
import { video1, video2 } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';

export default function Simulation(props) {
  const [hide, setHide] = useState(true);

  const videoURL = 'https://www.youtube.com/watch?v=fWFuQR_Wt4M';

  useEffect(() => {
    let a = props.hide;

    setHide(a);
  }, [props.hide]);

  const showNotes = () => {
    console.log('paused or ened');
  };

  return (
    <Container id="assess_intro" hide={hide}>
      <Row className="assess_simu">
        <Col md={6} xs={12}>
          <ReactPlayer
            url={videoURL}
            playing={!hide}
            controls={true}
            volume="0.3"
            onPause={() => {
              showNotes();
            }}
            onEndede={() => {
              showNotes();
            }}
          />
        </Col>
        <Col md={6} xs={12}>
          <Card height="50vh" width="auto" padding="20px">
            <div className="assess_simu_side">
              <Paragraph color={SecondaryColor_Blk}>{video1}</Paragraph>
              <Paragraph color={SecondaryColor_Blk}>{video2}</Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
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

          display: flex;
        `}
`;

const IMG = styled.img`
  height: auto;
  width: 15%;
  opacity: 0.7;
`;
