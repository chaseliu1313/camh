import React, { useState, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { PrimaryColor, DarkPurple } from '../theme/resource';

const JointBtnContext = React.createContext([false, true]);

function JointBtnContainer(props) {
  const [active, setActive] = useState([false, true]);

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, { index, setActive, active });
  });

  return (
    <JointBtnContext.Provider value={active}>
      <BtnContainer>{children}</BtnContainer>
    </JointBtnContext.Provider>
  );
}

export default React.memo(JointBtnContainer);

export const JointBtn = React.memo(function JointBtn({
  btn: { label, disabled, primary },
  onClick,
  index,
  setActive,
  active,
}) {
  const handleClick = useCallback(() => {
    onClick();
    if (index === 0) {
      setActive([true, false]);
    } else {
      setActive([false, true]);
    }
  }, [onClick, setActive, index]);

  return (
    <Button
      primary={primary}
      disabled={disabled}
      onClick={handleClick}
      active={active}
      index={index}
    >
      {label}
    </Button>
  );
});

const btn2Ani = keyframes`

   from {

   }
   to{
    background: white;
    color: #6E298D;
   }
  

`;

const btn2AniReverse = keyframes`

   from {
    background: white;
    color: #6E298D;
   }
   to{
    background: ${PrimaryColor};
    color: white;
   }
  

`;

const btn1Ani = keyframes`

   from {

   }
   to{
    background: ${PrimaryColor};
    color: white;
   }
  

`;

const btn1AniReverse = keyframes`

   from {
    background: ${PrimaryColor};
    color: white;
   }
   to{
    background: white;
    color: #6E298D;
   }
  

`;

const btnAni = (index, active) => {
  if (index === 0) {
    if (active[0]) {
      return css`
        ${btn1Ani} 0.3s linear forwards;
      `;
    } else {
      return css`
        ${btn1AniReverse} 0.3s linear forwards;
      `;
    }
  }

  if (index === 1) {
    if (active[1]) {
      return css`
        ${btn2AniReverse} 0.3s linear forwards;
      `;
    } else {
      return css`
        ${btn2Ani} 0.3s linear forwards;
      `;
    }
  }
};
// ${btn2Ani} 0.3s linear forwards;
export const Button = styled.button`
  background: ${(props) => (props.index === 1 ? PrimaryColor : 'white')};

  color: ${(props) => (props.index === 1 ? 'white' : PrimaryColor)};

  animation: ${({ index, active }) => btnAni(index, active)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${PrimaryColor};
  border-radius: ${(props) => (props.primary ? '0 3px 3px 0' : '3px 0 0 3px')};
  width: 50%;
  margin-left: 0;
  margin-right: 0;
  cursor: pointer;
  position: relative;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background: ${(props) => (props.primary ? DarkPurple : 'white')};
    color: ${(props) => (props.primary ? 'white' : DarkPurple)};
    border: 2px solid ${DarkPurple};
  }
  &:active {
    background: ${(props) => (props.primary ? DarkPurple : 'white')};
    color: ${(props) => (props.primary ? 'white' : DarkPurple)};
    border: 2px solid ${DarkPurple};
  }
`;

const BtnContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
