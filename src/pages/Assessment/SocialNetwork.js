import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Assessment3 } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';
import { Paragraph, SubText } from '../../components/Text/Heading';
import { enterAni, exitAni } from '../../theme/animation';
import Card from '../../components/Cards/Card';

export default function SocialNetworks(props) {
  const [hide, setHide] = useState(false);
  const PaddingP = '10px 15px';
  const MarginP = '5px 0';
  useEffect(() => {
    let a = props.hide;
    setHide(a);
  }, [props.hide]);

  return (
    <Container id="assess_intro" hide={hide}>
      <Card height="60vh" width="80vw" padding="20px 50px">
        <Paragraph
          weight="bold"
          size="2.5vmin"
          color={SecondaryColor_Blk}
          margin={MarginP}
        >
          {Assessment3[0].title}
        </Paragraph>
        <Paragraph
          weight="bold"
          size="2.5vmin"
          color={SecondaryColor_Blk}
          margin={MarginP}
        >
          {Assessment3[1].title}
        </Paragraph>
        <Paragraph
          weight="bold"
          size="2.5vmin"
          color={SecondaryColor_Blk}
          margin={MarginP}
        >
          {Assessment3[2].title}
        </Paragraph>
        {Assessment3[2].content.map((c, index) => (
          <Paragraph
            weight="normal"
            size="2.2vmin"
            color={SecondaryColor_Blk}
            key={index}
            padding={PaddingP}
          >
            {c}
          </Paragraph>
        ))}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 6vmin 6vmin 2vmin 6vmin;
  overflow: hidden;
  transition: all 1s linear;
  ${({ hide }) =>
    hide
      ? css`
          animation: ${exitAni} 0.5s linear;
          animation-fill-mode: forwards;
          display: none;
        `
      : css`
          animation: ${enterAni} 0.5s linear;
          animation-fill-mode: forwards;
          diplay: flex;
        `}
`;
