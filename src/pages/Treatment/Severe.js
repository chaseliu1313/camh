import React, { useState, useEffect } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import StepCard from '../../components/Cards/StepCard';
import { Row as R, Col as C } from 'react-bootstrap';
import styled from 'styled-components';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../../resource/path_bg.svg';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Blu,
} from '../../theme/resource';

const Severe = () => {
  useEffect(() => {
    //set initial default responses

    setRes([false, null, null, null, null]);
    setHeight(window.innerWidth);
    console.log(height);
  }, []);

  const lineHeight_sm = '5vh';
  const lineHeight_lg = '10vh';

  const initialValue = [null, null, null, null, null];
  const [responses, setRes] = useState(initialValue);
  const [height, setHeight] = useState(window.innerWidth);

  const handleResponse = (index) => {
    switch (index) {
      case 0:
        console.log('psychosocial strategies');
        break;
      case 1:
        console.log('Psychotherapy');
        break;
      case 2:
        if (responses[0]) {
          setRes([false, false, null, null, null]);
        } else {
          setRes([true, false, null, null, null]);
        }
        break;
      case 3:
        if (responses[1]) {
          setRes([true, false, null, null, null]);
        } else {
          setRes([true, true, null, null, null]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container id="treatment_sever_container">
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 3 }}>
          <SubContainer>
            <Heading
              type="h1"
              weight="normal"
              size="5vmin"
              align="center"
              color={SecondaryColor_Blk}
            >
              Moderate/Severe Depression Pathway
            </Heading>
            <Paragraph
              weight="normal"
              size="3vmin"
              align="center"
              color={SecondaryColor_Blu}
            >
              Click on each box to learn more.
            </Paragraph>
          </SubContainer>
        </CenterCol>
      </Row>

      <Row className="p_row">
        <C xs lg="2">
          <Heading
            type="h4"
            weight="normal"
            size="2vmin"
            color={SecondaryColor_Blk}
            align="center"
            lineHeight={lineHeight_sm}
            weight="bold"
          >
            Step 1
          </Heading>
        </C>
        <CenterCol md={{ span: 8, offset: 1 }}>
          <StepCard
            background={PrimaryColor}
            height={lineHeight_sm}
            width="90%"
            cursor
            onClick={() => handleResponse(0)}
          >
            <Heading
              type="h4"
              weight="normal"
              size="3vmin"
              color="white"
              align="center"
            >
              Psychosocial Strategies
            </Heading>
          </StepCard>
        </CenterCol>
      </Row>

      {!responses[0] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 2
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <SubContainer>
              <SubText weight="bold">Not agreeable to medication</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                cursor
                width="30vw"
                onClick={() => handleResponse(1)}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Psychotherapy
                </Heading>
              </StepCard>
            </SubContainer>
            <SubText weight="bold">OR</SubText>
            <SubContainer>
              <SubText weight="bold">Agreeable to medication</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
                onClick={() => handleResponse(2)}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Fluoxetine + Psychotherapy
                </Heading>
              </StepCard>
            </SubContainer>
          </CenterCol>
        </Row>
      ) : (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 2
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              cursor
              width="30vw"
              onClick={() => handleResponse(2)}
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Fluoxetine
              </Heading>
            </StepCard>
            <SubText weight="bold">+</SubText>
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="30vw"
              cursor
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Psychotherapy
              </Heading>
            </StepCard>
          </CenterCol>
        </Row>
      )}

      {responses[0] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 3
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="90%"
              cursor
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Check response after 6 weeks
              </Heading>
            </StepCard>
          </CenterCol>
        </Row>
      ) : (
        ''
      )}
      {responses[0] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 4
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <SubContainer>
              <SubText weight="bold">Response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                cursor
                width="30vw"
                onClick={() => handleResponse(3)}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Continue treatment for 3 months
                </Heading>
              </StepCard>
            </SubContainer>
            <SubText weight="bold">OR</SubText>
            <SubContainer>
              <SubText weight="bold">No response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Team Review & Treatment Change
                </Heading>
              </StepCard>
            </SubContainer>
          </CenterCol>
        </Row>
      ) : responses[1] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 4
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <SubContainer>
              <SubText>Response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_sm}
                width="90%"
                cursor
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Continue treatment for 3 months
                </Heading>
              </StepCard>
            </SubContainer>
          </CenterCol>
        </Row>
      ) : (
        ''
      )}
      {responses[1] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 5
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="90%"
              cursor
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Check response after 3 months
              </Heading>
            </StepCard>
          </CenterCol>
        </Row>
      ) : (
        ' '
      )}
      {responses[1] ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              weight="normal"
              size="2vmin"
              color={SecondaryColor_Blk}
              align="center"
              lineHeight={lineHeight_sm}
              weight="bold"
            >
              Step 6
            </Heading>
          </C>
          <CenterCol md={{ span: 8, offset: 1 }}>
            <SubContainer>
              <SubText weight="bold">Remission</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                cursor
                width="30vw"
                flex="column"
              >
                <Heading
                  type="p"
                  weight="normal"
                  size="1.8vmin"
                  color="white"
                  align="center"
                >
                  ·Continue medication for 6+ months
                </Heading>
                <Heading
                  type="p"
                  weight="normal"
                  size="1.8vmin"
                  color="white"
                  align="center"
                >
                  ·Relapse prevention plan
                </Heading>
                <Heading
                  type="p"
                  weight="normal"
                  size="1.8vmin"
                  color="white"
                  align="center"
                >
                  ·Reduce intensity & frequency of visits
                </Heading>
              </StepCard>
            </SubContainer>
            <SubText weight="bold">OR</SubText>
            <SubContainer>
              <SubText weight="bold">No response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Team Review & Treatment Change
                </Heading>
              </StepCard>
            </SubContainer>
          </CenterCol>
        </Row>
      ) : (
        ''
      )}
      <img src={bg} id="treatment_bg" alt="background" />
    </Container>
  );
};

export default Severe;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px;
`;

const CenterCol = styled(C)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1vmin 0 1vmin;
`;

const Row = styled(R)``;
