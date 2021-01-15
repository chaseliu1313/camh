import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import { Switch, Route, useLocation } from 'react-router-dom';
import { SecondaryColor_Blk, BackgroundColor } from '../../theme/resource';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import ToolLayout, { VideoLayout } from './toolLayout';
import CR from '../../resource/CognitiveRestructuring.png';
import MH from '../../resource/MedicationHandout.png';
import MF from '../../resource/MoodFoundations.png';
import PS from '../../resource/ProblemSolving.png';
import ReactPlayer from 'react-player';

import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import PageIndicator from '../../components/PageIndicator';
import './resources.css';
const path1 = ['/treatment', '/resources/tools'];
const path2 = ['/resources/tools/video', '/resources/tools/medhandout'];
const path3 = [
  '/resources/tools/video',
  '/resources/tools/problemSolvingVideo',
];
const path4 = [
  '/resources/tools/problemSolvingVideo',
  '/resources/tools/cognitive',
];
const path5 = [
  '/resources/tools/problemSolving',
  '/resources/tools/assessment',
];
const path6 = ['/resources/tools/cognitive', '/resources/help'];
const path7 = [
  '/resources/tools/medhandout',
  '/resources/tools/problemSolving',
];

const routes = [
  '/resources/tools/video',
  '/resources/tools',
  '/resources/tools/medhandout',
  '/resources/tools/problemSolvingVideo',
  '/resources/tools/problemSolving',
  '/resources/tools/cognitive',
  '/resources/tools/assessment',
];
const headings = [
  'Short Animated Videos for Youth',
  'Mood Foundations Package for Youth',
  'Medication Handout for Youth',
  'Problem Solving Worksheets',
  'Cognitive Restructuring Worksheets',
  'Assessment Tools',
];

const ReTools = ({ match }) => {
  const [path, setPath] = useState(['/resources/tools/video', '/treatment']);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/resources/tools') {
      setPath(path2);
    } else if (location === '/resources/tools/video') {
      setPath(path1);
    } else if (location === '/resources/tools/problemSolvingVideo') {
      setPath(path7);
    } else if (location === '/resources/tools/medhandout') {
      setPath(path3);
    } else if (location === '/resources/tools/problemSolving') {
      setPath(path4);
    } else if (location === '/resources/tools/cognitive') {
      setPath(path5);
    } else {
      setPath(path6);
    }
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
            {location === '/resources/tools/assessment'
              ? 'Assessment Tools'
              : location === '/resources/tools' ||
                location === '/resources/tools/video'
              ? 'Cundill Centre Tools - Psychoeducation'
              : 'Cundill Centre Tools - Treatment'}
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
              <RightCol>
                <Heading
                  size="3vmin"
                  weight="bold"
                  align="center"
                  color={SecondaryColor_Blk}
                >
                  Mood Foundations Package for Youth
                </Heading>
                <Paragraph color={SecondaryColor_Blk}>
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
                    height="7vh"
                    width="20vw"
                    display
                    margin="25% 0 0 25%"
                  >
                    <Paragraph size="3vmin" color="white">
                      Download
                    </Paragraph>
                  </Button>
                </a>
              </RightCol>
            </ToolLayout>
          )}
        />
        <Route exact path={match.path + '/video'} render={() => Video()} />
        <Route
          exact
          path={match.path + '/medhandout'}
          render={() => MedicalHandout()}
        />
        <Route
          exact
          path={match.path + '/problemSolvingVideo'}
          render={() => NewToolVideo()}
        />
        <Route
          exact
          path={match.path + '/problemSolving'}
          render={() => ProblemSolving()}
        />
        <Route
          exact
          path={match.path + '/cognitive'}
          render={() => CognitiveRes()}
        />
        <Route
          exact
          path={match.path + '/assessment'}
          render={() => AssessmentTools()}
        />
      </Switch>
      <Row style={{ height: 30 }} id="page_inde_row">
        <CenterCol md={{ span: 10, offset: 1 }}>
          <PageIndicator routes={routes} titles={headings} />
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

const MedicalHandout = () => {
  return (
    <ToolLayout>
      <div>
        <IMG src={MH} alt="Medication Handout for Youth" />
      </div>
      <RightCol>
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
        >
          Medication Handout for Youth
        </Heading>
        <Paragraph color={SecondaryColor_Blk}>
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
            height="7vh"
            width="20vw"
            display
            margin="25% 0 0 25%"
          >
            <Paragraph size="3vmin" color="white">
              Download
            </Paragraph>
          </Button>
        </a>
      </RightCol>
    </ToolLayout>
  );
};

const Video = () => {
  return (
    <>
      <Heading
        size="3vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
      >
        Short Animated Videos for Youth
      </Heading>
      <VideoLayout>
        <VideoPanel>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=6xONySz9XLk&list=PL575uOcSFCuG88LZulnRfTchiDb6_HZUP&index=2&t=0s"
            playing={false}
            controls={true}
            width="90%"
          />
          <Paragraph
            color={SecondaryColor_Blk}
            margin="0.5vmin"
            padding="0"
            size="2vmin"
            weight="bold"
            align="center"
          >
            Mood Matters: Describing Depression
          </Paragraph>
        </VideoPanel>
        <VideoPanel>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qMnQFTy3t30&list=PL575uOcSFCuG88LZulnRfTchiDb6_HZUP&index=2s"
            playing={false}
            controls={true}
            width="90%"
          />
          <Paragraph
            color={SecondaryColor_Blk}
            margin="0.5vmin"
            padding="0"
            size="2vmin"
            weight="bold"
            align="center"
          >
            Mood Matters: How Food, Movement & Sleep Can Have an Impact on You
          </Paragraph>
        </VideoPanel>
      </VideoLayout>
    </>
  );
};

const ProblemSolving = () => {
  return (
    <ToolLayout>
      <div>
        <IMG src={PS} alt="Problem Solving Worksheets" />
      </div>
      <RightCol>
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
        >
          Problem Solving Worksheets
        </Heading>
        <Paragraph color={SecondaryColor_Blk}>
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
            height="7vh"
            width="20vw"
            display
            margin="25% 0 0 25%"
          >
            <Paragraph size="3vmin" color="white">
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

const CognitiveRes = () => {
  return (
    <ToolLayout>
      <div>
        <IMG src={CR} alt="Cognitive Restructuring Worksheets" />
      </div>
      <RightCol>
        <Heading
          size="3vmin"
          weight="bold"
          align="center"
          color={SecondaryColor_Blk}
        >
          Cognitive Restructuring Worksheets
        </Heading>
        <Paragraph color={SecondaryColor_Blk}>
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
            height="7vh"
            width="20vw"
            display
            margin="25% 0 0 25%"
          >
            <Paragraph size="3vmin" color="white">
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
            href="https://www.corc.uk.net/outcome-experience-measures/mood-and-feelings-questionnaire/"
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
            href="https://www.corc.uk.net/outcome-experience-measures/revised-childrens-anxiety-and-depression-scale-and-subscales/"
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
  overflow-y: hidden;
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
  height: fit-content;
  width: 70%;
  padding: 3vmin;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
