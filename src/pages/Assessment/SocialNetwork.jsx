import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Assessment3 } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';
import { Paragraph } from '../../components/Text/Heading';
import { enterAni, exitAni } from '../../theme/animation';
import { fontSize, margin } from '../../theme/resource';
import Card from '../../components/Cards/Card';
import { useWindowResize } from '../../hooks/useWindowResize';

export default function SocialNetworks(props) {
  const [hide, setHide] = useState(false);
  const { size } = useWindowResize();
  const PaddingP = size.height < 800 ? '0' : '10px 15px';
  const MarginP = '5px 0';
  useEffect(() => {
    let a = props.hide;
    setHide(a);
  }, [props.hide]);

  return (
    <Container id="assess_intro" hide={hide}>
      <Card
        height="60vh"
        width="80vw"
        padding={size.width < 1280 ? '5px 10px' : '20px 50px'}
      >
        <Paragraph
          weight="bold"
          size={fontSize.subTitle}
          color={SecondaryColor_Blk}
          margin={MarginP}
        >
          {Assessment3[0].title}
        </Paragraph>
        <Paragraph
          weight="bold"
          size={fontSize.subTitle}
          color={SecondaryColor_Blk}
          margin={MarginP}
        >
          {Assessment3[1].title}
        </Paragraph>
        <Paragraph
          weight="bold"
          size={fontSize.subTitle}
          color={SecondaryColor_Blk}
          margin={`5px 0 ${margin * 2}px 0 `}
        >
          {Assessment3[2].title}
        </Paragraph>
        {Assessment3[2].content.map((c, index) => (
          <Paragraph
            weight="normal"
            size={fontSize.subTitle}
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
  padding: 3vmin 6vmin 2vmin 6vmin;
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
          display: flex;
        `}
`;
