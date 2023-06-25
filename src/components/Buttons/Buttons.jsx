import React from "react";
import styled from "styled-components";
import {
  PrimaryColor,
  DarkPurple,
  Error_R,
  SecondaryColor_Tel,
  Error_R_Hover,
  TertiaryColor_Tel,
} from "../../theme/resource";
import { useWindowResize } from "../../hooks/useWindowResize";

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
  href,
  display,
  dark,
  className,
}) {
  const { size } = useWindowResize();
  return (
    <Btn
      className={className}
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
      href={href}
      display={display.toString()}
      dark={dark}
      tabIndex={primary ? 0 : 1}
      windowSize={size}
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
    return [DarkPurple, "rgba(74, 25, 97, 0.2)"];
  } else if (e) {
    return [Error_R_Hover, "rgba(228, 23, 73, 0.2)"];
  } else if (!p) {
    return [TertiaryColor_Tel, "rgba(122, 195, 204, 0.3)"];
  }
};

const Btn = styled.button`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  text-decoration: none !important;
  text-transform: uppercase;
  min-height: 25px;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  text-align: center;
  outline: none;

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
    display,
    dark,
    windowSize,
  }) => `
  > p {
    font-size: ${windowSize.width <= 1024 ? "12px" : "18px"}
  }
height: ${height || "10vh"};
width: ${width || "15vw"};
margin: ${margin || "1em"};
padding: ${padding || "0.25em 1em"};
border: 1.5px solid ${dark ? DarkPurple : colorShifter(primary, err)};
color: ${type === "outlined" ? colorShifter(primary, err) : "white"};
background-color: ${
    type === "outlined"
      ? "white"
      : dark
      ? DarkPurple
      : colorShifter(primary, err)
  };
display: ${display === "true" ? "inline-flex" : "none"};
&:hover {
    border: 1.5px solid ${borderShifterHover(primary, err)[0]};
    text-decoration: none !important;
    background: ${
      type === "outlined"
        ? "#f2f2f2 radial-gradient(circle, transparent 1%, #f2f2f2 1%) center/15000%"
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

  @media (max-width: 425px) {
    width: 35vw;
    height: 5vh;
  }
`;
