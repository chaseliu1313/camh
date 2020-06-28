import React, { useEffect, useState } from 'react';
import {
  Correct_G,
  Error_R,
  Correct_G_Hover,
  Error_R_Hover,
} from '../../theme/resource';
import styled, { keyframes, css } from 'styled-components';

const StepCard = React.memo(function StepCard({
  height,
  width,
  margin,
  padding,
  children,
  background,
  radius,
  shadow,
  id,
  className,
  onClick,
  onMouseOver,
  onMouseOut,
  cursor = 'true',
  flex,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <CardContainer
      height={height}
      width={width}
      background={background}
      margin={margin}
      padding={padding}
      radius={radius}
      shadow={shadow}
      mounted={mounted}
      id={id}
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      cursor={cursor.toString()}
      flex={flex}
    >
      {children}
    </CardContainer>
  );
});

export default StepCard;

export function StepOptionCard({
  height,
  width,
  margin,
  padding,
  children,
  id,
  className,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      mounted={mounted}
      id={id}
      className={className}
    >
      {children}
    </Container>
  );
}

export const StepOptionButton = React.memo(function StepOptionButton({
  label,
  color,
  onClick,
  unSelect,
}) {
  return (
    <Button color={color} onClick={onClick} unSelect={unSelect}>
      {label}
    </Button>
  );
});

const enterAni = (height) => keyframes`
0% {
  opacity: 0;
  height:0px;
  

}
 
50% {
  opacity: 0.7;
  height:${parseInt(height) / 2}vh;
 
}
100% {
  opacity: 1;
  height:${height};
}`;

const CardContainer = styled.div`
  text-align: center;
  ${({
    height,
    width,
    margin,
    padding,
    background,
    radius,
    shadow,
    cursor,
    flex,
  }) => `
     background-color: ${background || 'green'};
     height: ${height || '13vh'};
     width: ${width || '80%'};
     margin: ${margin || 'auto'};
     padding: ${padding || '0'};
     border-radius: ${radius || '2px'};
     cursor: ${cursor === 'true' ? 'pointer' : 'auto'};
     flex-direction: ${flex || 'row'};
     box-shadow: ${
       shadow ||
       ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
     }
 `};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: ${({ shadow }) =>
      shadow ||
      '0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);'};
  }

  ${({ mounted }) =>
    mounted
      ? css`
          animation: ${enterAni} 0.5s linear forwards;
        `
      : null};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: rgba(201, 76, 76, 0.1);
  ${({ height, width, margin, padding }) => `
  height: ${height || '13vh'};
  width: ${width || '90%'};
  margin: ${margin || 'auto'};
  padding: ${padding || '0'};
  
`};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  ${({ mounted }) =>
    mounted
      ? css`
          animation: ${enterAni} 0.5s linear forwards;
        `
      : null};
`;

const Button = styled.button`
  font-family: 'Open Sans';
  background: ${(props) =>
    props.unSelect === true
      ? 'grey'
      : props.color === 'green'
      ? Correct_G
      : Error_R};
  height: 100%;
  width: 20%;
  color: white;
  font-size: 1em;
  border-radius: ${({ color }) =>
    color === 'green' ? '0 3px 3px 0' : '3px 0 0 3px'};
  cursor: pointer;
  position: relative;
  border: ${(props) =>
    props.unSelect === true
      ? 'grey'
      : props.color === 'green'
      ? `2px solid ${Correct_G}`
      : `2px solid ${Error_R}`};

  &:hover {
    background: ${(props) =>
      props.unSelect === true
        ? 'grey'
        : props.color === 'green'
        ? Correct_G_Hover
        : Error_R_Hover};
    border: ${(props) =>
      props.unSelect === true
        ? 'grey'
        : props.color === 'green'
        ? `2px solid ${Correct_G_Hover}`
        : `2px solid ${Error_R_Hover}`};
  }
`;
