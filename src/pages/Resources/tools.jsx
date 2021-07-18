import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import { Switch, Route, useLocation } from 'react-router-dom';
import {
  SecondaryColor_Blk,
  BackgroundColor,
  fontSize,
} from '../../theme/resource';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import ToolLayout, { VideoLayout } from './toolLayout';
import CR from '../../resource/CognitiveRestructuring.png';
import MH from '../../resource/MedicationHandout.png';
import MF from '../../resource/MoodFoundations.png';
import PS from '../../resource/ProblemSolving.png';
import RCADS from '../../resource/RCADSIntro.png';
import ReactPlayer from 'react-player';
import { ToolVideo1, ToolVideo2 } from '../../resource/content';
import { routes, headings, useToolsPath } from '../../hooks/useToolsPath';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import PageIndicator from '../../components/PageIndicator';
import ToolsVideo from './toolsVideo';
import './resources.css';
import { useWindowResize } from '../../hooks/useWindowResize';

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
      <Row>
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
          render={() => (
            <ToolLayout>
              <div>
                <IMG src={MF} alt="Mood Foundations Depression Fact Sheet" />
              </div>
              <RightCol position="center">
                <Heading
                  size="3vmin"
                  weight="bold"
                  align="center"
                  color={SecondaryColor_Blk}
                  margin={size.height < 800 ? '0' : '0 0 25px 0'}
                >
                  Mood Foundations Package for Youth
                </Heading>
                <Paragraph
                  color={SecondaryColor_Blk}
                  margin={size.height < 800 ? '0' : '0 0 25px 0'}
                >
                  Fact sheet on depression; tips on sleep, exercise and healthy
                  eating. Co-developed by youth, for youth. Free to download and
                  print.
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
                    margin={size.height < 800 ? '0' : '25% 0 0 25%'}
                  >
                    <Paragraph
                      size={
                        size.height < 800
                          ? `${fontSize.subtext} !important`
                          : '3vmin'
                      }
                      color="white"
                    >
                      Download
                    </Paragraph>
                  </Button>
                </a>
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
          render={() => MedicalHandout(size)}
        />
        <Route
          exact
          path={match.path + '/problemSolvingVideo'}
          render={() => NewToolVideo(size)}
        />
        <Route
          exact
          path={match.path + '/problemSolving'}
          render={() => ProblemSolving(size)}
        />
        <Route
          exact
          path={match.path + '/cognitive'}
          render={() => CognitiveRes(size)}
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
          render={() => IntroRCADS(size)}
        />
        <Route
          exact
          path={match.path + '/assessment'}
          render={() => AssessmentTools(size)}
        />
      </Switch>
      <Row style={{ height: 30 }} id="page_inde_row">
        <CenterCol md={{ span: 10, offset: 1 }}>
          <PageIndicator routes={routes.slice(1)} titles={headings} />
        </CenterCol>
      </Row>
      <Row id="btn_group_row">
        <CenterCol md={{ span: 10, offset: 1 }}>
          <NaviBtnGroup backLink={path[0]} forwardLink={path[1]} />
        </CenterCol>
      </Row>
    </Container>
  );
};

const MedicalHandout = (size) => {
  return (
    <ToolLayout>
      <div>
        <a
          href="https://www.camh.ca/-/media/files/medication-for-youth-resource-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={MH} alt="Medication Handout for Youth" />
        </a>
      </div>
      <RightCol position="center">
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Medication Handout for Youth
        </Heading>
        <Paragraph
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Explains, in simple language, what SSRIs are, when youth might see
          benefits and what side effects, if any, can occur. Developed by youth
          in partnership with a psychiatrist and pharmacist. Free to download
          and print.
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
            margin="25% 0 0 25%"
          >
            <Paragraph
              size={
                size.height < 800 ? `${fontSize.subtext} !important` : '3vmin'
              }
              color="white"
            >
              Download
            </Paragraph>
          </Button>
        </a>
      </RightCol>
    </ToolLayout>
  );
};

const ProblemSolving = (size) => {
  return (
    <ToolLayout>
      <div>
        <a
          href="https://www.camh.ca/-/media/files/problem-solving-worksheets-youth-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={PS} alt="Problem Solving Worksheets" />
        </a>
      </div>
      <RightCol position="center">
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
          color={SecondaryColor_Blk}
        >
          Problem Solving Worksheets
        </Heading>
        <Paragraph
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Helps youth think through their problems by prompting them to describe
          the situation, emotions and needs. Co-developed by youth, for health
          care providers. Free to download and print.
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
            margin="25% 0 0 25%"
          >
            <Paragraph
              size={
                size.height < 800 ? `${fontSize.subtext} !important` : '3vmin'
              }
              color="white"
            >
              Download
            </Paragraph>
          </Button>
        </a>
      </RightCol>
    </ToolLayout>
  );
};

const NewToolVideo = () => {
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
      <RightVideoCol>
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
        >
          How can problem solving help youth with depression?
        </Heading>
        <Paragraph color={SecondaryColor_Blk}>
          This video for youth describes how problem solving can be one
          important ingredient in tackling depression.
        </Paragraph>
      </RightVideoCol>
    </VideoLayout>
  );
};

const CognitiveRes = (size) => {
  return (
    <ToolLayout>
      <div>
        <a
          href="https://www.camh.ca/-/media/files/cognitive-restructuring-worksheets-youth-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG src={CR} alt="Cognitive Restructuring Worksheets" />
        </a>
      </div>
      <RightCol position="center">
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Cognitive Restructuring Worksheets
        </Heading>
        <Paragraph
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Helps youth examine thoughts that may not be helpful to them.
          Co-developed by youth, for health care providers. Free to download and
          print.
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
            margin="25% 0 0 25%"
          >
            <Paragraph
              size={
                size.height < 800 ? `${fontSize.subtext} !important` : '3vmin'
              }
              color="white"
            >
              Download
            </Paragraph>
          </Button>
        </a>
      </RightCol>
    </ToolLayout>
  );
};

const IntroRCADS = (size) => {
  return (
    <ToolLayout>
      <div>
        <a
          href="https://www.camh.ca/-/media/files/rcads-quick-guide-pdf.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          <IMG
            src={RCADS}
            alt="Quick Guide to the Revised Children’s Anxiety and Depression Scale (RCADS)"
          />
        </a>
      </div>
      <RightCol>
        <Heading
          size="2.5vmin"
          weight="bold"
          align="center"
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
          color={SecondaryColor_Blk}
        >
          Quick Guide to the Revised Children’s Anxiety and Depression Scale
        </Heading>
        <Paragraph
          color={SecondaryColor_Blk}
          margin={size.height < 800 ? '0' : '0 0 25px 0'}
        >
          Learn more about the Revised Children’s Anxiety and Depression Scale
          (RCADS) in our Quick Guide, which outlines how the questionnaire is
          administered and scored. This tool also proposes a way of using RCADS
          scores to calculate indicators of change, such as response, remission,
          recovery, relapse, and recurrence.
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
            margin="25% 0 0 25%"
          >
            <Paragraph
              size={
                size.height < 800 ? `${fontSize.subtext} !important` : '3vmin'
              }
              color="white"
            >
              Download
            </Paragraph>
          </Button>
        </a>
      </RightCol>
    </ToolLayout>
  );
};
const AssessmentTools = () => {
  return (
    <ListRow>
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

export default ReTools;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 25px;
`;

const Row = styled(R)`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 7vmin;
`;

const ListRow = styled(R)`
  width: 100%;
  padding: 0;
  overflow: hidden;
  height: auto;
  margin: 5vmin auto;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  height: auto;
  width: 80%;
`;

const RightCol = styled.div`
  height: 90%;
  width: 70%;
  padding: 20px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  ${({ position }) =>
    position === 'center'
      ? `justify-content: center;`
      : `justify-content: flex-start;`}
  align-items: center;
`;

const RightVideoCol = styled.div`
  height: fit-content;
  width: 60%;
  padding: 3vmin;
  margin: auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
