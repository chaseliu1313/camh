import styled from 'styled-components';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PrimaryColor, BackgroundColor } from '../../theme/resource';
import surveyImg from '../../resource/survey.svg';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { InputGroup } from 'react-bootstrap';
import { useWindowResize } from '../../hooks/useWindowResize';

export const SurveySnackBar = ({ persist }) => {
  const [motion, setMotion] = useState(persist);
  const [checkboxesState, setCheckboxesState] = useState([false, false]);
  const AnimatedContainer = animated(Container);
  const { size } = useWindowResize();

  const animation = useSpring({
    height: motion ? '200px' : '100px',
    transform: motion
      ? 'translate3d(450px, 0px, 0px)'
      : `translate3d(250px, 0px, 0px)`,
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
      onMouseOver={() => {
        console.log('setting true');
        if (!persist) setMotion(true);
      }}
      onMouseLeave={() => {
        if (!persist) setMotion(false);
      }}
      style={{
        boxShadow: animation.boxShadow,
        height: animation.height,
        transform: animation.transform,
        width: size.width <= 776 ? size.width * 0.8 : 350,
      }}
    >
      <Left>
        <Heading type="h2" weight="normal" size="2vmin" color={PrimaryColor}>
          Will you implement any new practices based on this tool?
        </Heading>
        <Checkboxes>
          <InputGroup style={{width: 'fit-content'}}>
            <InputGroup.Checkbox
              aria-label="Yes"
              id="checkbox_yes"
              checked={checkboxesState[0]}
              onChange={(e) => handleCheckbox(e.currentTarget.id)}
            />
          </InputGroup>
          <Paragraph size="16px">Yes</Paragraph>
          <InputGroup style={{width: 'fit-content'}}>
            <InputGroup.Checkbox
              aria-label="No"
              id="checkbox_no"
              checked={checkboxesState[1]}
              onChange={(e) => handleCheckbox(e.currentTarget.id)}
            />
          </InputGroup>
          <Paragraph size="16px">No</Paragraph>
        </Checkboxes>
        <Paragraph weight="normal" size="2vmin">
          Tell us more? Complete our{' '}
          <a
            className="ov_a"
            href="https://edc.camhx.ca/redcap/surveys/?s=7JHE89NFRF"
            target="_blank"
            rel="noopener noreferrer"
          >
            5-minute survey.
          </a>
        </Paragraph>
      </Left>

      <Right>
        <IMG src={surveyImg} isOpen={motion.toString()} />
      </Right>
    </AnimatedContainer>
  );
};

 

const Container = styled.div`
  height: 250px;
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
  overflow: auto;
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
  width: 50px;

  ${({ isOpen }) =>
    isOpen === 'true' ? ' margin-right: 0px;' : ' margin-right: -25px;'}
`;
