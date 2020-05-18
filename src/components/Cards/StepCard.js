import React from 'react';
import {
  Correct_G,
  Error_R,
  Correct_G_Hover,
  Error_R_Hover,
} from '../../theme/resource';
import styled from 'styled-components';

export default function StepCard({
  height,
  width,
  margin,
  padding,
  children,
  background,
  radius,
  shadow,
}) {
  return (
    <CardContainer
      height={height}
      width={width}
      background={background}
      margin={margin}
      padding={padding}
      radius={radius}
      shadow={shadow}
    >
      {children}
    </CardContainer>
  );
}

export function StepOptionCard({ height, width, margin, padding, children }) {
  return (
    <Container height={height} width={width} margin={margin} padding={padding}>
      {children}
    </Container>
  );
}

export function StepOptionButton({ label, color, onClick }) {
  return (
    <Button color={color} onClick={onClick}>
      {label}
    </Button>
  );
}

const CardContainer = styled.div`
  align-text: center;
  ${({ height, width, margin, padding, background, radius, shadow }) => `
     background-color: ${background || 'green'};
     height: ${height || '13vh'};
     width: ${width || '20vw'};
     margin: ${margin || 'auto'};
     padding: ${padding || '0'};
     border-radius: ${radius || '2px'};
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
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: rgba(201, 76, 76, 0.1);
  ${({ height, width, margin, padding }) => `
  height: ${height || '13vh'};
  width: ${width || '40vw'};
  margin: ${margin || 'auto'};
  padding: ${padding || '0'};
  
`};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Button = styled.button`
  font-family: 'Open Sans';
  background: ${(props) => (props.color === 'green' ? Correct_G : Error_R)};
  height: 100%;
  width: 25%;
  color: white;
  font-size: 1em;
  border-radius: ${({ color }) =>
    color === 'green' ? '0 3px 3px 0' : '3px 0 0 3px'};
  cursor: pointer;
  position: relative;
  border: ${(props) =>
    props.color === 'green'
      ? `2px solid ${Correct_G}`
      : `2px solid ${Error_R}`};

  &:hover {
    background: ${(props) =>
      props.color === 'green' ? Correct_G_Hover : Error_R_Hover};
    border: ${(props) =>
      props.color === 'green'
        ? `2px solid ${Correct_G_Hover}`
        : `2px solid ${Error_R_Hover}`};
  }
`;
