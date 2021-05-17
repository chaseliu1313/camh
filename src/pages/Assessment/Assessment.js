import React, { useState } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled from 'styled-components';
import './assessment.css';
import Intro from './intro';
import Simulation from './Simulation';
import SocialNetworks from './SocialNetwork';
import Button from '../../components/Buttons/Buttons';
import { TertiaryColor_Tel, SecondaryColor_Blk } from '../../theme/resource';
import { useHistory } from 'react-router-dom';

export default function Assessment() {
  const initialState = [false, true, true];
  const [btnAppeal, setDisplay] = useState(false);
  const [pageState, setPageState] = useState(initialState);
  let history = useHistory();

  const viewSwicher = () => {
    if (!pageState[2]) {
      history.push('/assessment/pears');
      return;
    }

    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    copyState[index + 1] = !copyState[index + 1];

    setPageState(copyState);

    setDisplay(copyState[0]);
  };

  const goBack = () => {
    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    if (index > 0) {
      copyState[index - 1] = !copyState[index - 1];
    }

    setPageState(copyState);

    setDisplay(copyState[0]);
  };

  return (
    <Container id="assess_landing">
      <Heading
        size="5vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin="s5vmin 0 -3vmin 0"
        type="h1"
      >
        Tips for Assessing Depressed Youth
      </Heading>
      <Intro hide={pageState[0]} />
      <Simulation hide={pageState[1]} />
      <SocialNetworks hide={pageState[2]} />

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
