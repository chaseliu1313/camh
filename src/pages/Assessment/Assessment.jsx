import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled from "styled-components";
import "./assessment.css";
import Intro from "./intro";
import Simulation from "./Simulation";
import SocialNetworks from "./SocialNetwork";
import Button from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import { Assessment3 } from "../../resource/content";
import {
  TertiaryColor_Tel,
  SecondaryColor_Blk,
  PrimaryLight,
  PrimaryColor,
} from "../../theme/resource";
import { useHistory } from "react-router-dom";
import { fontSize, margin } from "../../theme/resource";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  MobileHightlightCard,
  MobileMain,
} from "../../components/Mobilehightlights";
import { default as MBtn } from "react-bootstrap/Button";
import { useDevice } from "../../hooks/useDevice";
import { assessment1 } from "../../resource/content";
import { video1, video2 } from "../../resource/content";
import ReactPlayer from "react-player";

export default function Assessment() {
  const initialState = [false, true, true];
  const [btnAppeal, setDisplay] = useState(false);
  const [pageState, setPageState] = useState(initialState);
  let history = useHistory();
  const { isMobile, isVertical } = useDevice();

  useEffect(() => {
    console.log({ isVertical, isMobile });
  }, [isVertical, isMobile]);

  //mobile

  const [play, setPlay] = useState(false);
  const videoURL = "https://www.youtube.com/watch?v=NRKvtacOVfw";

  //mobile =video
  const viewSwicher = () => {
    if (!pageState[2]) {
      history.push("/assessment/pears");
      return;
    }

    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    copyState[index + 1] = !copyState[index + 1];

    setPageState(copyState);

    setDisplay(copyState[0]);
  };

  const goBack = () => {
    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    if (index > 0) {
      copyState[index - 1] = !copyState[index - 1];
    }

    setPageState(copyState);

    setDisplay(copyState[0]);
  };

  function mobileOnclickNext() {
    if (!pageState[0]) {
      setPageState([true, false, true]);
      return;
    }
    if (!pageState[1]) {
      setPageState([true, true, false]);
      return;
    }
    if (!pageState[2]) {
      history.push("/assessment/pears");
      return;
    }
  }

  function mobileOnclickPre() {
    if (!pageState[0]) {
      history.push("/overview");
      setPageState([true, false, true]);
      return;
    }
    if (!pageState[1]) {
      setPageState([false, true, true]);
      return;
    }
    if (!pageState[2]) {
      setPageState([true, false, true]);
      return;
    }
  }

  const getRouteName = () => {
    if (
      pageState[0] === true &&
      pageState[1] === false &&
      pageState[2] === true
    ) {
      return isMobile ? " - Simulation Video" : "Simulation Video";
    }
    if (
      pageState[0] === true &&
      pageState[1] === true &&
      pageState[2] === false
    ) {
      return isMobile
        ? " - Tips for Assessing Depressed youth"
        : "Tips for Assessing Depressed youth";
    }
  };

  return isMobile ? (
    <MobileMain>
      {isVertical ? (
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
            <MBreadCrumb>Current Section: Accessment </MBreadCrumb>
          </MBreadCrumContainer>
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
            }}
          >
            <MTitle>{`Tips for Assessing Depressed Youth ${
              getRouteName() ?? ""
            }`}</MTitle>
            <MobileHightlightCard>
              {!pageState[0] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    {assessment1[0]}
                  </MobileP>
                  <MobileP> {assessment1[1]}</MobileP>
                  <MobileP> {assessment1[2]}</MobileP>
                  <MobileP> {assessment1[3]}</MobileP>

                  <MobileP style={{ marginTop: 16 }}>{assessment1[4]}</MobileP>
                  <Button
                    className="mobile_icd11_btn"
                    primary={false}
                    type=" "
                    height="40px"
                    width="20vw"
                    onClick={() => {}}
                    display
                  >
                    <Paragraph size="3vmin" color="white">
                      ICD-11 Criteria
                    </Paragraph>
                  </Button>
                </div>
              )}
              {!pageState[1] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer
                    url={videoURL}
                    playing={play}
                    controls={true}
                    height="50%"
                    width="100%"
                  />
                  <MobileP style={{ marginTop: 8 }}> {video1}</MobileP>
                  <MobileP> {video2}</MobileP>
                </div>
              )}
              {!pageState[2] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[0].title}
                  </MobileP>
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[1].title}
                  </MobileP>
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[2].title}
                  </MobileP>
                  {Assessment3[2].content.map((c, index) => (
                    <MobileP key={index}>{c}</MobileP>
                  ))}
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
                    backgroundColor: pageState[0] ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: pageState[1] ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: pageState[2] ? PrimaryColor : PrimaryLight,
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
            <MBreadCrumb>Current Section: Accessment </MBreadCrumb>
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
            <Link to="/treatment">
              <Button
                primary={true}
                type="outlined"
                height="7vh"
                width="20vw"
                display={true}
              >
                <MobileP style={{ margin: "unset" }}>Next Section</MobileP>
              </Button>
            </Link>
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
            <MTitle>{`Tips for Assessing Depressed Youth ${
              getRouteName() ?? ""
            }`}</MTitle>
            <MobileHightlightCard style={{ height: "60%" }}>
              {!pageState[0] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    {assessment1[0]}
                  </MobileP>
                  <MobileP> {assessment1[1]}</MobileP>
                  <MobileP> {assessment1[2]}</MobileP>
                  <MobileP> {assessment1[3]}</MobileP>

                  <MobileP style={{ marginTop: 16 }}>{assessment1[4]}</MobileP>
                  <Button
                    className="mobile_icd11_btn"
                    primary={false}
                    type=" "
                    height="40px"
                    width="20vw"
                    onClick={() => {}}
                    display
                  >
                    <Paragraph size="3vmin" color="white">
                      ICD-11 Criteria
                    </Paragraph>
                  </Button>
                </div>
              )}
              {!pageState[1] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer
                    url={videoURL}
                    playing={play}
                    controls={true}
                    height="200px"
                    width="100%"
                  />
                  <MobileP style={{ marginTop: 8 }}> {video1}</MobileP>
                  <MobileP> {video2}</MobileP>
                </div>
              )}
              {!pageState[2] && (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 8,
                    color: SecondaryColor_Blk,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[0].title}
                  </MobileP>
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[1].title}
                  </MobileP>
                  <MobileP style={{ fontWeight: "bold" }}>
                    {Assessment3[2].title}
                  </MobileP>
                  {Assessment3[2].content.map((c, index) => (
                    <MobileP key={index}>{c}</MobileP>
                  ))}
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
                  backgroundColor: pageState[0] ? PrimaryColor : PrimaryLight,
                }}
              ></div>
              <div
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: pageState[1] ? PrimaryColor : PrimaryLight,
                }}
              ></div>
              <div
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: pageState[2] ? PrimaryColor : PrimaryLight,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </MobileMain>
  ) : (
    <Container id="assess_landing">
      <div
        className="breadcrumb"
        style={{
          height: 20,
          position: "absolute",
          top: 0,
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
            setPageState([false, true, true]);
          }}
        >
          Assessment
        </p>
        {pageState[0] === true && (
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
        )}
        <p style={{ fontSize: 14, color: "black" }}>{getRouteName()}</p>
      </div>
      <Heading
        size={fontSize.title}
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin={`${margin}px 0`}
        type="h1"
        className="pageTitle"
      >
        Tips for Assessing Depressed Youth
      </Heading>
      <Intro hide={pageState[0]} />
      <Simulation hide={pageState[1]} />
      <SocialNetworks hide={pageState[2]} />

      <BtnGroup>
        <Button
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display={btnAppeal}
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
}

const Container = styled.div`
  height: auto;
  width: 100%;
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
