import React, { useState, Fragment } from 'react';
import Heading, { SubText } from '../../components/Text/Heading';
import StepCard, {
  StepOptionCard,
  StepOptionButton,
} from '../../components/Cards/StepCard';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { PrimaryColor, PrimaryGradient } from '../../theme/resource';
import './pathway.css';

import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SeverePathway() {
  const initialValue = [false, false, false, null, null, null, null];
  const [responses, setRes] = useState(initialValue);

  const [medStreamRes, setMedRes] = useState(initialValue);

  const handleResponse = (index) => {
    let current = [...responses];
    let currentMed = [...medStreamRes];

    switch (index) {
      case 0:
        setRes(initialValue);
        setMedRes(initialValue);
        break;
      case 1:
        setRes([true, null, null, null, null, null, null]);

        break;
      default:
        break;
    }

    if (responses[0] === true) {
      //go into medication stream
      switch (index) {
        case 2:
          currentMed[index - 1] = false;
          currentMed[index] = false;
          setMedRes(currentMed);

          break;
        case 3:
          currentMed[index - 2] = true;
          currentMed[index - 1] = false;
          setMedRes(currentMed);
          break;
        case 4:
          currentMed[index - 2] = false;
          setMedRes(currentMed);
          break;
        case 5:
          currentMed[index - 3] = true;
          setMedRes(currentMed);
          break;
        default:
          break;
      }
    } else if (responses[0] === false) {
      switch (index) {
        case 2:
          current[index - 1] = false;
          current[index] = false;
          setRes(initialValue);
          break;
        case 3:
          current[index - 2] = true;
          current[index - 1] = false;
          setRes(current);
          break;
        case 4:
          current[index - 2] = false;
          setRes(current);
          break;
        case 5:
          current[index - 3] = true;
          setRes(current);
          break;
        default:
          break;
      }
      //go into normal stream
    }
  };

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
        <CenterCol md={{ span: 8, offset: 2 }}>
          <StepOptionCard height="4vh">
            <StepOptionButton
              label="No"
              onClick={() => handleResponse(0)}
              unSelect={responses[0] !== null && responses[0]}
            />
            <StepCard
              background={PrimaryGradient[0]}
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
                Agree to medication?
              </Heading>
            </StepCard>
            <StepOptionButton
              label="Yes"
              color="green"
              onClick={() => handleResponse(1)}
              unSelect={responses[0] !== null && !responses[0]}
            />
          </StepOptionCard>
        </CenterCol>
      </Row>
      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[0] === null ? null : (
            <Fragment>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
              <StepCard
                background={PrimaryGradient[1]}
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
                  {responses[0] === false
                    ? 'Step 2: Psychotherapy'
                    : responses[0] === true
                    ? 'Step 2: Medication & Psychotherapy'
                    : null}
                </Heading>
              </StepCard>
            </Fragment>
          )}
        </CenterCol>
      </Row>
      <Row className="p_row">
        {responses[0] !== null ? (
          <CenterCol md={{ span: 8, offset: 2 }}>
            <SubContainer>
              <SubText weight="bold" margin="0 5vmin">
                No response
              </SubText>
              <SubText weight="bold" margin="0 5vmin">
                Response
              </SubText>
            </SubContainer>
            {responses[0] ? (
              <StepOptionCard height="4vh">
                <StepOptionButton
                  label="No"
                  onClick={() => handleResponse(2)}
                  unSelect={medStreamRes[1] !== null && medStreamRes[1]}
                />
                <StepCard
                  background={PrimaryGradient[2]}
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
                    Step 3: Check response after 6 weeks
                  </Heading>
                </StepCard>
                <StepOptionButton
                  label="Yes"
                  color="green"
                  onClick={() => handleResponse(3)}
                  unSelect={medStreamRes[1] !== null && !medStreamRes[1]}
                />
              </StepOptionCard>
            ) : (
              <StepOptionCard height="4vh">
                <StepOptionButton
                  label="No"
                  onClick={() => handleResponse(2)}
                  unSelect={responses[1] !== null && responses[1]}
                />
                <StepCard
                  background={PrimaryGradient[2]}
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
                    Step 3: Check response after 6 weeks?
                  </Heading>
                </StepCard>
                <StepOptionButton
                  label="Yes"
                  color="green"
                  onClick={() => handleResponse(3)}
                  unSelect={responses[1] !== null && !responses[1]}
                />
              </StepOptionCard>
            )}
          </CenterCol>
        ) : null}
      </Row>

      {responses[1] === false && !medStreamRes[0] ? (
        <Row className="p_row">
          <CenterCol md={{ span: 8, offset: 2 }}>
            <>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
              <StepCard
                background={PrimaryGradient[5]}
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
                  Step 4: Change psychotherapy or add medication
                </Heading>
              </StepCard>
            </>
          </CenterCol>
        </Row>
      ) : responses[1] && !medStreamRes[0] ? (
        <>
          <Row className="p_row">
            <CenterCol md={{ span: 8, offset: 2 }}>
              <>
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="arrow_d"
                  color={PrimaryColor}
                />
                <StepCard
                  background={PrimaryGradient[5]}
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
                    Step 4: Continue treatment for 3 months
                  </Heading>
                </StepCard>
              </>
            </CenterCol>
          </Row>
          <Row className="p_row">
            <CenterCol md={{ span: 8, offset: 2 }}>
              <>
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="arrow_d"
                  color={PrimaryColor}
                />
                <SubContainer>
                  <SubText weight="bold" margin="0 5vmin">
                    No response
                  </SubText>
                  <SubText weight="bold" margin="0 5vmin">
                    Response
                  </SubText>
                </SubContainer>
                <StepOptionCard height="4vh">
                  <StepOptionButton
                    label="No"
                    onClick={() => handleResponse(4)}
                    unSelect={
                      responses[0]
                        ? medStreamRes[2] !== null && medStreamRes[2]
                        : responses[2] !== null && responses[2]
                    }
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
                      Step 5: Check response after 3 months
                    </Heading>
                  </StepCard>
                  <StepOptionButton
                    label="Yes"
                    color="green"
                    onClick={() => handleResponse(5)}
                    unSelect={
                      responses[0]
                        ? medStreamRes[2] !== null && !medStreamRes[2]
                        : responses[2] !== null && !responses[2]
                    }
                  />
                </StepOptionCard>
              </>
            </CenterCol>
          </Row>
        </>
      ) : null}

      {!responses[0] && responses[2] ? (
        <Row className="p_row">
          <CenterCol md={{ span: 8, offset: 2 }}>
            <>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
              <StepCard
                background={PrimaryGradient[5]}
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
                  Step 6: Reduce intensity & frequency of visits; relapse
                  prevention plan
                </Heading>
              </StepCard>
            </>
          </CenterCol>
        </Row>
      ) : null}

      {responses[0] && !medStreamRes[1] ? (
        <Row className="p_row">
          <CenterCol md={{ span: 8, offset: 2 }}>
            <>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
              <StepCard
                background={PrimaryGradient[5]}
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
                  Step 4: Team review & Treatment change prevention plan
                </Heading>
              </StepCard>
            </>
          </CenterCol>
        </Row>
      ) : responses[0] && medStreamRes[1] ? (
        <>
          <Row className="p_row">
            <CenterCol md={{ span: 8, offset: 2 }}>
              <>
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="arrow_d"
                  color={PrimaryColor}
                />
                <StepCard
                  background={PrimaryGradient[5]}
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
                    Step 4: Continue treatment for 3 months
                  </Heading>
                </StepCard>
              </>
            </CenterCol>
          </Row>

          <Row className="p_row">
            <CenterCol md={{ span: 8, offset: 2 }}>
              <>
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="arrow_d"
                  color={PrimaryColor}
                />
                <SubContainer>
                  <SubText weight="bold" margin="0 5vmin">
                    No response
                  </SubText>
                  <SubText weight="bold" margin="0 5vmin">
                    Response
                  </SubText>
                </SubContainer>
                <StepOptionCard height="4vh">
                  <StepOptionButton
                    label="No"
                    onClick={() => handleResponse(4)}
                    unSelect={
                      responses[0]
                        ? medStreamRes[2] !== null && medStreamRes[2]
                        : responses[2] !== null && responses[2]
                    }
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
                      Step 5: Check response after 3 months
                    </Heading>
                  </StepCard>
                  <StepOptionButton
                    label="Yes"
                    color="green"
                    onClick={() => handleResponse(5)}
                    unSelect={
                      responses[0]
                        ? medStreamRes[2] !== null && !medStreamRes[2]
                        : responses[2] !== null && !responses[2]
                    }
                  />
                </StepOptionCard>
              </>
            </CenterCol>
          </Row>
        </>
      ) : null}

      <Row className="p_row">
        <CenterCol md={{ span: 8, offset: 2 }}>
          {responses[0] && medStreamRes[2] ? (
            <>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
              <StepCard
                background={PrimaryGradient[6]}
                height="10vh"
                cursor={false}
              >
                <Heading
                  type="h1"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                  lineHeight="4vh"
                  align="center"
                >
                  Step 6: Continue medication for 6+ months; reduce intensity &
                  frequency of visits; relapse prevention plan
                </Heading>
              </StepCard>
            </>
          ) : responses[0] && !medStreamRes[2] && medStreamRes[1] ? (
            <>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="arrow_d"
                color={PrimaryColor}
              />
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
                  Step 6: Team Review & Treatment Change
                </Heading>
              </StepCard>
            </>
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
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
