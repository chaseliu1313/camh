import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import { Switch, Route, useLocation } from 'react-router-dom';
import {
  SecondaryColor_Blk,
  BackgroundColor,
  fontSize,
  PrimaryColor,
} from '../../theme/resource';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import ToolLayout, { VideoLayout } from './toolLayout';
import CR from '../../resource/CognitiveRestructuring.png';
import MH from '../../resource/MedicationHandout.png';
import MF from '../../resource/MoodFoundations.png';
import PS from '../../resource/ProblemSolving.png';
import SpecialPo from '../../resource/specialPo.png';
import RCADS from '../../resource/RCADSIntro.png';
import ReactPlayer from 'react-player';
import { ToolVideo1, ToolVideo2 } from '../../resource/content';
import { useToolsPath } from '../../hooks/useToolsPath';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import ToolsVideo from './toolsVideo';
import './resources.css';
import { useWindowResize } from '../../hooks/useWindowResize';
import { useHistory } from 'react-router-dom';

const ReTools = ({ match }) => {
  const { path, getPath, getHeading } = useToolsPath();
  const location = useLocation().pathname;

  const { size } = useWindowResize();

  useEffect(() => {
    getPath(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Container>
      <Row size={size}>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <Heading
            size="5vmin"
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            {getHeading(location)}
          </Heading>
        </CenterCol>
      </Row>
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => <Catalogue size={size} />}
        />

        <Route
          exact
          path={match.path + '/psychoeducation'}
          render={() => (
            <ToolLayout>
              <LeftCol size={size}>
                <IMG
                  src={MF}
                  alt="Mood Foundations Depression Fact Sheet"
                  size={size}
                />
              </LeftCol>
              <RightCol size={size}>
                <RightCard position="center" size={size}>
                  <Heading
                    size={size.width <= 1024 ? '18px' : '3vmin'}
                    weight="bold"
                    align="center"
                    color={SecondaryColor_Blk}
                    margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
                  >
                    Mood Foundations Package for Youth
                  </Heading>
                  <Paragraph
                    color={SecondaryColor_Blk}
                    margin={size.width <= 1024 ? 0 : '0 0 25px 0'}
                    size={size.width <= 1024 ? '16px' : fontSize.p}
                  >
                    Fact sheet on depression; tips on sleep, exercise and
                    healthy eating. Co-developed by youth, for youth. Free to
                    download and print.
                  </Paragraph>
                  <a
                    href="https://www.camh.ca/-/media/files/mood-foundations-package-youth-pdf.pdf"
                    target="_blank"
                    download
                    rel="noopener noreferrer"
                  >
                    <Button
                      primary={false}
                      height="5vh"
                      width="20vw"
                      display
                      margin={size.height < 800 ? 0 : '25% 0 0 25%'}
                    >
                      <Paragraph
                        size={
                          size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'
                        }
                        color="white"
                      >
                        Download
                      </Paragraph>
                    </Button>
                  </a>
                </RightCard>
              </RightCol>
            </ToolLayout>
          )}
        />
        <Route
          exact
          path={match.path + '/video'}
          render={() => (
            <ToolsVideo
              title="Short Animated Videos for Youth"
              videoContent={ToolVideo1}
            />
          )}
        />
        <Route
          exact
          path={match.path + '/medhandout'}
          render={() => <MedicalHandout size={size} />}
        />
        <Route
          exact
          path={match.path + '/problemSolvingVideo'}
          render={() => <NewToolVideo size={size} />}
        />
        <Route
          exact
          path={match.path + '/problemSolving'}
          render={() => <ProblemSolving size={size} />}
        />
        <Route
          exact
          path={match.path + '/cognitive'}
          render={() => <CognitiveRes size={size} />}
        />
        <Route
          exact
          path={match.path + '/assessment/animateVideos'}
          render={() => (
            <ToolsVideo
              title="Short Animated Videos for Primary Care Providers"
              videoContent={ToolVideo2}
            />
          )}
        />
        <Route
          exact
          path={match.path + '/assessment/RCADS'}
          render={() => <IntroRCADS size={size} />}
        />
        <Route
          exact
          path={match.path + '/assessment'}
          render={() => <AssessmentTools size={size} />}
        />
        <Route
          exact
          path={match.path + '/specialPopulation'}
          render={() => <SpecialPopulations size={size} />}
        />
      </Switch>
      {/* <Row style={{ height: 30 }}<LeftCol> id="page_inde_row">
        <CenterCol md={{ span: 10, offset: 1 }}>
          <PageIndicator routes={routes.slice(1)} titles={headings} />
        </CenterCol>
      </Row> */}
      <Row id="btn_group_row">
        <CenterCol md={{ span: 10, offset: 1 }}>
          <NaviBtnGroup backLink={path[0]} forwardLink={path[1]} />
        </CenterCol>
      </Row>
    </Container>
  );
};

const Catalogue = ({ size }) => {
  const history = useHistory();

  return (
    <CatelogueOuterContainer
      style={{
        paddingBottom: size.height <= 900 ? '35%' : '10%',
      }}
    >
      <div style={{ width: '85%' }}>
        <Heading
          size={size.width <= 800 ? '18px' : '24px'}
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
        >
          The Cundill Centre for Child and Youth Depression, in partnership with
          youth, clinicians, and scientists, has developed practical tools to
          support young people, primary care providers, and other frontline
          clinicians. Visit our{' '}
          <a
            className="ov_a"
            href="https://www.camh.ca/en/science-and-research/institutes-and-centres/cundill-centre-for-child-and-youth-depression/innovations-in-clinical-care"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>{' '}
          to download additional resources.
        </Heading>
      </div>
      <div
        style={{
          height: '85%',
          width: '95%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '2% 0',
        }}
      >
        <div
          id="psychoeducational tools"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CatelogueContainer size={size}>
            <Paragraph size="18px" weight="bold" margin={0}>
              Psychoeducational Tools
            </Paragraph>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video- Mood Matters: Describing Depression
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/video');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video- Mood Matters: How Food, Movement & Sleep Can Have an Impact
              on You
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/video');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Mood Foundations Package for Youth
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/psychoeducation');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
        </div>
        <div
          id="assessment tools"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CatelogueContainer size={size}>
            <Paragraph size="18px" weight="bold" margin={0}>
              Assessment Tools for Primary Care Providers
            </Paragraph>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video- Monitoring Mental Health: Using measurement tools to inform
              care for youth
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/assessment/animateVideos');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video- Monitoring Mental Health: Using the Revised Children’s
              Anxiety and Depression Scale
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/assessment/animateVideos');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video: Assessing for Depression in a Virtual Primary Care
              Appointment with a Young Person
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                window.open(
                  'https://www.youtube.com/watch?v=NRKvtacOVfw&ab_channel=CAMH',
                  '_blank'
                );
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Quick Guide to the Revised Children’s Anxiety and Depression Scale
              (RCADS)
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/assessment/RCADS');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0} lineHeight={1.05}>
              Assessment Tools: - Mood and Feelings Questionnaire - Revised
              Children’s Anxiety and Depression - Scale (ICHOM Standard Set for
              Children & Young People with Depression and Anxiety
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/assessment');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
        </div>
        <div
          id="treatmentTools"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CatelogueContainer size={size}>
            <Paragraph size="18px" weight="bold" margin={0}>
              Treatment Tools
            </Paragraph>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Medication Handout for Youth
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/medhandout');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              smart_display
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Video: How can problem solving help youth with depression?
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/problemSolvingVideo');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Problem Solving Worksheets
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/problemSolving');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Cognitive Restructuring Worksheets
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/cognitive');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
        </div>
        <div
          id="special populations"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CatelogueContainer size={size}>
            <Paragraph size="18px" weight="bold" margin={0}>
              Special Populations and Considerations
            </Paragraph>
          </CatelogueContainer>

          <CatelogueContainer size={size}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: 20 }}
            >
              description
            </span>
            <Paragraph size="18px" weight="light" margin={0}>
              Autism and Depression Package
            </Paragraph>
            <div
              style={{
                backgroundColor: PrimaryColor,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 'auto',
              }}
              onClick={() => {
                history.push('/resources/tools/specialPopulation');
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                navigate_next
              </span>
            </div>
          </CatelogueContainer>
        </div>
      </div>
    </CatelogueOuterContainer>
  );
};

const MedicalHandout = ({ size }) => {
  return (
    <ToolLayout>
      <LeftCol size={size}>
        <a
          href="https://www.camh.ca/-/media/files/medication-for-youth-resource-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={MH} alt="Medication Handout for Youth" size={size} />
        </a>
      </LeftCol>
      <RightCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
          >
            Medication Handout for Youth
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            Explains, in simple language, what SSRIs are, when youth might see
            benefits and what side effects, if any, can occur. Developed by
            youth in partnership with a psychiatrist and pharmacist. Free to
            download and print.
          </Paragraph>
          <a
            href="https://www.camh.ca/-/media/files/medication-for-youth-resource-pdf.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Button
              primary={false}
              height="5vh"
              width="20vw"
              display
              margin={size.width <= 1024 ? '0' : '"25% 0 0 25%"'}
            >
              <Paragraph
                size={size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'}
                color="white"
              >
                Download
              </Paragraph>
            </Button>
          </a>
        </RightCard>
      </RightCol>
    </ToolLayout>
  );
};

const ProblemSolving = ({ size }) => {
  return (
    <ToolLayout>
      <LeftCol size={size}>
        <a
          href="https://www.camh.ca/-/media/files/problem-solving-worksheets-youth-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={PS} alt="Problem Solving Worksheets" size={size} />
        </a>
      </LeftCol>
      <RightCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            weight="bold"
            align="center"
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            color={SecondaryColor_Blk}
          >
            Problem Solving Worksheets
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            Helps youth think through their problems by prompting them to
            describe the situation, emotions and needs. Co-developed by youth,
            for health care providers. Free to download and print.
          </Paragraph>
          <a
            href="https://www.camh.ca/-/media/files/problem-solving-worksheets-youth-pdf.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Button
              primary={false}
              height="5vh"
              width="20vw"
              display
              margin={size.width <= 1024 ? '0' : '"25% 0 0 25%"'}
            >
              <Paragraph
                size={size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'}
                color="white"
              >
                Download
              </Paragraph>
            </Button>
          </a>
        </RightCard>
      </RightCol>
    </ToolLayout>
  );
};

const NewToolVideo = ({ size }) => {
  return (
    <VideoLayout>
      <VideoPanel>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=DWHyJ4Q77Ws"
          playing={false}
          controls={true}
          width="95%"
        />
      </VideoPanel>
      <RightVideoCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            How can problem solving help youth with depression?
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            This video for youth describes how problem solving can be one
            important ingredient in tackling depression.
          </Paragraph>
        </RightCard>
      </RightVideoCol>
    </VideoLayout>
  );
};

const CognitiveRes = ({ size }) => {
  return (
    <ToolLayout>
      <LeftCol size={size}>
        <a
          href="https://www.camh.ca/-/media/files/cognitive-restructuring-worksheets-youth-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={CR} alt="Cognitive Restructuring Worksheets" size={size} />
        </a>
      </LeftCol>
      <RightCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
          >
            Cognitive Restructuring Worksheets
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            Helps youth examine thoughts that may not be helpful to them.
            Co-developed by youth, for health care providers. Free to download
            and print.
          </Paragraph>
          <a
            href="https://www.camh.ca/-/media/files/cognitive-restructuring-worksheets-youth-pdf.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Button
              primary={false}
              height="5vh"
              width="20vw"
              display
              margin={size.width <= 1024 ? '0' : '"25% 0 0 25%"'}
            >
              <Paragraph
                size={size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'}
                color="white"
              >
                Download
              </Paragraph>
            </Button>
          </a>
        </RightCard>
      </RightCol>
    </ToolLayout>
  );
};

const IntroRCADS = ({ size }) => {
  console.log(size);

  return (
    <ToolLayout>
      <LeftCol size={size}>
        <a
          href="https://www.camh.ca/-/media/files/rcads-quick-guide-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG
            src={RCADS}
            alt="Quick Guide to the Revised Children’s Anxiety and Depression Scale (RCADS)"
            size={size}
          />
        </a>
      </LeftCol>
      <RightCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            weight="bold"
            align="center"
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            color={SecondaryColor_Blk}
          >
            Quick Guide to the Revised Children’s Anxiety and Depression Scale
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            Learn more about the Revised Children’s Anxiety and Depression Scale
            (RCADS) in our Quick Guide, which outlines how the questionnaire is
            administered and scored. This tool also proposes a way of using
            RCADS scores to calculate indicators of change, such as response,
            remission, recovery, relapse, and recurrence.
          </Paragraph>

          <a
            href="https://www.camh.ca/-/media/files/rcads-quick-guide-pdf.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Button
              primary={false}
              height="5vh"
              width="20vw"
              display
              margin={size.width <= 1024 ? '0' : '"25% 0 0 25%"'}
            >
              <Paragraph
                size={size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'}
                color="white"
              >
                Download
              </Paragraph>
            </Button>
          </a>
        </RightCard>
      </RightCol>
    </ToolLayout>
  );
};
const AssessmentTools = ({ size }) => {
  return (
    <ListRow size={size}>
      <ListGroup horizontal="lg" className="at_list">
        <ListGroup.Item action variant="info">
          <a
            href="https://devepi.duhs.duke.edu/measures/the-mood-and-feelings-questionnaire-mfq/"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Mood and Feelings Questionnaire (MFQ)
            </Paragraph>
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
            Provides a screening measure for depression.
          </Paragraph>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal="lg" className="at_list">
        <ListGroup.Item action variant="info">
          <a
            href="https://www.childfirst.ucla.edu/resources/"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Revised Children’s Anxiety and Depression Scale (RCADS)
            </Paragraph>
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
            Assesses symptoms of anxiety and depression.
          </Paragraph>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal="lg" className="at_list">
        <ListGroup.Item action variant="info">
          <a
            href="https://www.ichom.org/portfolio/anxiety-depression-ocd-and-ptsd-in-children-and-young-people/"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin" align="center">
              ICHOM Standard Set for Children & Young People with Depression &
              Anxiety
            </Paragraph>
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <Paragraph color={SecondaryColor_Blk} size="2.5vmin" align="center">
            Standard set of outcome measures that matter most to children and
            young people with depression and anxiety. Globally recommended.
          </Paragraph>
        </ListGroup.Item>
      </ListGroup>
    </ListRow>
  );
};

const SpecialPopulations = ({ size }) => {
  return (
    <ToolLayout>
      <LeftCol size={size}>
        <a
          href="https://www.camh.ca/-/media/files/cundill-centre/depression-and-autism-full-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG
            src={SpecialPo}
            alt="Special Populations and Considerations"
            size={size}
          />
        </a>
      </LeftCol>
      <RightCol size={size}>
        <RightCard position="center" size={size}>
          <Heading
            size={size.width <= 1024 ? '18px' : '3vmin'}
            weight="bold"
            align="center"
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            color={SecondaryColor_Blk}
          >
            Autism and Depression Package
          </Heading>
          <Paragraph
            color={SecondaryColor_Blk}
            margin={size.width <= 1024 ? '0' : '0 0 25px 0'}
            size={size.width <= 1024 ? `16px` : '3vmin'}
          >
            Fact sheets on autism and depression; includes signs, coping
            strategies, ways to get help, caregiver resources, and
            clinician-specific information. Developed by autistic youth, for
            autistic youth and their supporters. Free to download and print.
          </Paragraph>

          <a
            href="https://www.camh.ca/-/media/files/cundill-centre/depression-and-autism-full-pdf.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <Button
              primary={false}
              height="5vh"
              width="20vw"
              display
              margin="25% 0 0 25%"
            >
              <Paragraph
                size={size.width <= 1024 ? `${fontSize.subtext2}` : '3vmin'}
                color="white"
              >
                Download
              </Paragraph>
            </Button>
          </a>
        </RightCard>
      </RightCol>
    </ToolLayout>
  );
};

export default ReTools;

//animations
const enterAni = keyframes`

0% {
  opacity: 0;
 


}
50%{
  opacity:0.5;
 
}
 
100%{
  opacity:1;
  
}
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 25px;
`;

const Row = styled(R)`
  width: 100%;
  margin: 0;
  padding: 2% 0;
  overflow: hidden;
`;

const ListRow = styled(R)`
  width: 100%;
  padding: 0;
  ${({ size }) =>
    size.width <= 776
      ? `height: 60%; overflow: auto;`
      : `height: auto; overflow: hidden;`}

  margin: 5vmin auto;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  width: auto;
  ${({ size }) =>
    size.width <= 776
      ? `height: ${size.height * 0.3}px;`
      : `height: ${size.height * 0.45}px;`}
`;

const LeftCol = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${({ size }) => (size.width <= 776 ? `height: auto;` : `height: 90%;`)}
`;
const RightCol = styled.div`
  height: 90%;

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  ${({ size }) => (size.width <= 776 ? 'width: 100%;' : '  width: 70%;')}
`;

const RightCard = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 5%;
  ${({ position }) =>
    position === 'center'
      ? `justify-content: center;`
      : `justify-content: flex-start;`}
  ${({ size }) =>
    size.width <= 776 ? `height: auto;` : `height: ${size.height * 0.4}px;`}
  align-items: center;
`;

const RightVideoCol = styled.div`
  height: 90%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ size }) => (size.width <= 776 ? 'width: 100%;' : '  width: 70%;')}
`;

const VideoPanel = styled.div`
  height: 100%;
  width: 100%;
  padding: 1vmin 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CatelogueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 2px 0;
  ${({ size }) => (size.width <= 776 ? ` width: 85%;` : 'width: 55%;')}
`;

const CatelogueOuterContainer = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
`;
