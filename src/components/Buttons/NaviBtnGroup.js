import React from 'react';
import styled from 'styled-components';
import Button from './Buttons';
import { Paragraph } from '../Text/Heading';
import { TertiaryColor_Tel } from '../../theme/resource';
import { useHistory } from 'react-router-dom';

const NaviBtnGroup = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push(props.backLink);
  };

  const goForward = () => {
    history.push(props.forwardLink);
  };

  return (
    <BtnGroup>
      <Button
        type="outlined"
        height="7vh"
        width="20vw"
        onClick={goBack}
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
        onClick={goForward}
        display
      >
        <Paragraph>Next</Paragraph>
      </Button>
    </BtnGroup>
  );
};

export default NaviBtnGroup;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;
