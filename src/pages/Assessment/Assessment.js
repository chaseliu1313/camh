import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled from 'styled-components';
import './assessment.css';
import Intro from './intro';
import Simulation from './Simulation';
import Button from '../../components/Buttons/Buttons';
import { TertiaryColor_Tel, SecondaryColor_Blk } from '../../theme/resource';
import { useHistory } from 'react-router-dom';

export default function Assessment() {
  const [btnAppeal, setDisplay] = useState(false);
  const [btnName, setBtnName] = useState('Next');

  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(true);
  let history = useHistory();

  const viewSwicher = () => {
    if (!hide2) {
      history.push('/assessment/pears');
    }

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
      <Heading
        size="5vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin="5vmin 0 -3vmin 0"
        type="h1"
      >
        Tips for Assessing Depressed Youth
      </Heading>
      <Intro hide={hide1} />
      <Simulation hide={hide2} />

      <BtnGroup>
        <Button
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
          display
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
