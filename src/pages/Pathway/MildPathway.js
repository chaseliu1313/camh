import React, { useState } from 'react';
import Heading, { SubText } from '../../components/Text/Heading';
import StepCard, {
  StepOptionCard,
  StepOptionButton,
} from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { PrimaryColor, PrimaryGradient } from '../../theme/resource';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const setResponse = (index, res) => {
  let state = [...res];
  state[index] = true;

  switch (index) {
    case 0:
      state[index + 1] = false;

      break;
    case 1:
      state[index - 1] = false;

      break;
    case 2:
      state[index + 1] = false;

      break;
    case 3:
      state[index - 1] = false;

      break;
    default:
      break;
  }

  return state;
};

export default function MildPathway(props) {
  const [responses, setRes] = useState([true, false, true, false]);

  return (
    <Container id="path_mild_container">
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          <StepCard background={PrimaryGradient[0]} height="4vh" cursor={false}>
            <Heading
              type="h1"
              weight="normal"
              size="3vmin"
              color="white"
              align="center"
              lineHeight="4vh"
            >
              Step 1: Psychosocial Strategies
            </Heading>
          </StepCard>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }} className="arrow">
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className="arrow_d"
            color={PrimaryColor}
          />
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          <StepOptionCard height="4vh">
            <StepOptionButton
              label="No"
              onClick={() => setRes(setResponse(0, responses))}
              unSelect={responses[1]}
            />
            <StepCard
              background={PrimaryGradient[1]}
              shadow="none"
              radius="0"
              height="4vh"
              cursor={false}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Step2: Check Response after 2 weeks
              </Heading>
            </StepCard>
            <StepOptionButton
              label="Yes"
              color="green"
              onClick={() => setRes(setResponse(1, responses))}
              unSelect={responses[0]}
            />
          </StepOptionCard>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[0] ? (
            <StepCard
              background={PrimaryGradient[2]}
              height="4vh"
              cursor={false}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Step 3: Psychotherapy
              </Heading>
            </StepCard>
          ) : null}

          {responses[1] ? (
            <StepCard
              background={PrimaryGradient[3]}
              height="4vh"
              cursor={false}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Step 3: Reduce Frequency and Intensity of Visits
              </Heading>
            </StepCard>
          ) : null}
        </CenterCol>
      </Row>
      <Row className="p_row">
        {responses[0] ? (
          <CenterCol md={{ span: 8, offset: 2 }} className="arrow">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="arrow_d"
              color={PrimaryColor}
            />
          </CenterCol>
        ) : null}
      </Row>
      <Row className="p_row">
        {responses[0] ? (
          <CenterCol md={{ span: 8, offset: 2 }}>
            <StepOptionCard height="4vh">
              <StepOptionButton
                label="No"
                onClick={() => setRes(setResponse(2, responses))}
                unSelect={responses[3]}
              />
              <StepCard
                background={PrimaryGradient[4]}
                shadow="none"
                radius="0"
                height="4vh"
                cursor={false}
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                  lineHeight="4vh"
                >
                  Step4:Check Response after 2-3 months.
                </Heading>
              </StepCard>
              <StepOptionButton
                label="Yes"
                color="green"
                onClick={() => setRes(setResponse(3, responses))}
                unSelect={responses[2]}
              />
            </StepOptionCard>
          </CenterCol>
        ) : null}
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[2] && responses[0] ? (
            <StepCard
              background={PrimaryGradient[5]}
              height="4vh"
              cursor
              onClick={() => {
                props.node.click();
              }}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Step 5: Consider Moderate/Severe Depression
              </Heading>
            </StepCard>
          ) : null}

          {responses[3] && responses[0] ? (
            <StepCard
              background={PrimaryGradient[6]}
              height="4vh"
              cursor={false}
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Step 5: Reduce Frequency and Intensity of Visits
              </Heading>
            </StepCard>
          ) : null}
        </CenterCol>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;
