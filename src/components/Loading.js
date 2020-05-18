import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { PrimaryColor, DarkPurple } from '../theme/resource';

export default function Loading({ loading }) {
  return (
    <Fragment loading={loading}>
      <Container>
        <Core />
      </Container>
      <div style={{ marginTop: '20vmin' }}>
        <h3>Loading...</h3>
      </div>
    </Fragment>
  );
}

const ContainerKF = keyframes`
0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
    border: 4px solid #00a39b;
  }
  
  50% {
    transform: rotate(180deg);
    border: 4px solid #63B1E5;
  }
  
  75% {
    transform: rotate(360deg);
 
  }
  
  100% {
    transform: rotate(360deg);
  }`;

const CoreKF = keyframes`
  0% {
    height: 0%;
   
  }
  
  25% {
    height: 0%;
    background-color:#00a39b
  }
  
  50% {
    height: 100%;
    background-color:#63B1E5
  }
  
  75% {
    height: 100%;
    
  }
  
  100% {
    height: 0%;
  }
  `;

const Container = styled.div`
  display: block;
  width: 5vmin;
  height: 5vmin;
  position: fixed;
  border: 4px solid ${PrimaryColor};
  border-radius: 3px;
  animation: ${ContainerKF} 3s infinite ease;
`;

const Core = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  background-color: ${PrimaryColor};
  animation: ${CoreKF} 3s infinite ease-in;
`;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  width: 100%;
  height: 50vmin;
  opacity: ${({ loading }) => (loading ? '1' : '0')};
  font-family: Open Sans;
`;
