import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Tel,
  BackgroundColor,
} from '../../theme/resource';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import ToolLayout, { VideoLayout } from './toolLayout';
import CR from '../../resource/CognitiveRestructuring.png';
import MH from '../../resource/MedicationHandout.png';
import MF from '../../resource/MoodFoundations.png';
import PS from '../../resource/ProblemSolving.png';
import ReactPlayer from 'react-player';
import StepCard from '../../components/Cards/StepCard';
import './resources.css';
const path1 = ['/treatment', '/resources/tools/video'];
const path2 = ['/resources/tools', '/resources/tools/medhandout'];
const path3 = ['/resources/tools/video', '/resources/tools/problemSolving'];
const path4 = ['/resources/tools/medhandout', '/resources/tools/cognitive'];
const path5 = [
  '/resources/tools/problemSolving',
  '/resources/tools/assessment',
];
const path6 = ['/resources/tools/cognitive', '/resources/help'];

const ReTools = ({ match }) => {
  const [path, setPath] = useState(['/treatment', '/resources/tools/video']);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/resources/tools') {
      setPath(path1);
    } else if (location === '/resources/tools/video') {
      setPath(path2);
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
        <Col xs lg="1">
          <Link to={path[0]}>
            <Button
              primary={false}
              type="outlined"
              height="5vmin"
              width="5vw"
              display
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <Paragraph size="2vmin" color={SecondaryColor_Tel}>
                Back
              </Paragraph>
            </Button>
          </Link>
        </Col>
        <CenterCol md={{ span: 10 }}>
          <Heading
            size="5vmin"
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            {location === '/resources/tools/assessment'
              ? 'Assessment Tools'
              : 'Cundill Centre Tools'}
          </Heading>
        </CenterCol>
        <Col xs lg="1">
          <Link to={path[1]}>
            <Button primary type="outlined" height="5vmin" width="5vw" display>
              <FontAwesomeIcon icon={faArrowRight} />
              <Paragraph size="2vmin" color={PrimaryColor}>
                Next
              </Paragraph>
            </Button>
          </Link>
        </Col>
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
                  size="5vmin"
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
                  href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=4&fname=Mood-Foundations-Package-Youth-pdf.pdf"
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
          size="5vmin"
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
          href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=8&fname=Medication-for-YOUth-Resource-pdf.pdf"
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
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Gm3FLGxb2ZU&t=1s"
          playing={false}
          controls={true}
          width="90%"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Gm3FLGxb2ZU&t=1s"
          playing={false}
          controls={true}
          width="90%"
        />
      </VideoLayout>
      <VideoLayout>
        <Paragraph color={SecondaryColor_Blk} margin="2vmin" padding="2vmin">
          Mood Matters: Describing Depression
        </Paragraph>

        <Paragraph color={SecondaryColor_Blk} margin="2vmin" padding="2vmin">
          Mood Matters: How Food, Movement & Sleep Can Have an Impact on You
        </Paragraph>
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
          size="5vmin"
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
          href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=5&fname=Problem-Solving-Worksheets-Youth-pdf.pdf"
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

const CognitiveRes = () => {
  return (
    <ToolLayout>
      <div>
        <IMG src={CR} alt="Cognitive Restructuring Worksheets" />
      </div>
      <RightCol>
        <Heading
          size="5vmin"
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
          href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=6&fname=Cognitive-Restructuring-Worksheets-Youth-pdf.pdf"
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
  width: 90%;
`;

const RightCol = styled.div`
  height: 70%;
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
