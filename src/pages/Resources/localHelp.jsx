import React from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import bg from '../../resource/localHelp.svg';

import Heading, { Paragraph } from '../../components/Text/Heading';

import { SecondaryColor_Blk } from '../../theme/resource';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';

const LocalHelp = () => {
  const paths = ['/resources/tools/specialPopulation', '/resources/faq'];

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
            Local Help for Youth
          </Heading>
        </CenterCol>
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
              </a>{' '}
              or call{' '}
              <a href="tel:18334564566" className="help_link">
                1-833-456-4566
              </a>
              .
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Find your local{' '}
              <a
                href="https://youthhubs.ca/en/sites/"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                Youth Wellness Hubs Ontario
              </a>{' '}
              site.
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Access{' '}
              <a
                href="https://www.camh.ca/-/media/files/community-resource-sheets/crisis-resources-pdf.pdf?la=en&hash=2C7E1485B24425C845B5C6CE6D96926DC7E63D51"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                crisis services
              </a>
              .
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Access{' '}
              <a
                href="https://www.camh.ca/-/media/files/community-resource-sheets/drop-in-counselling-pdf.pdf?la=en&hash=43B3100ED292625E480814F178A4891A51ECA764"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                drop-in counselling services
              </a>
              .
            </Paragraph>
          </ListGroup.Item>
          <ListGroup.Item action variant="Success">
            <Paragraph color={SecondaryColor_Blk} size="3vmin">
              Access{' '}
              <a
                href="http://www.camh.ca/en/suicide-prevention/get-help"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="help_link"
              >
                suicide prevention resources
              </a>
              .
            </Paragraph>
          </ListGroup.Item>
        </ListGroup>
      </ListRow>
      <Row>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <NaviBtnGroup backLink={paths[0]} forwardLink={paths[1]} />
        </CenterCol>
      </Row>
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
  padding-top: 25px;
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
