import React, { useState, useEffect, useCallback } from 'react';
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
  PrimaryColor,
} from '../theme/resource';
import { highlightsContent } from '../resource/content';

import bg1 from '../resource/illu1.svg';
import bg2 from '../resource/illu2.svg';
import bg3 from '../resource/illu3.svg';
import bg4 from '../resource/illu4.svg';
import bg5 from '../resource/illu5.svg';
import bg6 from '../resource/illu6.svg';
import fs from '../resource/factsheet.png';

export default function Hightlights() {
  const [bgKey, updateKey] = useState(1);
  const inv = 15000;
  const [mounted, setMounted] = useState(false);
  const MarginP = '20px 0 20px 0';
  const fontWeight = 'normal';
  const titles = [
    'Orientation to the Tool',
    'Depression in Teens Overview',
    '  Resource:',
  ];
  const [activeTitle, setActive] = useState(titles[0]);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useCallback(() => {
    console.log(active);
    let active = titles[bgKey];
    setActive(active);
  }, [bgKey]);

  return (
    <Main bgKey={bgKey} mounted={mounted}>
      <Row>
        <CenterCol md={{ span: 8, offset: 2 }}>
          <Heading
            color={SecondaryColor_Blk}
            size="5vmin"
            weight="bold"
            align="center"
            margin="15px 0 0 0"
          >
            {activeTitle}
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
              setActive(titles[key]);
            }}
          >
            <Carousel.Item className="ov_slide" id="ov_slide_1">
              <div>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[0]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[1]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  The content provides a step-by-step assessment and treatment
                  pathway for youth depression and is based on our &nbsp;
                  <a
                    className="ov_a"
                    href="https://pubmed.ncbi.nlm.nih.gov/29697887/"
                  >
                    systematic review
                  </a>
                  &nbsp;, which found the&nbsp;
                  <a
                    className="ov_a"
                    href="https://www.nice.org.uk/guidance/ng134"
                  >
                    NICE guidelines
                  </a>
                  &nbsp;to be the highest quality.
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_3">
              <div>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[7]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[8]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[9]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[10]}
                </Paragraph>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide">
              <div id="ov_slide_5">
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                >
                  {highlightsContent[3]}
                </Paragraph>
                <IMG src={fs} />
                <a
                  href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=4&fname=Mood-Foundations-Package-Youth-pdf.pdf"
                  target="_blank"
                  download
                >
                  <Button primary={false} height="7vh" width="20vw" display>
                    Download
                  </Button>
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <CenterCol md={{ span: 4, offset: 4 }}>
          <Link to="/overview/pathways">
            <Button
              primary={true}
              type="outlined"
              height="7vh"
              width="20vw"
              display={true}
            >
              <Paragraph>Next</Paragraph>
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

    default:
      return ` background-color: ${TertiaryColor_Tel};
      background-image: url(${bg5});
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
  width: 15%;
`;

/* 


*/
