import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { guide } from '../resource/content';
import Button from '../components/Buttons/Buttons';
import Heading, { Paragraph } from '../components/Text/Heading';
import {
  SecondaryColor_Blk,
  fontSize,
  margin,
  PrimaryColor,
} from '../theme/resource';

import { useWindowResize } from '../hooks/useWindowResize';
export default function Guide() {
  const { size } = useWindowResize();
  const fontWeight = 'normal';
  const history = useHistory();

  return (
    <Main height={size.height}>
      <Heading
        color={SecondaryColor_Blk}
        size={size.height < 900 ? fontSize.subTitle : fontSize.title}
        weight="bold"
        align="center"
        margin={`${margin}px 0`}
        type="h1"
      >
        {guide.title}
      </Heading>
      <Paragraph
        color={SecondaryColor_Blk}
        weight={fontWeight}
        size={size.height < 900 ? fontSize.subtext : fontSize.subTitle}
        align="center"
        margin={0}
      >
        {guide.description}
      </Paragraph>
      {guide.content.map((g, i) => (
        <ContentBox
          key={g.title}
          border={
            i === guide.content.length - 1
              ? `1px solid ${PrimaryColor}`
              : `none`
          }
        >
          <TitleBox>
            <Heading
              color="#FFFFFF"
              size={size.height < 900 ? fontSize.subtext : fontSize.subTitle}
              weight="bold"
              align="center"
              type="h4"
              margin={0}
            >
              {g.title}
            </Heading>
          </TitleBox>
          <DescriptionBox>
            <Paragraph
              size={size.width < 900 ? fontSize.subtext2 : fontSize.subtext}
              color="black"
              lineHeight={size.width < 900 ? 1.3 : 1.5}
              margin={0}
            >
              {g.description}
            </Paragraph>
          </DescriptionBox>
        </ContentBox>
      ))}
      <ButtonContainer>
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          display={true}
          onClick={() => {
            history.push('/overview');
          }}
        >
          <Paragraph>Next Section</Paragraph>
        </Button>
      </ButtonContainer>
    </Main>
  );
}

//animations
const enterAni = keyframes`

0% {
  opacity: 0;
 


}
50%{
  opacity:0.5;
 
}
 
100%{
  opacity:1;
  
}
`;

//component styling
const Main = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
  ${({ height }) =>
    height < 800 ? 'padding: 15% 20%;' : `padding: 1% 10% 5% 10%;`}
`;

const ContentBox = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${PrimaryColor};
  border-right: 1px solid ${PrimaryColor};
  box-sizing: border-box;
  ${({ border }) => `border-bottom: ${border}; `}
`;

const TitleBox = styled.div`
  height: 100%;
  width: 20%;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  word-break: break-all;
`;

const DescriptionBox = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  padding: 8px;
  overflow: auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;
