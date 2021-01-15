import React from 'react';
import Heading, { Paragraph } from '../Text/Heading';
import styled from 'styled-components';
import { SecondaryColor_Blk } from '../../theme/resource';
import './va.css';

import Button from '../Buttons/Buttons';

const va = ({ length, info }) => {
  return (
    <Container length={length}>
      {info
        ? info.map((i, index) => <Cards key={index} content={i} />)
        : 'no content loaded'}
    </Container>
  );
};

export const Cards = (props) => {
  const { content } = props;

  const defaultMargin = '3vh 0 0 0';
  return (
    <VaCard className="va_card">
      <VaSub2 className="va_content">
        <Heading
          type="h4"
          weight="bold"
          size="2vmin"
          align="center"
          margin={defaultMargin}
          className=""
        >
          Hover to see detail on&nbsp; {content.heading}
        </Heading>
      </VaSub2>
      <VaSub1 className="va_content">
        <>
          {!content.description ? (
            content.content.map((c, index) =>
              c.includes('website') ? (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  · Visit the &nbsp;
                  <a
                    className="ov_a"
                    href="https://www.prevnet.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PREVNet
                  </a>
                  &nbsp; website
                </Paragraph>
              ) : c.includes('· See “Resources for Youth” for more tips') ? (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  See our&nbsp;
                  <a
                    className="ov_a"
                    href="resources/tools/video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Psychoeducation Tools
                  </a>
                  &nbsp;for more tips
                </Paragraph>
              ) : c.includes('We have developed animated videos for youth') ? (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  We have developed&nbsp;
                  <a
                    className="ov_a"
                    href="resources/tools/video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    animated videos
                  </a>
                  &nbsp; for youth on how food, movement and sleep can impact
                  mood.
                </Paragraph>
              ) : c.includes('Psychoeducation Tools') ? (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  See our&nbsp;
                  <a
                    className="ov_a"
                    href="resources/tools/video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Psychoeducation Tools
                  </a>
                  &nbsp; for more tips
                </Paragraph>
              ) : (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  {c}
                </Paragraph>
              )
            )
          ) : content.description === 'mild' ? (
            <>
              <Heading
                type="h4"
                weight="bold"
                size="2vmin"
                align="center"
                margin={defaultMargin}
              >
                {content.subHeading1}
              </Heading>
              {content.content.map((c, index) => (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin="1vh 0 0 0"
                  key={index}
                >
                  {c}
                </Paragraph>
              ))}
            </>
          ) : (
            <>
              <Heading
                type="h4"
                weight="normal"
                size="2.5vmin"
                align="center"
                margin={defaultMargin}
              >
                {content.descripton}
              </Heading>

              <Heading
                type="h4"
                weight="bold"
                size="2vmin"
                align="center"
                margin={defaultMargin}
              >
                {content.subHeading1}
              </Heading>
              {content.content.map((c, index) => (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin="1vh 0 0 0"
                  key={index}
                >
                  {c}
                </Paragraph>
              ))}

              <Heading
                type="h4"
                weight="bold"
                size="2vmin"
                align="center"
                margin={defaultMargin}
              >
                {content.subHeading2}
              </Heading>

              {content.subContent2.map((c2, index) => (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                  key={index}
                >
                  {c2}
                </Paragraph>
              ))}
            </>
          )}

          {content.img_url ? (
            <>
              <a
                href="https://www.camh.ca/-/media/files/mood-foundations-package-youth-pdf.pdf"
                target="_blank"
                download
                rel="noopener noreferrer"
              >
                <Button
                  primary={false}
                  height="5vh"
                  width="10vw"
                  display
                  margin="25% 0 0 25%"
                >
                  Download
                </Button>
              </a>
            </>
          ) : (
            ''
          )}
        </>
      </VaSub1>
      <div className="va_cardHead">
        <Heading
          type="h4"
          weight="normal"
          size="3vmin"
          align="center"
          color="white"
        >
          {content.heading}
        </Heading>
      </div>
    </VaCard>
  );
};

//css
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  transform: skew(2deg);

  ${({ length }) => `&:not(:nth-child(${length})) {
    margin-right: 1em;
  }`}
`;

const VaSub1 = styled.div`
  display: none;
`;

const VaSub2 = styled.div``;

const VaCard = styled.div`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  &: hover ${VaSub2} {
    display: none;
  }
  &: hover ${VaSub1} {
    display: block;
  }

  @media (max-width: 2000px) {
    &: hover {
      width: 100vw !important;
    }
  }
`;

export default va;
