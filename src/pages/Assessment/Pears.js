import React from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';

import Card from '../../components/Cards/Card';
import styled from 'styled-components';
import './assessment.css';
import { pears } from '../../resource/content';
import { SecondaryColor_Blk, TertiaryColor_Tel } from '../../theme/resource';
import Button from '../../components/Buttons/Buttons';
import { useHistory } from 'react-router-dom';
import idea from '../../resource/idea.svg';

const Pears = () => {
  const goBack = () => {
    history.push('/assessment');
  };
  const viewSwicher = () => {
    history.push('/assessment/tools');
  };
  const Pmarging = '20px 0';
  let history = useHistory();
  return (
    <Container>
      <Heading
        size="5vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin="15px 0"
        id="assess_landing"
      >
        Assessment Pears
      </Heading>
      <Card height="70vh" width="80vw" padding="20px">
        {pears.map((p, index) => (
          <Paragraph
            id={'pears' + index}
            margin={Pmarging}
            color={SecondaryColor_Blk}
          >
            {p}
          </Paragraph>
        ))}
      </Card>

      <BtnGroup id="btn_group">
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display
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
};

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;

  overflow: hidden;
  transition: all 1s linear;
  background-image: url(${idea});
  background-repeat: no-repeat;
  background-size: 75% 50%;
  background-position: 220% 110%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;

export default Pears;
