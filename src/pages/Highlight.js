import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel } from 'react-bootstrap';
import Heading, { Paragraph } from '../components/Text/Heading';
import Button from '../components/Buttons/Buttons';
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  TertiaryColor_Blu,
  TertiaryColor_Yel,
  TertiaryColor_Bro,
} from '../theme/resource';
import { highlightsContent } from '../resource/content';

import bg1 from '../resource/illu1.svg';
import bg2 from '../resource/illu2.svg';
import bg3 from '../resource/illu3.svg';
import bg4 from '../resource/illu4.svg';
import bg5 from '../resource/illu5.svg';
import bg6 from '../resource/illu6.svg';

export default function Hightlights() {
  const [bgKey, updateKey] = useState(1);
  const inv = 15000;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <Main bgKey={bgKey} mounted={mounted}>
      <Row>
        <CenterCol md={{ span: 4, offset: 4 }}>
          <Heading
            color={SecondaryColor_Blk}
            size="7vmin"
            weight="bold"
            align="center"
          >
            Keypoints
          </Heading>
        </CenterCol>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Carousel
            className="ov_carousel"
            interval={inv}
            onSelect={(key) => {
              updateKey(key);
            }}
          >
            <Carousel.Item className="ov_slide" id="ov_slide_1">
              <div>
                <Paragraph margin="10px 0 0 0" color="#1E1E1E" weight="400">
                  {highlightsContent[0]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[1]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[2]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[3]}
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_2">
              <div>
                <Paragraph margin="10px 0 0 0" color="#1E1E1E" weight="400">
                  {highlightsContent[5]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[6]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[7]}
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_3">
              <div>
                <Paragraph margin="10px 0 0 0" color="#1E1E1E" weight="400">
                  {highlightsContent[8]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[9]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[10]}
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_4">
              <div>
                <Paragraph margin="10px 0 0 0" color="#1E1E1E" weight="400">
                  {highlightsContent[11]}
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[12]}
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_5">
              <div>
                <Paragraph margin="10px 0 0 0" color="#1E1E1E" weight="400">
                  {highlightsContent[13]}
                </Paragraph>
                <Paragraph
                  margin="10px 0 10px 0"
                  color="#1E1E1E"
                  weight="400"
                  color="#6E298D"
                >
                  Resources:
                </Paragraph>
                <Paragraph margin="10px 0 10px 0" color="#1E1E1E" weight="400">
                  {highlightsContent[4]}
                </Paragraph>
                <a
                  href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=4&fname=Mood-Foundations-Package-Youth-pdf.pdf"
                  target="_blank"
                  download
                >
                  <Button primary={true}>Download</Button>
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <CenterCol md={{ span: 4, offset: 4 }}>
          <Link to="/overview/pathways">
            <Button primary={true} type="outlined" height="7vh">
              Next
            </Button>
          </Link>
        </CenterCol>
      </Row>
    </Main>
  );
}

function switchBackground(index) {
  switch (index) {
    case 0:
      return ` background-color: ${TertiaryColor_Tel};
      background-image: url(${bg1});
      background-position: left center;`;
      break;
    case 1:
      return ` background-color: ${TertiaryColor_Blu};
      background-image: url(${bg2});
      background-position: right center;`;
      break;
    case 2:
      return `
      background-color: ${TertiaryColor_Bro};
      background-image: url(${bg3});
      background-position: left center;`;
      break;
    case 3:
      return `
      background-color: ${TertiaryColor_Yel};
      background-image: url(${bg4});
      background-position: right center;`;
    case 4:
      return `
      background-color: ${TertiaryColor_Tel};
      background-image: url(${bg5});
      background-position: left center;`;
      break;
    default:
      return ` background-color: ${TertiaryColor_Tel};
      background-image: url(${bg1});
      background-position: left center;`;
  }
}

const enterAni = keyframes`

0% {
  opacity: 0;
  transform: scale(0.5) translateY(100vh);


}
50%{
  opacity:1;
  transform: scale(0.8) translateY(50vh);
}
 
100%{
  opacity:1;
  transform: scale(1) translateY(0);
}
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 30%;
  transition: all ease-in-out 1s;
  ${({ mounted }) =>
    mounted
      ? css`
          animation: ${enterAni} 0.8s linear;
        `
      : null};
  ${({ bgKey }) => switchBackground(bgKey)};
`;

const CenterCol = styled(Col)``;

const IMG = styled.img`
  height: auto;
  width: 20%;
  float: right;
`;

/* 


*/
