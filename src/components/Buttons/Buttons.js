import React from 'react';
import styled, { css } from 'styled-components';
import {
  PrimaryColor,
  DarkPurple,
  Error_R,
  SecondaryColor_Tel,
  Error_R_Hover,
  TertiaryColor_Tel,
} from '../../theme/resource';
import Anime from 'react-anime';

export default function Button({
  height,
  width,
  margin,
  padding,
  children,
  primary,
  err,
  disabled,
  icon,
  onClick,
  type,
}) {
  return (
    <Btn
      height={height}
      width={width}
      maring={margin}
      padding={padding}
      primary={primary}
      err={err}
      disabled={disabled}
      icon={icon}
      type={type}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
}

const colorShifter = (p, e) => {
  if (p) {
    return PrimaryColor;
  } else if (e) {
    return Error_R;
  } else if (!p) {
    return SecondaryColor_Tel;
  }
};

const borderShifterHover = (p, e) => {
  if (p) {
    return [DarkPurple, 'rgba(74, 25, 97, 0.2)'];
  } else if (e) {
    return [Error_R_Hover, 'rgba(228, 23, 73, 0.2)'];
  } else if (!p) {
    return [TertiaryColor_Tel, 'rgba(122, 195, 204, 0.3)'];
  }
};

const Btn = styled.button`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  text-align: center;
  outline: none;
  font-size: 0.875rem;
  box-shadow: 0 0 4px #999;
  ${({
    height,
    width,
    margin,
    padding,
    primary,
    err,
    disabled,
    icon,
    type,
  }) => `
height: ${height || '10vh'};
width: ${width || '15vw'};
margin: ${margin || '1em'};
padding: ${padding || '0.25em 1em'};
border: 1.5px solid ${colorShifter(primary, err)};
color: ${type === 'outlined' ? colorShifter(primary, err) : 'white'};
background-color: ${type === 'outlined' ? 'white' : colorShifter(primary, err)};

&:hover {
    border: 1.5px solid ${borderShifterHover(primary, err)[0]};
    background: ${
      type === 'outlined'
        ? '#f2f2f2 radial-gradient(circle, transparent 1%, #f2f2f2 1%) center/15000%'
        : borderShifterHover(primary, err)[0]
    }
 
    
  }

  &:active {
    background-color: ${borderShifterHover(primary, err)[1]};
    background-size: 100%;
    transition: background 0s;
    
  }

`}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  background-position: center;
  transition: background 0.8s;
`;
