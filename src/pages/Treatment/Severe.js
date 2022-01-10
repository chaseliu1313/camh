import React, {
  useState,
  lazy,
  Suspense,
  useCallback,
  useContext,
} from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import StepCard from '../../components/Cards/StepCard';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import { Row as R, Col as C } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import { TreatmentContext } from '../../store/store';
import {
  UPDATE_SEVERE_TREATMENT,
  RESET_SEVERE_TREATMENT,
  SET_SEVERE_CLICKED,
  SET_MILD_CLICKED,
} from '../../store/actions';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../../resource/path_bg.svg';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Blu,
  SecondaryColor_Tel,
} from '../../theme/resource';
import { useHistory } from 'react-router-dom';
import { NotificationModal } from '../../components/NotificationModal';
import { useWindowResize } from '../../hooks/useWindowResize';
import SurveySnackBar from './SurveySnack';
const TreatmentModal = lazy(() => import('./TreatmentModal'));
const Severe = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const { size } = useWindowResize();
  const { state, dispatch } = useContext(TreatmentContext);
  const history = useHistory();
  const lineHeight_sm = '5vh';
  const lineHeight_lg = '12vh';
  const responses = state.severState;

  const handleClicked = useCallback(
    (index) => {
      const updatedClickState = [...state.severeClickState];
      const updatedMildClickState = [...state.mildClickState];
      updatedClickState[index] = false;

      if (index === 0) {
        updatedMildClickState[0] = false;
        dispatch({
          type: SET_MILD_CLICKED,
          payload: updatedMildClickState,
        });
      }

      dispatch({ type: SET_SEVERE_CLICKED, payload: updatedClickState });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.severeClickState, dispatch]
  );

  const handleResponse = useCallback(
    (index) => {
      switch (index) {
        case 0:
          history.push('/treatment/psycosocialStrategies');
          dispatch({
            type: UPDATE_SEVERE_TREATMENT,
            payload: [null, null, null, null, null, null, null, null],
          });
          break;
        case 1:
          history.push('/treatment/psychotherapy');
          dispatch({
            type: UPDATE_SEVERE_TREATMENT,
            payload: [null, false, null, null, null, true, null, null],
          });
          break;
        case 2:
          if (responses[0]) {
            dispatch({
              type: UPDATE_SEVERE_TREATMENT,
              payload: [false, false, null, null, null, false, null, null],
            });
          } else {
            dispatch({
              type: UPDATE_SEVERE_TREATMENT,
              payload: [true, false, null, null, null, false, null, null],
            });
          }
          break;
        case 3:
          if (responses[1]) {
            dispatch({
              type: UPDATE_SEVERE_TREATMENT,
              payload: [true, false, null, null, null, null, null, null],
            });
          } else {
            dispatch({
              type: UPDATE_SEVERE_TREATMENT,
              payload: [true, true, null, null, null, null, null, null],
            });
          }
          break;
        case 4:
          setShowModal(true);
          setIndex(1);
          break;
        case 5:
          setShowModal(true);
          setIndex(2);
          break;
        case 6:
          setShowModal(true);
          setIndex(3);
          break;
        case 7:
          setShowModal(true);
          setIndex(4);
          break;
        case 8:
          setShowModal(true);
          setIndex(5);
          break;
        case 9:
          history.push('/treatment/psychotherapy');
          break;
        case 10:
          dispatch({
            type: UPDATE_SEVERE_TREATMENT,
            payload: [null, false, null, null, null, true, true, false, null],
          });

          break;
        case 11:
          dispatch({
            type: UPDATE_SEVERE_TREATMENT,
            payload: [null, false, null, null, null, true, false, true, null],
          });

          break;
        case 12:
          dispatch({
            type: UPDATE_SEVERE_TREATMENT,
            payload: [null, false, null, null, null, true, true, false, true],
          });

          break;
        case 13:
          setShowNotification(true);
          break;
        default:
          break;
      }
    },
    [setShowModal, setIndex, history, responses, dispatch]
  );

  return (
    <Container
      id="treatment_sever_container"
      height={size.height <= 1024 ? '65%' : '100%'}
      overflow={size.height <= 1024 ? 'auto' : 'hidden'}
    >
      <Suspense fallback={<Loading loading="true" />}>
        <TreatmentModal
          show={showModal}
          onClose={setShowModal}
          index={index}
          key={index}
        />
      </Suspense>
      <Row className="p_row">
        <C xs lg="2">
          <Button
            primary={false}
            type="outlined"
            height="5vmin"
            width="5vw"
            display
            onClick={() => dispatch({ type: RESET_SEVERE_TREATMENT })}
          >
            <FontAwesomeIcon
              icon={faRedoAlt}
              style={{ height: 12, marginRight: 2 }}
            />
            <Paragraph size="2vmin" color={SecondaryColor_Tel}>
              Reset
            </Paragraph>
          </Button>
        </C>
        <CenterCol md={{ span: 8, offset: 1 }}>
          <SubContainer>
            <Heading
              type="h1"
              weight="bold"
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
              {
                //state.severState[1] !== null || state.severState[0] === null

                'Consider referral to or consultation with youth mental health specialist'
              }
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
            showBadge={state.severeClickState[0] ? 'true' : 'false'}
            onClick={() => {
              handleResponse(0);
              handleClicked(0);
            }}
          >
            <Heading
              type="h4"
              weight="normal"
              size="3vmin"
              color="white"
              align="center"
            >
              {'Lifestyle Advice & Psychosocial Strategies'}
            </Heading>
          </StepCard>
        </CenterCol>
      </Row>
      <Row className="short_row">
        <CenterCol md={{ span: 4, offset: 5 }}>
          <SubText weight="bold">+</SubText>
        </CenterCol>
      </Row>
      {!responses[0] && !responses[5] ? (
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
            <SubContainer>
              <SubText weight="bold">Not agreeable to medication</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                cursor
                width="30vw"
                showBadge={state.severeClickState[1] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(1);
                  handleClicked(1);
                }}
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
                showBadge={state.severeClickState[2] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(2);
                  handleClicked(2);
                }}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Medication + Psychotherapy
                </Heading>
              </StepCard>
            </SubContainer>
          </CenterCol>
        </Row>
      ) : !responses[0] && responses[5] ? (
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
                Step 2
              </Heading>
            </C>
            <CenterCol md={{ span: 8, offset: 1 }}>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_sm}
                width="90%"
                cursor
                showBadge={state.severeClickState[3] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(9);
                  handleClicked(3);
                }}
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
              <StepCard
                background={PrimaryColor}
                height={lineHeight_sm}
                width="90%"
                cursor
                showBadge={state.severeClickState[4] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(5);
                  handleClicked(4);
                }}
              >
                <Heading
                  type="h4"
                  weight="normal"
                  size="3vmin"
                  color="white"
                  align="center"
                >
                  Check response after 4-6 weeks
                </Heading>
              </StepCard>
            </CenterCol>
          </Row>
          {!responses[6] && !responses[7] ? (
            <>
              {' '}
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
                  <SubContainer>
                    <SubText weight="bold">Response</SubText>
                    <StepCard
                      background={PrimaryColor}
                      height={lineHeight_lg}
                      cursor
                      width="30vw"
                      showBadge={state.severeClickState[5] ? 'true' : 'false'}
                      onClick={() => {
                        handleResponse(10);
                        handleClicked(5);
                      }}
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
                      showBadge={state.severeClickState[6] ? 'true' : 'false'}
                      onClick={() => {
                        handleResponse(11);
                        handleClicked(6);
                      }}
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
            </>
          ) : responses[6] && !responses[7] ? (
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
                    Step 4
                  </Heading>
                </C>
                <CenterCol md={{ span: 8, offset: 1 }}>
                  <SubContainer>
                    <SubText weight="bold">Response</SubText>
                    <StepCard
                      background={PrimaryColor}
                      height={lineHeight_sm}
                      width="100%"
                      cursor={false}
                      onClick={() => null}
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
                  <StepCard
                    background={PrimaryColor}
                    height={lineHeight_sm}
                    width="90%"
                    cursor
                    showBadge={state.severeClickState[7] ? 'true' : 'false'}
                    onClick={() => {
                      handleResponse(6);
                      handleClicked(7);
                    }}
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
              {responses[8] ? (
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
                      Step 6
                    </Heading>
                  </C>
                  <CenterCol md={{ span: 8, offset: 1 }}>
                    <SubContainer>
                      <SubText weight="bold">No response</SubText>
                      <StepCard
                        background={PrimaryColor}
                        height={lineHeight_sm}
                        width="100%"
                        cursor
                        showBadge={state.severeClickState[8] ? 'true' : 'false'}
                        onClick={() => {
                          handleResponse(13);
                          handleClicked(8);
                        }}
                      >
                        <Heading
                          type="h4"
                          weight="normal"
                          size="3vmin"
                          color="white"
                          align="center"
                        >
                          Change psychotherapy or add fluoxetine
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
                      size="3vmin"
                      color={SecondaryColor_Blk}
                      align="end"
                      lineHeight={lineHeight_sm}
                      weight="bold"
                      className="treatment_steps"
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
                        showBadge={state.severeClickState[9] ? 'true' : 'false'}
                        onClick={() => {
                          handleResponse(7);
                          handleClicked(9);
                        }}
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
                    <SubText weight="bold">OR</SubText>
                    <SubContainer>
                      <SubText weight="bold">No response</SubText>
                      <StepCard
                        background={PrimaryColor}
                        height={lineHeight_lg}
                        width="30vw"
                        cursor
                        showBadge={
                          state.severeClickState[10] ? 'true' : 'false'
                        }
                        onClick={() => {
                          handleResponse(12);
                          handleClicked(10);
                        }}
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
              )}
            </>
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
                    Step 4
                  </Heading>
                </C>
                <CenterCol md={{ span: 8, offset: 1 }}>
                  <SubContainer>
                    <SubText weight="bold">No response</SubText>
                    <StepCard
                      background={PrimaryColor}
                      height={lineHeight_sm}
                      width="100%"
                      cursor
                      showBadge={state.severeClickState[11] ? 'true' : 'false'}
                      onClick={() => {
                        handleResponse(13);
                        handleClicked(11);
                      }}
                    >
                      <Heading
                        type="h4"
                        weight="normal"
                        size="3vmin"
                        color="white"
                        align="center"
                      >
                        Change psychotherapy or add medication
                      </Heading>
                    </StepCard>
                  </SubContainer>
                </CenterCol>
              </Row>
            </>
          )}
        </>
      ) : responses[0] && !responses[5] ? (
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
              cursor
              width="30vw"
              showBadge={state.severeClickState[12] ? 'true' : 'false'}
              onClick={() => {
                handleResponse(4);
                handleClicked(12);
              }}
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Medication
              </Heading>
            </StepCard>
            <SubText weight="bold">+</SubText>
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="30vw"
              cursor
              showBadge={state.severeClickState[13] ? 'true' : 'false'}
              onClick={() => {
                handleResponse(9);
                handleClicked(13);
              }}
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
      ) : null}

      {responses[0] ? (
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
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="90%"
              cursor
              showBadge={state.severeClickState[14] ? 'true' : 'false'}
              onClick={() => {
                handleResponse(5);
                handleClicked(14);
              }}
            >
              <Heading
                type="h4"
                weight="normal"
                size="3vmin"
                color="white"
                align="center"
              >
                Check response after 4-6 weeks
              </Heading>
            </StepCard>
          </CenterCol>
        </Row>
      ) : (
        ''
      )}
      {responses[0] && !responses[1] ? (
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
            <SubContainer>
              <SubText weight="bold">Response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                cursor
                width="30vw"
                showBadge={state.severeClickState[15] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(3);
                  handleClicked(15);
                }}
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
                showBadge={state.severeClickState[16] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(8);
                  handleClicked(16);
                }}
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
            <SubContainer>
              <SubText weight="bold">Response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_sm}
                width="100%"
                cursor={false}
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
            <StepCard
              background={PrimaryColor}
              height={lineHeight_sm}
              width="90%"
              cursor
              showBadge={state.severeClickState[17] ? 'true' : 'false'}
              onClick={() => {
                handleResponse(6);
                handleClicked(17);
              }}
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
              size="3vmin"
              color={SecondaryColor_Blk}
              align="end"
              lineHeight={lineHeight_sm}
              weight="bold"
              className="treatment_steps"
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
                showBadge={state.severeClickState[18] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(7);
                  handleClicked(18);
                }}
              >
                <Heading
                  type="p"
                  weight="normal"
                  size="2.2vmin"
                  color="white"
                  align="center"
                >
                  ·Continue medication for 6+ months
                </Heading>
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
            <SubText weight="bold">OR</SubText>
            <SubContainer>
              <SubText weight="bold">No response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
                showBadge={state.severeClickState[19] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(8);
                  handleClicked(19);
                }}
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
      <Row>
        <C xs lg="2"></C>
        <CenterCol md={{ span: 8, offset: 1 }}>
          <NaviBtnGroup
            backLink="/treatment/mild"
            forwardLink="/resources/tools/video"
          />
        </CenterCol>
      </Row>
      <NotificationModal
        isShow={showNotification}
        setShow={setShowNotification}
        dispatch={dispatch}
        type={UPDATE_SEVERE_TREATMENT}
        heading="Notice"
        content="If there has been no response, consider the moderate to severe pathway and refer youth to specialized youth mental health services. You will now be taken to the beginning of the moderate to severe pathway."
      />
      <SurveySnackBar />
      <img src={bg} id="treatment_bg" alt="background" />
    </Container>
  );
};

export default Severe;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  overflow-x: hidden;
  ${({ height, overflow }) => `
  overflow-y: ${overflow};
   height: ${height};
  `}
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
