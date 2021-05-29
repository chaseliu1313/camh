import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Heading, { Paragraph, SubText } from '../components/Text/Heading';
import Button from '../components/Buttons/Buttons';
import Teens from '../resource/teens.svg';
import Anime from 'react-anime';
import { useHistory } from 'react-router-dom';
import { size } from '../theme/resource';
import { landingContent } from '../resource/content';
import { fontSize, margin } from '../theme/resource';

export default function Landing() {
  let history = useHistory();

  let animePropsRight = {
    translateX: ['200vw', 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    opacity: [0, 1],
  };

  let animePropsLeft1 = {
    translateX: ['-200vw', 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 0,
  };

  let animePropsLeft2 = {
    translateX: ['-200vw', 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 200,
  };

  let animePropsLeft3 = {
    translateX: ['-200vw', 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 400,
  };

  const handleClick = () => {
    history.push('/overview');
    setTimeout(() => {}, 1600);
  };

  return (
    <Main>
      <Row>
        <LeftCol md={6} xs={12} tabIndex="0">
          <Anime {...animePropsLeft1}>
            <Heading
              type="h1"
              weight="bold"
              color="white"
              size={fontSize.title}
            >
              {landingContent[0]}
            </Heading>
          </Anime>
          <Anime {...animePropsLeft2}>
            <Paragraph
              color="white"
              size={fontSize.subTitle}
              margin={`${margin}px 0`}
            >
              {landingContent[1]}
            </Paragraph>
            <div id="landing_sub">
              <SubText color="white">Contact: Cundill.Centre@camh.ca</SubText>
              <SubText color="white">#CundillatCAMH</SubText>
            </div>
          </Anime>
          <Anime {...animePropsLeft3}>
            <Button onClick={handleClick} width="20vw" height="7vh" display>
              <Paragraph color="white" size="2vh">
                Begin
              </Paragraph>
            </Button>
          </Anime>
        </LeftCol>
        <RightCol md={6} xs={12} tabIndex="1">
          <Anime {...animePropsRight}>
            <IMG
              src={Teens}
              className="illustrating_1"
              alt="Illustrator of a group of teenagers"
            />
          </Anime>
        </RightCol>
      </Row>
    </Main>
  );
}

const Main = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10vmin;
  background: linear-gradient(
    0deg,
    rgba(29, 27, 68, 1) 0%,
    rgba(110, 41, 141, 1) 100%
  );
`;

const LeftCol = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px 10px 10px;
`;

const RightCol = styled(Col)`
  height: 100%;

  @media (max-width: ${size.mobileL}) {
  }
`;

const IMG = styled.img`
  height: 100%;
  width: 100%;

  position: relative;

  @media (max-width: ${size.laptopL}) {
  }

  @media (max-width: ${size.mobileL}) {
  }
`;
