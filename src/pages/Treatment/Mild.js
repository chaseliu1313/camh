import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import StepCard from '../../components/Cards/StepCard';
import { Row as R, Col as C } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from '../../components/Loading';

import bg from '../../resource/path_bg.svg';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Blu,
} from '../../theme/resource';
import { useHistory } from 'react-router-dom';

const TreatmentModal = lazy(() => import('./TreatmentModal'));

const Mild = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const lineHeight_sm = '5vh';
  const lineHeight_lg = '12vh';
  const [responses, setRes] = useState(true);

  const handleResponse = useCallback(
    (index) => {
      switch (index) {
        case 0:
          history.push('/treatment/psycosocialStrategies');
          break;
        case 1:
          history.push('/treatment/psychotherapy_mild');
          break;
        case 2:
          setShowModal(true);
          setIndex(6);
          break;
        case 3:
          setRes(false);
          break;
        case 4:
          setShowModal(true);
          setIndex(7);
          break;
        case 5:
          setShowModal(true);
          setIndex(8);
          break;
        case 6:
          history.push('/treatment/severe');
          break;
        default:
          break;
      }
    },
    [index, setShowModal, setIndex]
  );

  return (
    <Container id="treatment_mild_container">
      <Suspense fallback={<Loading loading="true" />}>
        <TreatmentModal
          show={showModal}
          onClose={setShowModal}
          index={index}
          key={index}
        />
      </Suspense>
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
              Mild Depression Pathway
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
            size="3vmin"
            color={SecondaryColor_Blk}
            align="end"
            lineHeight={lineHeight_sm}
            weight="bold"
            className="treatment_steps"
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
      <Row className="p_row">
        <C xs lg="2">
          <Heading
            type="h4"
            size="3vmin"
            color={SecondaryColor_Blk}
            align="end"
            lineHeight={lineHeight_sm}
            weight="bold"
            className="treatment_steps"
          >
            Step 2
          </Heading>
        </C>
        <CenterCol md={{ span: 8, offset: 1 }}>
          <StepCard
            background={PrimaryColor}
            height={lineHeight_sm}
            width="90%"
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
              Check response after 2 weeks
            </Heading>
          </StepCard>
        </CenterCol>
      </Row>
      {responses ? (
        <Row className="p_row">
          <C xs lg="2">
            <Heading
              type="h4"
              size="3vmin"
              color={SecondaryColor_Blk}
              align="end"
              lineHeight={lineHeight_sm}
              weight="bold"
              className="treatment_steps"
            >
              Step 3
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
                flex="column"
                onClick={() => handleResponse(4)}
              >
                <Heading
                  type="p"
                  weight="normal"
                  size="2.2vmin"
                  color="white"
                  align="center"
                >
                  ·Relapse prevention plan
                </Heading>
                <Heading
                  type="p"
                  weight="normal"
                  size="2.2vmin"
                  color="white"
                  align="center"
                >
                  ·Reduce intensity & frequency of visits
                </Heading>
              </StepCard>
            </SubContainer>

            <SubContainer>
              <SubText weight="bold">No Response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
                onClick={() => handleResponse(3)}
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
          </CenterCol>
        </Row>
      ) : (
        <>
          <Row className="p_row">
            <C xs lg="2">
              <Heading
                type="h4"
                size="3vmin"
                color={SecondaryColor_Blk}
                align="end"
                lineHeight={lineHeight_sm}
                weight="bold"
                className="treatment_steps"
              >
                Step 3
              </Heading>
            </C>
            <CenterCol md={{ span: 8, offset: 1 }}>
              <SubContainer>
                <SubText weight="bold">No Response</SubText>
                <StepCard
                  background={PrimaryColor}
                  height={lineHeight_sm}
                  width="100%"
                  cursor
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
            </CenterCol>
          </Row>
          <Row className="p_row">
            <C xs lg="2">
              <Heading
                type="h4"
                size="3vmin"
                color={SecondaryColor_Blk}
                align="end"
                lineHeight={lineHeight_sm}
                weight="bold"
                className="treatment_steps"
              >
                Step 4
              </Heading>
            </C>
            <CenterCol md={{ span: 8, offset: 1 }}>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_sm}
                width="90%"
                cursor
                onClick={() => handleResponse(5)}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Check response after 2 to 3 months
                </Heading>
              </StepCard>
            </CenterCol>
          </Row>
          <Row className="p_row">
            <C xs lg="2">
              <Heading
                type="h4"
                size="3vmin"
                color={SecondaryColor_Blk}
                align="end"
                lineHeight={lineHeight_sm}
                weight="bold"
                className="treatment_steps"
              >
                Step 5
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
                  flex="column"
                  onClick={() => handleResponse(4)}
                >
                  <Heading
                    type="p"
                    weight="normal"
                    size="2.2vmin"
                    color="white"
                    align="center"
                  >
                    ·Relapse prevention plan
                  </Heading>
                  <Heading
                    type="p"
                    weight="normal"
                    size="2.2vmin"
                    color="white"
                    align="center"
                  >
                    ·Reduce intensity & frequency of visits
                  </Heading>
                </StepCard>
              </SubContainer>

              <SubContainer>
                <SubText weight="bold">No response</SubText>
                <StepCard
                  background={PrimaryColor}
                  height={lineHeight_lg}
                  width="30vw"
                  cursor
                  onClick={() => handleResponse(6)}
                >
                  <Heading
                    type="h4"
                    weight="normal"
                    size="3vmin"
                    color="white"
                    align="center"
                  >
                    Moderate/Severe depression pathway
                  </Heading>
                </StepCard>
              </SubContainer>
            </CenterCol>
          </Row>
        </>
      )}
      <img src={bg} id="treatment_bg" alt="background" />
    </Container>
  );
};

export default Mild;

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
  width: 90%;
`;

const Row = styled(R)``;
