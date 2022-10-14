import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Row as R, Col as C } from 'react-bootstrap';
import { useWindowResize } from '../../hooks/useWindowResize';
const ToolLayout = (props) => {
  const { size } = useWindowResize();
  return <RowContainer size={size}>{props.children}</RowContainer>;
};

export const VideoLayout = (props) => {
  const { size } = useWindowResize();
  return (
    <VRow size={size}>
      {React.Children.map(props.children, (child, index) => (
        <VCol md={6} size={size}>
          {child}
        </VCol>
      ))}
    </VRow>
  );
};

export default ToolLayout;

//animations
const enterAni = keyframes`

0% {
  opacity: 0;
 


}
50%{
  opacity:0.5;
 
}
 
100%{
  opacity:1;
  
}
`;

const RowContainer = styled.div`
  width: 100%;

  display: flex;
  ${({ size }) =>
    size.width <= 776
      ? 'flex-direction: column;  height: 120%;'
      : 'flex-direction: row;  height: 85%;'}

  align-items: center;
  justify-content: center;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
`;

const VRow = styled(R)`
  width: 100%;
  margin: 2vmin;
  padding: 0;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
  ${({ size }) =>
    size.width <= 776
      ? 'overflow: auto;  height: 150%;'
      : 'overflow: hidden;  height: fit-content;'}
`;

const VCol = styled(C)`
  display: flex;
  top: 2vmin;

  align-items: center;
  ${({ size }) =>
    size.width <= 776
      ? 'flex-direction: column;  justify-content: flex-start;'
      : 'flex-direction:row;  justify-content: center;'}
`;
