import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { css } from 'styled-components';
import './assessment.css';
import { enterAni, exitAni } from '../../theme/animation';
import ReactPlayer from 'react-player';
import { video1, video2 } from '../../resource/content';
import { fontSize, SecondaryColor_Blk } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import { useWindowResize } from '../../hooks/useWindowResize';

export default function Simulation(props) {
  //show page hook
  const [hide, setHide] = useState(true);

  //play video hook
  const [play, setPlay] = useState(false);

  const { size } = useWindowResize();
  const videoURL = 'https://www.youtube.com/watch?v=NRKvtacOVfw';

  const MarginP = '20px 0 20px 0';
  console.log(props.hide);
  useEffect(() => {
    let a = props.hide;

    setHide(a);

    if (props.hide) setPlay(false);
  }, [props.hide]);

  const showNotes = () => {
    if (!hide) {
      setPlay(false);
    }
  };

  const hideNotes = () => {
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
            height="100%"
            width="100%"
            onEnded={() => {
              showNotes();
            }}
          />
        </Col>
        <Col md={6} xs={12}>
          <Card
            height="35vh"
            width="auto"
            padding={size.height < 800 ? '0px 10px' : '20px'}
          >
            <div className="assess_simu_side">
              <Paragraph
                color={SecondaryColor_Blk}
                margin={MarginP}
                size={fontSize.subTitle}
                weight={600}
              >
                {video1}
              </Paragraph>
              <Paragraph color={SecondaryColor_Blk} margin={MarginP}>
                {video2}
              </Paragraph>
              <Button
                primary
                display={false}
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
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;
  padding: 6vmin 6vmin 2vmin 6vmin;
  margin-top: 10vmin;
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
