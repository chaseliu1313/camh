import React, { useState, useEffect, Fragment } from 'react';
import Heading, { Paragraph, SubText } from '../../components/Text/Heading';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './assessment.css';
import Intro from './intro';
import Simulation from './Simulation';
import Button from '../../components/Buttons/Buttons';
import { TertiaryColor_Tel } from '../../theme/resource';

export default function Assessment() {
  const [btnAppeal, setDisplay] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(true);

  const viewSwicher = () => {
    setHide1(true);
    setDisplay(true);
    setHide2(false);
    //hide the previous btmn
  };

  const goBack = () => {
    setHide1(false);
    setDisplay(false);
    setHide2(true);
  };

  return (
    <Container id="assess_landing">
      <Heading size="7vmin" weight="bold" align="center">
        Assessment
      </Heading>
      <Intro hide={hide1} />
      <Simulation hide={hide2} />

      <BtnGroup>
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display={btnAppeal}
        >
          <Paragraph color={TertiaryColor_Tel}>Previous</Paragraph>
        </Button>
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display={true}
        >
          <Paragraph>Next</Paragraph>
        </Button>
      </BtnGroup>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;
