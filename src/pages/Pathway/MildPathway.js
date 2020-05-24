import React, { useState, useEffect } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import StepCard, {
  StepOptionCard,
  StepOptionButton,
} from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Arrow from '../../resource/arrowdown.svg';
import { colorPalette } from '../../theme/resource';

export default function MildPathway() {
  const [responses, setRes] = useState([false, false, false, false]);

  const handleResponse = (index) => {
    let current = [...responses];
    current[index] = true;

    switch (index) {
      case 0:
        current[index + 1] = false;
        setRes(current);
        break;
      case 1:
        current[index - 1] = false;
        setRes(current);
        break;
      case 2:
        current[index + 1] = false;
        setRes(current);
        break;
      case 3:
        current[index - 1] = false;
        setRes(current);
        break;
      default:
        break;
    }
  };

  return (
    <Container id="path_mild_container">
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          <StepCard background={colorPalette(2)} height="4vh">
            <Heading
              type="h1"
              weight="normal"
              size="3vmin"
              color="white"
              align="center"
              lineHeight="4vh"
            >
              Psychosocial Strategies
            </Heading>
          </StepCard>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }} className="arrow">
          <Img src={Arrow} alt="step arrow" />
          <SubText>Check Response after 2 weeks</SubText>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          <StepOptionCard height="4vh">
            <StepOptionButton
              label="No"
              onClick={() => handleResponse(0)}
              unSelect={responses[1]}
            />
            <StepCard
              background={colorPalette(3)}
              shadow="none"
              radius="0"
              height="4vh"
            >
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                2 Weeks Monitoring
              </Heading>
            </StepCard>
            <StepOptionButton
              label="Yes"
              color="green"
              onClick={() => handleResponse(1)}
              unSelect={responses[0]}
            />
          </StepOptionCard>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[0] ? (
            <StepCard background={colorPalette(2)} height="4vh">
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Psychotherapy
              </Heading>
            </StepCard>
          ) : null}

          {responses[1] ? (
            <StepCard background={colorPalette(2)} height="4vh">
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Reduce Frequency and Intensity of Visits
              </Heading>
            </StepCard>
          ) : null}
        </CenterCol>
      </Row>
      <Row className="p_row">
        {responses[0] ? (
          <CenterCol md={{ span: 8, offset: 2 }} className="arrow">
            <Img src={Arrow} alt="step arrow" />
            <SubText>Check Response after 2-3 months.</SubText>
          </CenterCol>
        ) : null}
      </Row>
      <Row className="p_row">
        {responses[0] ? (
          <CenterCol md={{ span: 8, offset: 2 }}>
            <StepOptionCard height="4vh">
              <StepOptionButton
                label="No"
                onClick={() => handleResponse(2)}
                unSelect={responses[3]}
              />
              <StepCard
                background={colorPalette(3)}
                shadow="none"
                radius="0"
                height="4vh"
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                  lineHeight="4vh"
                >
                  Psychotherapy Response?
                </Heading>
              </StepCard>
              <StepOptionButton
                label="Yes"
                color="green"
                onClick={() => handleResponse(3)}
                unSelect={responses[2]}
              />
            </StepOptionCard>
          </CenterCol>
        ) : null}
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[2] && responses[0] ? (
            <StepCard background={colorPalette(2)} height="4vh">
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Consider Moderate/Severe Depression
              </Heading>
            </StepCard>
          ) : null}

          {responses[3] && responses[0] ? (
            <StepCard background={colorPalette(2)} height="4vh">
              <Heading
                type="h1"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
                lineHeight="4vh"
              >
                Reduce Frequency and Intensity of Visits
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

const Img = styled.img`
  height: auto;
  width: 5vmin;
`;
