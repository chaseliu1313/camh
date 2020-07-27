import React from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import bg from '../../resource/localHelp.svg';
import { Link } from 'react-router-dom';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Tel,
} from '../../theme/resource';

const LocalHelp = () => {
  const paths = ['/resources/tools/assessment', '/resources/reference'];

  return (
    <Container>
      <Row>
        <Col xs lg="1">
          <Link to={paths[0]}>
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
        <CenterCol xs={8} md={10}>
          <Heading
            size="5vmin"
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            Local Help for Youth
          </Heading>
        </CenterCol>
        <Col xs lg="1">
          <Link to={paths[1]}>
            <Button primary type="outlined" height="5vmin" width="5vw" display>
              <FontAwesomeIcon icon={faArrowRight} />
              <Paragraph size="2vmin" color={PrimaryColor}>
                Next
              </Paragraph>
            </Button>
          </Link>
        </Col>
      </Row>
      <ListRow>
        <ListGroup className="help_list">
          <ListGroup.Item action>
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Find your local{' '}
              <a
                href="https://cmha.ca/find-your-cmha"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                Canadian Mental Health Association (CMHA)
              </a>
              or call{' '}
              <a href="tel:18334564566" className="help_link">
                1-833-456-4566
              </a>
              .
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Call the{' '}
              <a
                href="https://kidshelpphone.ca/"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                Kids Help Phone
              </a>{' '}
              at{' '}
              <a href="tel:18006686868" className="help_link">
                1-800-668-6868
              </a>
              or text them at CONNECT 686868.
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Call the{' '}
              <a
                href="https://www.hopeforwellness.ca/"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                First Nations and Inuit Hope for Wellness Helpline
              </a>{' '}
              toll free at{' '}
              <a href="tel:18552423310" className="help_link">
                1-855-242-3310
              </a>{' '}
              or use the chat box on their website to connect with a counsellor
              online.
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Call the{' '}
              <a
                href="https://www.thetrevorproject.org/"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                Trevor Project
              </a>{' '}
              at{' '}
              <a href="tel:18664887386" className="help_link">
                1-866-488-7386
              </a>{' '}
              or text START to 678-678 (resource for LGBTQ youth).
            </Paragraph>
          </ListGroup.Item>
        </ListGroup>
      </ListRow>
    </Container>
  );
};

export default LocalHelp;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  background: url(${bg}) no-repeat fixed right bottom;
  background-size: 30%;
`;

const Row = styled(R)`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: auto;
`;

const ListRow = styled(R)`
  width: 100%;
  padding: 0;
  overflow: hidden;
  height: 100%;
  margin: 5vmin auto;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
