import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel } from 'react-bootstrap';
import Heading, { Paragraph, SubText } from '../components/Text/Heading';
import Button from '../components/Buttons/Buttons';
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  TertiaryColor_Blu,
  TertiaryColor_Yel,
  TertiaryColor_Bro,
} from '../theme/resource';
import { highlightsContent } from '../resource/content';
import { fontSize, margin } from '../theme/resource';
import { useWindowResize } from '../hooks/useWindowResize';
import bg1 from '../resource/illu1.svg';
import bg2 from '../resource/illu2.svg';
import bg3 from '../resource/illu3.svg';
import bg4 from '../resource/illu4.svg';
import bg5 from '../resource/illu5.svg';
import fs from '../resource/factsheet.png';

const fontWeight = 'normal';
const titles = [
  'Orientation to the Tool',
  'Depression in Teens Overview',
  ' Depression Fact Sheet',
];

export default function Hightlights() {
  const [bgKey, updateKey] = useState(1);
  const inv = 10000;
  const [mounted, setMounted] = useState(false);
  const { size } = useWindowResize();
  //set active title hook
  const [activeTitle, setActive] = useState(titles[0]);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  const MarginP = size.height < 800 ? '10px 0' : '40px 0';
  const MarginFirstRow = size.height < 800 ? '0 0 10px 0' : '0 0 40px 0';
  useCallback(() => {
    let active = titles[bgKey];
    setActive(active);
  }, [bgKey, setActive]);

  return (
    <Main bgKey={bgKey} mounted={mounted}>
      <Row>
        <CenterCol md={{ span: 8, offset: 2 }}>
          <Heading
            color={SecondaryColor_Blk}
            size={fontSize.title}
            weight="bold"
            align="center"
            margin={`${margin}px 0`}
            type="h1"
          >
            {activeTitle}
          </Heading>
        </CenterCol>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="carousel_row">
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
                  margin={MarginFirstRow}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  ·
                  <a
                    className="ov_a"
                    href="https://www.camh.ca/en/science-and-research/institutes-and-centres/cundill-centre-for-child-and-youth-depression"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Cundill Centre
                  </a>
                  {' ' + highlightsContent[0]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  {highlightsContent[1]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  ·The content provides a step-by-step assessment and treatment
                  pathway for youth depression and is based on our&nbsp;
                  <a
                    className="ov_a"
                    href="https://pubmed.ncbi.nlm.nih.gov/29697887/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    systematic review
                  </a>
                  , which found the&nbsp;
                  <a
                    className="ov_a"
                    href="https://www.nice.org.uk/guidance/ng134"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NICE guidelines
                  </a>
                  &nbsp;to be the highest quality.
                </Paragraph>
                <SubText className="slide-footnote">1/3</SubText>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="ov_slide_3">
              <div tabIndex="1">
                <Paragraph
                  margin={MarginFirstRow}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  {highlightsContent[7]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  {highlightsContent[8]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  {highlightsContent[9]}
                </Paragraph>
                <Paragraph
                  margin={MarginP}
                  color={SecondaryColor_Blk}
                  weight={fontWeight}
                  size={size.height < 800 ? fontSize.p : fontSize.subTitle}
                >
                  {highlightsContent[10]}
                </Paragraph>
                <SubText className="slide-footnote">2/3</SubText>
              </div>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" tabIndex="2">
              <div id="ov_slide_5">
                {size.height > 800 && (
                  <Paragraph
                    margin={MarginP}
                    color={SecondaryColor_Blk}
                    weight={fontWeight}
                    size={fontSize.subTitle}
                  >
                    {highlightsContent[3]}
                  </Paragraph>
                )}
                <Row id="hightlight_inner3">
                  <Col md={5}>
                    <IMG src={fs} />
                  </Col>
                  <Col md={7}>
                    <a
                      href="https://www.camh.ca/-/media/files/mood-foundations-package-youth-pdf.pdf"
                      target="_blank"
                      download
                      rel="noopener noreferrer"
                    >
                      {size.height < 800 && (
                        <Paragraph
                          margin={MarginP}
                          color={SecondaryColor_Blk}
                          weight={fontWeight}
                          size={fontSize.subtext}
                        >
                          {highlightsContent[3]}
                        </Paragraph>
                      )}
                      <Button
                        primary={false}
                        height="7vh"
                        width="20vw"
                        display
                        margin="25% 0 0 25%"
                      >
                        <Paragraph size="3vmin" color="white">
                          Download
                        </Paragraph>
                      </Button>
                    </a>
                  </Col>
                </Row>
              </div>
              <SubText className="slide-footnote">3/3</SubText>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row id="overView_spacing"></Row>
      <Row>
        <CenterCol md={{ span: 4, offset: 4 }}>
          <Link to="/assessment">
            <Button
              primary={true}
              type="outlined"
              height="7vh"
              width="20vw"
              display={true}
            >
              <Paragraph>Next Section</Paragraph>
            </Button>
          </Link>
        </CenterCol>
      </Row>
    </Main>
  );
}

//background changing function

function switchBackground(index) {
  switch (index) {
    case 0:
      return ` background-color: ${TertiaryColor_Tel};
      background-image: url(${bg1});
      background-position: left center;`;

    case 1:
      return ` background-color: ${TertiaryColor_Blu};
      background-image: url(${bg2});
      background-position: right center;`;

    case 2:
      return `
      background-color: ${TertiaryColor_Bro};
      background-image: url(${bg3});
      background-position: left center;`;

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

//animations
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

//component styling
const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 30%;
  transition: all ease-in-out 0.7s;
  @media only screen and (max-height: 800px) {
    overflow-x: auto;
  }
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
  width: 80%;
`;
