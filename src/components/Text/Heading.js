import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor_Blk } from '../../theme/resource';

export default function Heading({
  color,
  lineHeight,
  weight,
  size,
  type,
  align,
  margin,
  padding,
  children,
}) {
  return (
    <Text
      as={type}
      color={color}
      lineHeight={lineHeight}
      weight={weight}
      size={size}
      align={align}
      margin={margin}
      padding={padding}
    >
      {children}
    </Text>
  );
}

export function Paragraph({
  color,
  lineHeight,
  weight = 300,
  size = '3vmin',
  align,
  margin,
  padding,
  children,
}) {
  return (
    <Text
      color={color}
      lineHeight={lineHeight}
      weight={weight}
      size={size}
      align={align}
      margin={margin}
      padding={padding}
    >
      {children}
    </Text>
  );
}

export function SubText({
  color = SecondaryColor_Blk,
  lineHeight,
  weight = 200,
  size = '1.5vmin',
  margin,
  padding,
  children,
  opacity,
}) {
  return (
    <SText
      color={color}
      lineHeight={lineHeight}
      weight={weight}
      size={size}
      opacity={opacity}
      margin={margin}
      padding={padding}
    >
      {children}
    </SText>
  );
}

const Text = styled.p`
  font-family: Open Sans;
  ${({ color, lineHeight, weight, size, align, margin, padding }) => `
    text-align: ${align || 'start'};
    color: ${color || PrimaryColor};
    font-size: ${size || '10vmin'};
    line-height: ${lineHeight || 1.5};
    font-weight: ${weight || 'normal'};
    margin: ${margin || 'auto'};
    padding: ${padding || '0'};
 
 `};
`;

const SText = styled(Text)`
  opacity: ${({ opacity }) => opacity || 0.7};
`;
