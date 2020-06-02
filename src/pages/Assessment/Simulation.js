import React, { useState, useEffect } from 'react';
import SimulationNote from './SimulationNote';
import { Paragraph } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { css } from 'styled-components';
import './assessment.css';
import { enterAni, exitAni } from '../../theme/animation';
import ReactPlayer from 'react-player';
import { video1, video2 } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';

export default function Simulation(props) {
  //show page hook
  const [hide, setHide] = useState(true);
  //show modal hook
  const [show, setShow] = useState(false);
  //play video hook
  const [play, setPlay] = useState(false);

  const videoURL = 'https://www.youtube.com/watch?v=Gm3FLGxb2ZU&t=1s';
  const MarginP = '20px 0 20px 0';

  useEffect(() => {
    let a = props.hide;

    setHide(a);
    setPlay(!a);

    return () => {
      setShow(false);
    };
  }, [props.hide]);

  const showNotes = () => {
    if (!hide) {
      setShow(true);
      setPlay(false);
    }
  };

  const hideNotes = () => {
    setShow(false);
    setPlay(true);
  };

  return (
    <Container id="assess_intro" hide={hide}>
      <Row className="assess_simu">
        <Col md={6} xs={12}>
          <ReactPlayer
            url={videoURL}
            playing={play}
            controls={true}
            onPlay={() => {
              hideNotes();
            }}
            width="100%"
            onPause={() => {
              showNotes();
            }}
            onEnded={() => {
              showNotes();
            }}
          />
        </Col>
        <Col md={6} xs={12}>
          <Card height="50vh" width="auto" padding="20px">
            <div className="assess_simu_side">
              <Paragraph color={SecondaryColor_Blk} margin={MarginP}>
                {video1}
              </Paragraph>
              <Paragraph color={SecondaryColor_Blk} margin={MarginP}>
                {video2}
              </Paragraph>
              <Button
                primary
                display
                height="7vh"
                width="20vw"
                onClick={() => showNotes()}
              >
                Simulation Review
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
      <SimulationNote modalShow={show} hideNotes={hideNotes} />
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
  justify-content: center;
  align-items: center;

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
