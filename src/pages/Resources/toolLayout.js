import React from 'react';
import styled from 'styled-components';
import { Row as R, Col as C } from 'react-bootstrap';

const ToolLayout = (props) => {
  return (
    <Row>
      {React.Children.map(props.children, (child, index) => (
        <Col md={index === 0 ? 4 : 8}>{child}</Col>
      ))}
    </Row>
  );
};

export const VideoLayout = (props) => {
  return (
    <VRow>
      {React.Children.map(props.children, (child, index) => (
        <VCol md={6}>{child}</VCol>
      ))}
    </VRow>
  );
};

export default ToolLayout;

const Row = styled(R)`
  height: 55%;
  width: 100%;
  margin: 5vmin;
  padding: 0;
  overflow: hidden;
`;

const VRow = styled(R)`
  height: fit-content;
  width: 100%;
  margin: 2vmin;
  padding: 0;
  overflow: hidden;
`;

const Col = styled(C)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VCol = styled(C)`
  display: flex;
  top: 2vmin;
`;
