import React, { useState } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Card from '../../components/Cards/Card';
import StepCard from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { exitAni2, enterAni3 } from '../../theme/animation';
import SeverityCard from './Severity';
import { fontSize, margin } from '../../theme/resource';
import { tools, toolLink1, toolLink2 } from '../../resource/content';
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  SecondaryColor_Yel,
} from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import { useHistory } from 'react-router-dom';

const Tools = () => {
  const [showContent, setContent] = useState([tools[3], tools[4]]);
  const [show, setShow] = useState(false);

  const goBack = () => {
    if (show) {
      setShow(false);
    } else {
      history.push('/assessment/pears');
    }
  };
  const viewSwicher = () => {
    if (!show) {
      setShow(true);
    } else {
      history.push('/treatment');
    }
  };

  const jump = (index) => {
    index === 1
      ? window.open(toolLink2, '_blank')
      : window.open(toolLink1, '_blank');
  };

  const mouseOver = (index) => {
    let replaceArr = [...showContent];
    let replace1 = tools[6];
    let replace2 = tools[7];

    index === 0 ? (replaceArr[0] = replace1) : (replaceArr[1] = replace2);

    setContent(replaceArr);
  };

  const mouseOut = (index) => {
    let replaceArr = [...showContent];
    let replace1 = tools[3];
    let replace2 = tools[4];

    index === 0 ? (replaceArr[0] = replace1) : (replaceArr[1] = replace2);
    setContent(replaceArr);
  };
  const Pmarging = '20px 0';
  let history = useHistory();

  return (
    <Container id="assess_landing">
      <Heading
        size={fontSize.title}
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        mmargin={`${margin}px 0 ${margin * 1.5}px 0`}
      >
        {show ? 'Assessing Depression Severity' : 'Assessment Tools'}
      </Heading>
      <div id="tools_views" tabIndex="0">
        <SubContainer show={!show}>
          <Card height="50vh" width="80vw" padding="50px 20px">
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight="normal"
            >
              {tools[0] + ' Learn more in our '}
              <a href="/resources/tools/assessment/animateVideos">
                short animated videos.
              </a>
              {tools[1]}
            </Paragraph>
            <Paragraph
              margin={`${margin}px 0 ${margin * 2.5}px 0`}
              color={SecondaryColor_Blk}
            >
              {tools[2]}
            </Paragraph>
            <Row>
              <Col md={6}>
                <StepCard
                  height="20vh"
                  background={TertiaryColor_Tel}
                  className="tool_card"
                  onClick={() => {
                    jump(2);
                  }}
                  onMouseOver={() => mouseOver(0)}
                  onMouseOut={() => mouseOut(0)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') mouseOver(0);
                  }}
                  tabIndex="0"
                >
                  <Heading
                    type="h1"
                    weight="normal"
                    size={fontSize.title2}
                    color="white"
                    align="center"
                  >
                    {showContent[0]}
                  </Heading>
                </StepCard>
              </Col>
              <Col md={6}>
                <StepCard
                  height="20vh"
                  background={SecondaryColor_Yel}
                  padding="0 10px"
                  className="tool_card"
                  onClick={() => {
                    jump(1);
                  }}
                  onMouseOver={() => mouseOver(1)}
                  onMouseOut={() => mouseOut(1)}
                  tabIndex="1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') mouseOver(1);
                  }}
                >
                  <Heading
                    type="h1"
                    weight="normal"
                    size={fontSize.title2}
                    color="white"
                    align="center"
                  >
                    {showContent[1]}
                  </Heading>
                </StepCard>
              </Col>
            </Row>
            <Paragraph margin={Pmarging} color={SecondaryColor_Blk}>
              {tools[5]}
            </Paragraph>
          </Card>
        </SubContainer>
        <SeverityCard show={show} />
      </div>
      <BtnGroup id="btn_group">
        <Button
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display
        >
          <Paragraph color={TertiaryColor_Tel}>Previous</Paragraph>
        </Button>
        <Button
          primary
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display
        >
          <Paragraph>{show ? 'Next Section' : 'Next'}</Paragraph>
        </Button>
      </BtnGroup>
    </Container>
  );
};

export default Tools;

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  transition: all 1s linear;
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 1s linear;

  ${({ show }) =>
    show
      ? css`
          animation: ${enterAni3} 0.8s linear forwards;
          flex-shrink: 1;
        `
      : css`
          animation: ${exitAni2} 0.8s linear forwards;
          flex-shrink: 2000;
        `}
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;
