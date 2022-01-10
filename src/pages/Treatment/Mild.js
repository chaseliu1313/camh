import React, {
  useState,
  lazy,
  Suspense,
  useCallback,
  useContext,
} from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import StepCard from '../../components/Cards/StepCard';
import { Row as R, Col as C } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import Button from '../../components/Buttons/Buttons';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import bg from '../../resource/path_bg.svg';
import { TreatmentContext } from '../../store/store';
import { useWindowResize } from '../../hooks/useWindowResize';
import {
  fontSize,
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Blu,
  SecondaryColor_Tel,
} from '../../theme/resource';
import {
  UPDATE_MILD_TREATMENT,
  RESET_MILD_TREATMENT,
  SET_MILD_CLICKED,
  SET_SEVERE_CLICKED,
} from '../../store/actions';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationModal } from '../../components/NotificationModal';
import { useHistory } from 'react-router-dom';
import SurveySnackBar from './SurveySnack';

const TreatmentModal = lazy(() => import('./TreatmentModal'));

const Mild = () => {
  const [showModal, setShowModal] = useState(false);
  const { size } = useWindowResize();
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const lineHeight_sm = '5vh';
  const lineHeight_lg = '12vh';
  const { state, dispatch } = useContext(TreatmentContext);
  const responses = state.mildState;
  const [showNotification, setShowNotification] = useState(false);

  const handleClicked = useCallback(
    (index) => {
      const updatedClickState = [...state.mildClickState];
      const updatedServerClickState = [...state.severeClickState];

      updatedClickState[index] = false;

      if (index === 0) {
        updatedServerClickState[0] = false;
        dispatch({
          type: SET_SEVERE_CLICKED,
          payload: updatedServerClickState,
        });
      }

      dispatch({ type: SET_MILD_CLICKED, payload: updatedClickState });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.mildClickState, dispatch]
  );

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
          history.push('/treatment/psychotherapy_mild');
          dispatch({ type: UPDATE_MILD_TREATMENT, payload: false });
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
          setShowNotification(true);
          break;
        default:
          break;
      }
    },
    [setShowModal, setIndex, history, dispatch]
  );

  return (
    <Container
      id="treatment_mild_container"
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
            onClick={() => dispatch({ type: RESET_MILD_TREATMENT })}
          >
            <FontAwesomeIcon
              icon={faRedoAlt}
              style={{ height: 12, marginRight: 2 }}
            />
            <Paragraph size={fontSize.subtext} color={SecondaryColor_Tel}>
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
            showBadge={state.mildClickState[0] ? 'true' : 'false'}
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
            showBadge={state.mildClickState[1] ? 'true' : 'false'}
            onClick={() => {
              handleClicked(1);
              handleResponse(2);
            }}
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
                showBadge={state.mildClickState[2] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(4);
                  handleClicked(2);
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

            <SubContainer>
              <SubText weight="bold">No response</SubText>
              <StepCard
                background={PrimaryColor}
                height={lineHeight_lg}
                width="30vw"
                cursor
                showBadge={state.mildClickState[3] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(3);
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
                <SubText weight="bold">No response</SubText>
                <StepCard
                  background={PrimaryColor}
                  height={lineHeight_sm}
                  width="100%"
                  cursor
                  showBadge={state.mildClickState[4] ? 'true' : 'false'}
                  onClick={() => {
                    handleResponse(1);
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
                showBadge={state.mildClickState[5] ? 'true' : 'false'}
                onClick={() => {
                  handleResponse(5);
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
                  showBadge={state.mildClickState[6] ? 'true' : 'false'}
                  onClick={() => {
                    handleResponse(4);
                    handleClicked(6);
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
      <Row>
        <C xs lg="2"></C>
        <CenterCol md={{ span: 8, offset: 1 }}>
          <NaviBtnGroup
            backLink="/assessment"
            forwardLink="/treatment/severe"
          />
        </CenterCol>
      </Row>
      <NotificationModal
        isShow={showNotification}
        setShow={setShowNotification}
        dispatch={history}
        type={UPDATE_MILD_TREATMENT}
        heading="Notice"
        content="If there has been no response, consider the moderate to severe pathway and refer youth to specialized youth mental health services. You will now be taken to the beginning of the moderate to severe pathway."
      />

      <SurveySnackBar />
      <img src={bg} id="treatment_bg" alt="background" />
    </Container>
  );
};

export default Mild;

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
