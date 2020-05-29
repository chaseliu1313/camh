import React from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Card from '../../components/Cards/Card';
import StepCard from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { tools, toolLink1, toolLink2 } from '../../resource/content';
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  SecondaryColor_Yel,
} from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import { useHistory } from 'react-router-dom';

const Tools = () => {
  const goBack = () => {
    history.push('/assessment/pears');
  };
  const viewSwicher = () => {
    history.push('/');
  };

  const jump = (index) => {
    index === 1
      ? window.open(toolLink2, '_blank')
      : window.open(toolLink1, '_blank');
  };
  const Pmarging = '10px 0';
  let history = useHistory();

  return (
    <Container id="assess_landing">
      <Heading
        size="5vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin="15px 0 0 0"
      >
        Assessment Tools
      </Heading>
      <Card height="70vh" width="80vw" padding="20px">
        <Paragraph margin={Pmarging}>{tools[0] + tools[1]}</Paragraph>
        <Paragraph margin={Pmarging}>{tools[2]}</Paragraph>
        <Row>
          <Col md={6}>
            <StepCard
              height="20vh"
              background={TertiaryColor_Tel}
              className="tool_card"
              onClick={() => {
                jump(2);
              }}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="10vh"
              >
                {tools[3]}
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
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="10vh"
              >
                {tools[4]}
              </Heading>
            </StepCard>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Paragraph margin={Pmarging}>{tools[5]}</Paragraph>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Paragraph margin={Pmarging}>{tools[6]}</Paragraph>
          </Col>
          <Col md={6}>
            <Paragraph margin={Pmarging}>{tools[7]}</Paragraph>
          </Col>
        </Row>
      </Card>

      <BtnGroup id="btn_group">
        <Button
          primary={true}
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
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display
        >
          <Paragraph>Next</Paragraph>
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

  overflow: hidden;
  transition: all 1s linear;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;
