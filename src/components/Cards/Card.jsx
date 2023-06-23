import React from 'react';
import styled from 'styled-components';
import { BackgroundColor } from '../../theme/resource';
import { useWindowResize } from '../../hooks/useWindowResize';
export default function Card({
  height,
  width,
  margin,
  padding,
  children,
  className,
  bgColor,
  tabIndex = 0,
}) {
  const { size } = useWindowResize();
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      className={className}
      bgColor={bgColor}
      tabIndex={tabIndex}
      size={size}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  max-height: 95%;
  overflow: auto;

  & > h2 {
    transition-timing-function: ease-in;
    transition: 0.2s;
    text-align: center;
  }

  ${({ height, width, margin, padding, bgColor, size }) => `
  background-color: ${bgColor || BackgroundColor};
    height: ${height || '40vh'};
     width: ${width || '50vw'};
     margin: ${margin || 'auto'};
     padding: ${padding || '10px'};
     overflow: ${size.height < 800 || size.width < 900 ? 'auto' : 'hidden'}

`}
`;
