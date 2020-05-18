import React from 'react';
import styled from 'styled-components';
import { BackgroundColor } from '../../theme/resource';

export default function Card({ height, width, margin, padding, children }) {
  return (
    <Container height={height} width={width} margin={margin} padding={padding}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: ${BackgroundColor};
  align-text: center;

  div > * {
    transition-timing-function: ease-in;
    transition: 0.2s;
  }

  ${({ height, width, margin, padding }) => `
    height: ${height || '40vh'};
     width: ${width || '50vw'};
     margin: ${margin || 'auto'};
     padding: ${padding || '10px'};

`}
`;
