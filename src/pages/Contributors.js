import React from 'react';
import styled from 'styled-components';
import Heading, { Paragraph } from '../components/Text/Heading';

import {
  SecondaryColor_Blk,
  PrimaryColor,
  SecondaryColor_Blu,
  SecondaryColor_Yel,
  SecondaryColor_Tel,
} from '../theme/resource';
import { Row as R, Col, ListGroup as LG, ListGroupItem } from 'react-bootstrap';
import teams from '../resource/teams.svg';

const DevelopmentTeam = () => {
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
            Development Team
          </Heading>
        </CenterCol>
      </Row>
      <ListRow>
        <ListGroup variant="flush" bordercolor={PrimaryColor}>
          <ListGroupItem>
            <Heading
              size="3vmin"
              weight="bold"
              align="start"
              color={SecondaryColor_Blk}
              margin="0"
            >
              Cundill Centre for Child and Youth Depression, CAMH
            </Heading>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Renira Narrandes, Knowledge Translation Specialist
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Stephanie Ameis, Lead Clinical Advisor
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Peter Szatmari, Clinical Advisor
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Darren Courtney, Clinical Advisor
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Madison Aitken, Clinical Advisor
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Priya Watson, Clinical Advisor
            </Paragraph>
          </ListGroupItem>
        </ListGroup>
      </ListRow>
      <ListRow>
        <ListGroup variant="flush" bordercolor={SecondaryColor_Blu}>
          <ListGroupItem>
            <Heading
              size="3vmin"
              weight="bold"
              align="start"
              color={SecondaryColor_Blk}
              margin="0"
            >
              Provincial System Support Program, CAMH
            </Heading>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Mahfuz Hassan, BCBA, Instructional Designer
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Natalia Ronda, Manager, Instructional Design and Learning
              Technologies
            </Paragraph>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Dr. Branka Agic, Director, Knowledge Exchange
            </Paragraph>
          </ListGroupItem>
        </ListGroup>
      </ListRow>
      <ListRow>
        <ListGroup variant="flush" bordercolor={SecondaryColor_Yel}>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Youth Engagement Initiative, supported by the Margaret and Wallace
              McCain Centre for Child, Youth & Family Mental Health and the
              Child, Youth and Emerging Adult Program at CAMH.
            </Paragraph>
          </ListGroupItem>
        </ListGroup>
      </ListRow>
      <ListRow>
        <ListGroup variant="flush" bordercolor={SecondaryColor_Tel}>
          <ListGroupItem>
            <Heading
              size="3vmin"
              weight="bold"
              align="start"
              color={SecondaryColor_Blk}
              margin="0"
            >
              Design
            </Heading>
          </ListGroupItem>
          <ListGroupItem>
            <Paragraph color={SecondaryColor_Blk} size="2.5vmin">
              Chase, Shuyang Liu, Web Developer/Designer
            </Paragraph>
          </ListGroupItem>
        </ListGroup>
      </ListRow>
    </Container>
  );
};

export default DevelopmentTeam;

const Container = styled.div`
  height: 130%;
  width: 100%;
  overflow: auto;
  padding: 5vmin 0;
  background: url(${teams}) no-repeat fixed left bottom;
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
  height: fit-content;
  margin: 3vmin auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListGroup = styled(LG)`
  width: 50%;
  text-align: center;
  ${({ bordercolor }) => `
  border-left: 5px solid ${bordercolor};
  `}
`;
