import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled from "styled-components";
import "./assessment.css";
import { Carousel, Row } from "react-bootstrap";
import { pears } from "../../resource/content";
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  PrimaryLight,
  PrimaryColor,
} from "../../theme/resource";
import Button from "../../components/Buttons/Buttons";
import { useHistory } from "react-router-dom";
import idea from "../../resource/idea.svg";
import { fontSize, margin } from "../../theme/resource";
import { default as MBtn } from "react-bootstrap/Button";
import { useDevice } from "../../hooks/useDevice";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  MobileHightlightCard,
  MobileMain,
} from "../../components/Mobilehightlights";
import { UAParser } from "ua-parser-js";
const Pears = () => {
  //handlers to routes
  const [isV, setState] = useState(window.innerWidth < window.innerHeight);
  const [mShowIndex, setIndex] = useState(0);
  let parser = new UAParser();
  let history = useHistory();
  let { isMobile, isVertical } = useDevice();

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setState(true);
    } else {
      setState(false);
    }
  }, [window.innerWidth, window.innerHeight]);

  const goBack = () => {
    history.push("/assessment");
  };
  const viewSwicher = () => {
    history.push("/assessment/tools");
  };
  const fontWeight = "normal";
  const inv = 10000;
  const Pmarging = "20px 0";

  function mobileOnclickNext() {
    if (mShowIndex < 2) {
      setIndex(mShowIndex + 1);
    } else {
      history.push("/assessment/tools");
    }
  }

  function mobileOnclickPre() {
    if (mShowIndex > 0) {
      setIndex(mShowIndex - 1);
    } else {
      history.push("/assessment");
    }
  }

  return isMobile ? (
    <MobileMain>
      {isV ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <MBreadCrumContainer>
            <MBreadCrumb>Current Section: Assessment </MBreadCrumb>
          </MBreadCrumContainer>
          <div
            style={{
              height: "85%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 24,
            }}
          >
            <MTitle>Assessment Pearls</MTitle>
            <MobileHightlightCard>
              {mShowIndex == 0 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Setting up a comfortable environment
                  </MobileP>
                  <MobileP>{pears[5]}</MobileP>
                  <MobileP>{pears[6]}</MobileP>
                </div>
              )}
              {mShowIndex == 1 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Depression in teens can be missed because:
                  </MobileP>
                  <MobileP>{pears[0]}</MobileP>
                  <MobileP>{pears[1]}</MobileP>
                  <MobileP>{pears[2]}</MobileP>
                </div>
              )}
              {mShowIndex == 2 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Assess for complexity and risk
                  </MobileP>
                  <MobileP
                    margin={Pmarging}
                    color={SecondaryColor_Blk}
                    weight={fontWeight}
                  >
                    {pears[3]}
                  </MobileP>
                  <MobileP
                    margin={Pmarging}
                    color={SecondaryColor_Blk}
                    weight={fontWeight}
                  >
                    {pears[4]}
                  </MobileP>
                </div>
              )}
            </MobileHightlightCard>
            <div
              style={{
                height: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "flex-end",
                padding: "8px 25px 0px 25px",
              }}
            >
              <MBtn
                variant="outline-primary"
                onClick={() => {
                  mobileOnclickPre();
                }}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  boxShadow: "none",
                }}
              >
                <MdOutlineKeyboardArrowLeft />
                <p style={{ margin: "unset" }}>Prev</p>
              </MBtn>
              <div
                style={{
                  width: "35px",
                  height: "100%",
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor:
                      mShowIndex === 0 ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor:
                      mShowIndex === 1 ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor:
                      mShowIndex === 2 ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
              </div>
              <MBtn
                variant="outline-primary"
                onClick={() => {
                  mobileOnclickNext();
                }}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  boxShadow: "none",
                }}
              >
                <p style={{ margin: "unset" }}>Next</p>
                <MdOutlineKeyboardArrowRight />
              </MBtn>
            </div>
          </div>
          <Button
            primary={true}
            type="outlined"
            height="7vh"
            width="20vw"
            display={true}
            className="mobile_next_section_btn"
            onClick={viewSwicher}
          >
            <MobileP style={{ margin: "unset" }}>Next Section</MobileP>
          </Button>
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <MBreadCrumContainer>
            <MBreadCrumb>Current Section: Assessment </MBreadCrumb>
          </MBreadCrumContainer>
          <div
            style={{
              width: "35%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "center",
                padding: "8px",
              }}
            >
              <MBtn
                variant="outline-primary"
                onClick={() => {
                  mobileOnclickPre();
                }}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  boxShadow: "none",
                }}
              >
                <MdOutlineKeyboardArrowLeft />
                <p style={{ margin: "unset" }}>Prev</p>
              </MBtn>
              <MBtn
                variant="outline-primary"
                onClick={() => {
                  mobileOnclickNext();
                }}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  boxShadow: "none",
                }}
              >
                <p style={{ margin: "unset" }}>Next</p>
                <MdOutlineKeyboardArrowRight />
              </MBtn>
            </div>
            <Button
              primary={true}
              type="outlined"
              height="7vh"
              width="20vw"
              display={true}
              onClick={viewSwicher}
            >
              <MobileP style={{ margin: "unset" }}>Next Section</MobileP>
            </Button>
          </div>
          <div
            id="column_left_m_h"
            style={{
              width: "65%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MTitle>Assessment Pearls</MTitle>
            <MobileHightlightCard style={{ height: "60%" }}>
              {mShowIndex == 0 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Setting up a comfortable environment
                  </MobileP>
                  <MobileP>{pears[5]}</MobileP>
                  <MobileP>{pears[6]}</MobileP>
                </div>
              )}
              {mShowIndex == 1 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Depression in teens can be missed because:
                  </MobileP>
                  <MobileP>{pears[0]}</MobileP>
                  <MobileP>{pears[1]}</MobileP>
                  <MobileP>{pears[2]}</MobileP>
                </div>
              )}
              {mShowIndex == 2 && (
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 24,
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    Assess for complexity and risk
                  </MobileP>
                  <MobileP
                    margin={Pmarging}
                    color={SecondaryColor_Blk}
                    weight={fontWeight}
                  >
                    {pears[3]}
                  </MobileP>
                  <MobileP
                    margin={Pmarging}
                    color={SecondaryColor_Blk}
                    weight={fontWeight}
                  >
                    {pears[4]}
                  </MobileP>
                </div>
              )}
            </MobileHightlightCard>
            <div
              style={{
                width: "35px",
                height: "20px",
                alignSelf: "center",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor:
                    mShowIndex === 0 ? PrimaryColor : PrimaryLight,
                }}
              ></div>
              <div
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor:
                    mShowIndex === 1 ? PrimaryColor : PrimaryLight,
                }}
              ></div>
              <div
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor:
                    mShowIndex === 2 ? PrimaryColor : PrimaryLight,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </MobileMain>
  ) : (
    <Container>
      <div
        className="breadcrumb"
        style={{
          height: 20,
          position: "absolute",
          top: 10,
          left: 0,
          paddingLeft: 10,
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{ fontSize: 14, cursor: "pointer", color: "black" }}
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </p>
        <p
          style={{
            fontSize: 14,
            color: "black",
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          {" >> "}
        </p>
        <p
          style={{ fontSize: 14, cursor: "pointer", color: "black" }}
          onClick={() => {
            history.push("/Assessment");
          }}
        >
          Assessment
        </p>
        <p
          style={{
            fontSize: 14,
            color: "black",
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          {" >> "}
        </p>
        <p style={{ fontSize: 14, color: "black" }}>Assessment Pearls</p>
      </div>
      <Heading
        size={fontSize.title}
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin={`${margin}px 0 ${margin * 1.5}px 0`}
        id="assess_landing"
        className="pageTitle"
      >
        Assessment Pearls
      </Heading>
      <Row>
        <div
          className="carousel_row"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel className="pearl_card" interval={inv} slide="false">
            <Carousel.Item className="ov_slide" id="pearl_slide" tabIndex="0">
              <Heading
                size={fontSize.title2}
                weight="bold"
                align="center"
                color={SecondaryColor_Blk}
                margin="35px 0"
                id="assess_seconday"
              >
                Setting up a comfortable environment
              </Heading>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[5]}
              </Paragraph>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[6]}
              </Paragraph>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="pearl_slide" tabIndex="1">
              <Heading
                size={fontSize.title2}
                weight="bold"
                align="center"
                color={SecondaryColor_Blk}
                margin="35px 0"
                id="assess_seconday"
              >
                Depression in teens can be missed because:
              </Heading>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[0]}
              </Paragraph>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[1]}
              </Paragraph>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[2]}
              </Paragraph>
            </Carousel.Item>
            <Carousel.Item className="ov_slide" id="pearl_slide" tabIndex="2">
              <Heading
                size={fontSize.title2}
                weight="bold"
                align="center"
                color={SecondaryColor_Blk}
                margin="35px 0"
                id="assess_seconday"
              >
                Assess for complexity and risk
              </Heading>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[3]}
              </Paragraph>
              <Paragraph
                margin={Pmarging}
                color={SecondaryColor_Blk}
                weight={fontWeight}
              >
                {pears[4]}
              </Paragraph>
            </Carousel.Item>
          </Carousel>
        </div>
      </Row>
      <BtnGroup id="btn_group">
        <Button
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display
        >
          <Paragraph color={TertiaryColor_Tel}>Previous</Paragraph>
        </Button>
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display
        >
          <Paragraph>Next</Paragraph>
        </Button>
      </BtnGroup>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  transition: all 1s linear;
  background-image: url(${idea});
  background-repeat: no-repeat;
  background-size: 75% 50%;
  background-position: 220% 110%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;

const MBreadCrumb = styled.p`
  font-size: 10px;
`;

const MBreadCrumContainer = styled.div`
  width: 180px;
  position: absolute;
  left: 0px;
  top: 4px;
`;

const MTitle = styled.h3`
  font-size: 20px;
  text-align: center;
  padding-bottom: 8px;
`;

const MobileP = styled.p`
  font-size: 16px;
`;

export default Pears;
