import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  PrimaryColor,
  DarkPurple,
  Error_R,
  SecondaryColor_Tel,
  SecondaryColor_Blk,
  Error_R_Hover,
  TertiaryColor_Tel,
  Correct_G,
} from '../../theme/resource';

export default function Checkbox({ height, width, margin, padding, content }) {
  const [checked, setCheck] = useState(false);

  return (
    <Container
      height={height}
      width={width}
      maring={margin}
      padding={padding}
      checked={checked}
    >
      <Input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setCheck(!checked);
        }}
      />
      <Label
        checked={checked}
        onClick={() => {
          setCheck(!checked);
          console.log(checked);
        }}
        height={height}
      >
        {content}
      </Label>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0 0 4px #999;
  position: relative;
  display: block;
  ${({ height, width, margin, padding }) => `
  height: ${height || '7vh'};
  width: ${width || '40vw'};
  margin: ${margin || '10px 0'};
  padding: ${padding || '0.25em 1em'};
  
  `}
`;

const Input = styled.input`
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 50%;
  width: 30px;
  height: 30px;
  order: 1;
  z-index: 2;
  transform: translateY(-50%);
  visibility: hidden;
`;

const Label = styled.label`
  font-family: Open Sans;
  line-height: ${({ height }) => height || '7vh'};
  color: ${({ checked }) => (checked ? '#fff' : SecondaryColor_Blk)};
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;

  &:before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: '';
    background-color: ${PrimaryColor};
    position: absolute;
    left: 50%;
    top: 50%;
    ${({ checked }) =>
      checked
        ? 'transform: translate(-50%, -50%) scale3d(56, 56, 1);'
        : 'transform: translate(-50%, -50%) scale3d(1, 1, 1);'}
    ${({ checked }) =>
      checked
        ? 'opacity: 1;'
        : 'opacity: 0;'}
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:after {
    width: 20px;
    height: 20px;
    content: '';
    border: 2px solid #d1d7dc;

    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    background-repeat: no-repeat;
    background-position: 2px 3px;

    ${({ checked }) =>
      checked
        ? 'background-color:' + Correct_G + ';'
        : 'background-color: #fff;'}

    z-index: 2;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;
