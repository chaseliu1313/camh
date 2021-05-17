import styled from 'styled-components';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PrimaryColor, BackgroundColor } from '../../theme/resource';
import surveyImg from '../../resource/customer_survey.svg';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { InputGroup } from 'react-bootstrap';
const SurveySnackBar = () => {
  const [motion, setMotion] = useState(false);
  const [checkboxesState, setCheckboxesState] = useState([false, false]);
  const AnimatedContainer = animated(Container);

  const animation = useSpring({
    height: motion ? '250px' : '100px',
    transform: motion
      ? 'translate3d(450px, 0px, 0px)'
      : 'translate3d(0px, 0px, 0px)',
  });

  const handleCheckbox = (id) => {
    const current = checkboxesState;
    if (id === 'checkbox_yes') {
      if (current[1]) {
        setCheckboxesState([!current[0], !current[1]]);
      } else {
        setCheckboxesState([!current[0], current[1]]);
      }
    } else {
      if (current[0]) {
        setCheckboxesState([!current[0], !current[1]]);
      } else {
        setCheckboxesState([current[0], !current[1]]);
      }
    }
  };
  return (
    <AnimatedContainer
      onMouseOver={() => setMotion(true)}
      onMouseLeave={() => setMotion(false)}
      style={{
        boxShadow: animation.boxShadow,
        height: animation.height,
        transform: animation.transform,
      }}
    >
      <Left>
        <Heading type="h2" weight="normal" size="2vmin" color={PrimaryColor}>
          Will you implement any new practices based on this tool?
        </Heading>
        <Checkboxes>
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              aria-label="Yes"
              id="checkbox_yes"
              checked={checkboxesState[0]}
              onChange={(e) => handleCheckbox(e.currentTarget.id)}
            />
          </InputGroup.Prepend>
          <Paragraph size="16px">Yes</Paragraph>
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              aria-label="No"
              id="checkbox_no"
              checked={checkboxesState[1]}
              onChange={(e) => handleCheckbox(e.currentTarget.id)}
            />
          </InputGroup.Prepend>
          <Paragraph size="16px">No</Paragraph>
        </Checkboxes>
        <Paragraph weight="normal" size="2vmin">
          Tell us more? Complete our 5 minute survey
        </Paragraph>
      </Left>

      <Right>
        <IMG src={surveyImg} isOpen={motion.toString()} />
      </Right>
    </AnimatedContainer>
  );
};

export default SurveySnackBar;
const Container = styled.div`
  height: 250px;
  width: 500px;
  z-index: 50;
  position: absolute;
  padding: 10px;
  bottom: 150px;
  left: -420px;
  background-color: ${BackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${PrimaryColor};
`;

const Checkboxes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Left = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  height: 100%;
  width: 20%;
`;

const IMG = styled.img`
  width: 60px;

  ${({ isOpen }) =>
    isOpen === 'true' ? ' margin-right: 0px;' : ' margin-right: -25px;'}
`;
