import React from 'react';
import Heading, { Paragraph } from '../Text/Heading';
import styled from 'styled-components';
import { SecondaryColor_Blk } from '../../theme/resource';
import './va.css';
import fs from '../../resource/factsheet.png';
import Button from '../Buttons/Buttons';

const va = ({ length, info }) => {
  return (
    <Container length={length}>
      {info ? info.map((i) => <Cards content={i} />) : 'no content loaded'}
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
            content.content.map((c) =>
              c.includes('website') ? (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                >
                  · Visit the PREVNet website &nbsp;
                  <a className="ov_a" href="https://www.prevnet.ca/">
                    PREVNet
                  </a>
                </Paragraph>
              ) : (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                >
                  {c}
                </Paragraph>
              )
            )
          ) : content.description ? (
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
              {content.content.map((c) => (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin="1vh 0 0 0"
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

              {content.subContent2.map((c2) => (
                <Paragraph
                  size="2.2vmin"
                  color={SecondaryColor_Blk}
                  margin={defaultMargin}
                >
                  {c2}
                </Paragraph>
              ))}
            </>
          ) : (
            ''
          )}

          {content.img_url ? (
            <>
              <IMG src={fs} />
              <a
                href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=4&fname=Mood-Foundations-Package-Youth-pdf.pdf"
                target="_blank"
                download
                rel="noopener noreferrer"
              >
                <Button
                  primary={false}
                  height="7vh"
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

const IMG = styled.img`
  height: auto;
  width: auto;
  margin: 3vh 0 0 0;
`;
export default va;
