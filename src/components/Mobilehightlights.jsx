import React, { useState, useEffect, useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

export const MobileHightlightCard = (props) => {
  return <CardV style={{ ...props.style }}>{props.children}</CardV>;
};

const CardV = styled.div`
  height: 75%;
  overflow: auto;
  width: 80%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const MobileMain = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  background-color: #c3c6e7;
  position: relative;
`;
