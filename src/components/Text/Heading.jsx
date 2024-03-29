import React from 'react';
import styled from 'styled-components';
import {
  PrimaryColor,
  SecondaryColor_Blk,
  fontSize,
} from '../../theme/resource';

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
  id,
  className,
  tabIndex = 0,
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
      id={id}
      className={className}
      tabIndex={tabIndex}
    >
      {children}
    </Text>
  );
}

export function Paragraph({
  color,
  lineHeight,
  weight = 300,
  size = fontSize.p,
  align,
  margin,
  padding,
  children,
  id,
  className,
  tabIndex = 0,
  style,
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
      id={id}
      className={className}
      tabIndex={tabIndex}
      style={{ ...style }}
    >
      {children}
    </Text>
  );
}

export function SubText({
  color = SecondaryColor_Blk,
  lineHeight,
  weight = 200,
  size = fontSize.subtext,
  margin,
  padding,
  children,
  opacity,
  id,
  className,
  tabIndex = 0,
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
      id={id}
      className={className}
      tabIndex={tabIndex}
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
    font-size: ${size || fontSize.title};
    line-height: ${lineHeight || 1.5};
    font-weight: ${weight || 'normal'};
    margin: ${margin === undefined ? 'auto' : margin};
    padding: ${padding || '0'};
    text-decoration: none !important;

    @media (max-width: ${size.tablet}) {
      font-size: ${size ? parseInt(size) * 0.75 + 'vmin' : '7.5vmin'};

    }
 
 `};
`;

const SText = styled(Text)`
  opacity: ${({ opacity }) => opacity || 0.7};
`;
