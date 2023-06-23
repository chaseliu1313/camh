import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Paragraph, SubText } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import styled, { css } from 'styled-components';
import './assessment.css';
import { assessment1 } from '../../resource/content';
import bg6 from '../../resource/illu6.svg';
import { enterAni, exitAni } from '../../theme/animation';
import { SecondaryColor_Blk } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import Loading from '../../components/Loading';
import { fontSize, margin } from '../../theme/resource';
import { useWindowResize } from '../../hooks/useWindowResize';
const DSM = lazy(() => import('./DSM'));

export default function Intro(props) {
  const [hide, setHide] = useState(false);
  const [showModal, setShowModeal] = useState(false);
  const { size } = useWindowResize();
  const MarginP = size.height < 800 ? '10px 0 10px 0' : '20px 0 20px 0';

  useEffect(() => {
    let a = props.hide;
    setHide(a);
  }, [props.hide]);

  return (
    <Container id="assess_intro" hide={hide}>
      <Card height="60vh" width="80vw" padding="50px">
        <Paragraph
          weight="bold"
          size={fontSize.title2}
          color={SecondaryColor_Blk}
          className="page_subtitle"
        >
          {assessment1[0]}
        </Paragraph>
        <Row className="assess_intro_row2">
          <Col md={8}>
            <Paragraph
              weight="normal"
              size={fontSize.subTitle}
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[1]}
            </Paragraph>
            <Paragraph
              weight="normal"
              size={fontSize.subTitle}
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[2]}
            </Paragraph>
            <Paragraph
              weight="normal"
              size={fontSize.subTitle}
              color={SecondaryColor_Blk}
              margin={MarginP}
            >
              {assessment1[3]}
            </Paragraph>
            {size.height < 800 ? (
              <RowDiv>
                <SubText margin={`${margin}px 0 0 0`} size="2.5vmin">
                  {assessment1[4]}
                </SubText>
                <Button
                  primary={false}
                  type=" "
                  height="7vh"
                  width="20vw"
                  onClick={() => setShowModeal(true)}
                  display
                >
                  <Paragraph size="3vmin" color="white">
                    ICD-11 Criteria
                  </Paragraph>
                </Button>
              </RowDiv>
            ) : (
              <>
                <SubText margin={`${margin * 4}px 0 0 0`} size="2.5vmin">
                  {assessment1[4]}
                </SubText>
                <Button
                  primary={false}
                  type=" "
                  height="7vh"
                  width="20vw"
                  onClick={() => setShowModeal(true)}
                  display
                >
                  <Paragraph size="3vmin" color="white">
                    ICD-11 Criteria
                  </Paragraph>
                </Button>
              </>
            )}
          </Col>
          <Col md={4}>
            <IMG src={bg6} />
          </Col>
        </Row>
        <Row className="assess_intro_row3"></Row>
      </Card>
      <Suspense fallback={<Loading loading={'true'} />}>
        <DSM show={showModal} onClose={setShowModeal} />
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 3vmin 6vmin 2vmin 6vmin;
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
  height: 40%;
  width: auto;
  opacity: 0.7;
`;

const RowDiv = styled.div`
height: 100%,
width: 100%,
display: flex;
justify-content: center;
align-items: center;
`;
