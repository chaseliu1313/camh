import React from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled from 'styled-components';
import './assessment.css';
import { Col, Carousel } from 'react-bootstrap';
import { pears } from '../../resource/content';
import { SecondaryColor_Blk, TertiaryColor_Tel } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import { useHistory } from 'react-router-dom';
import idea from '../../resource/idea.svg';

const Pears = () => {
  //handlers to routes
  const goBack = () => {
    history.push('/assessment');
  };
  const viewSwicher = () => {
    history.push('/assessment/tools');
  };
  const fontWeight = 'normal';
  const inv = 10000;
  const Pmarging = '20px 0';
  let history = useHistory();
  return (
    <Container>
      <Heading
        size="5vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin="15px 0"
        id="assess_landing"
      >
        Assessment Pearls
      </Heading>
      <Col lg={{ span: 8, offset: 2 }}>
        <Carousel className="pearl_card" interval={inv}>
          <Carousel.Item className="ov_slide" id="pearl_slide">
            <Heading
              size="3vmin"
              weight="bold"
              align="center"
              color={SecondaryColor_Blk}
              margin="35px 0"
              id="assess_seconday"
            >
              Setting up a comfortable environment
            </Heading>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[5]}
            </Paragraph>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[6]}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item className="ov_slide" id="pearl_slide">
            <Heading
              size="3vmin"
              weight="bold"
              align="center"
              color={SecondaryColor_Blk}
              margin="35px 0"
              id="assess_seconday"
            >
              Depression in teens can be missed because:
            </Heading>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[0]}
            </Paragraph>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[1]}
            </Paragraph>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[2]}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item className="ov_slide" id="pearl_slide">
            <Heading
              size="3vmin"
              weight="bold"
              align="center"
              color={SecondaryColor_Blk}
              margin="35px 0"
              id="assess_seconday"
            >
              Assess for complexity and risk
            </Heading>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[3]}
            </Paragraph>
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight={fontWeight}
            >
              {pears[4]}
            </Paragraph>
          </Carousel.Item>
        </Carousel>
      </Col>
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

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;

  overflow: hidden;
  transition: all 1s linear;
  background-image: url(${idea});
  background-repeat: no-repeat;
  background-size: 75% 50%;
  background-position: 220% 110%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;

export default Pears;
