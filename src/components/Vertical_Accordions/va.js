import React, { useState } from 'react';
import Heading, { Paragraph, SubText } from '../Text/Heading';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor_Blk } from '../../theme/resource';
import './va.css';
import fs from '../../resource/factsheet2.svg';
import Button from '../Buttons/Buttons';

const va = ({ length, info }) => {
  return (
    <Container length={length}>
      {info ? info.map((i) => <Cards content={i} />) : 'no content loaded'}
    </Container>
  );
};

export const Cards = (props) => {
  const [show, setShow] = useState(false);

  const { content } = props;

  //handle hover event
  const handleHover = () => {
    setShow(true);
  };
  //handle hover event ends
  const handleMouseDown = () => {
    setShow(false);
  };

  const defaultMargin = '3vh 0 0 0';
  return (
    <VaCard
      className="va_card"
      onMouseOver={() => handleHover()}
      onMouseDown={() => handleMouseDown()}
    >
      <div className="va_content">
        {show ? (
          <>
            {!content.description ? (
              content.content.map((c) =>
                c.includes('website') ? (
                  <Paragraph
                    size="2vmin"
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
                    size="2vmin"
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
                    size="2vmin"
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
                    size="2vmin"
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
                <IMG src={fs} alt="fact sheet" />
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
        ) : (
          <Heading
            type="h4"
            weight="bold"
            size="2vmin"
            align="center"
            margin={defaultMargin}
          >
            Expand to reveal detail on&nbsp; {content.heading}
          </Heading>
        )}
      </div>
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

const VaCard = styled.div`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const IMG = styled.img`
  height: auto;
  width: 10vw;
  margin: 3vh 0 0 0;
`;
export default va;
