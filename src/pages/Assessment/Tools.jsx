import React, { useState } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import Card from "../../components/Cards/Card";
import StepCard from "../../components/Cards/StepCard";
import { Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import { exitAni2, enterAni3 } from "../../theme/animation";
import SeverityCard from "./Severity";
import { fontSize, margin } from "../../theme/resource";
import { Severity } from "../../resource/content";
import { tools, toolLink1, toolLink2 } from "../../resource/content";
import {
  SecondaryColor_Blk,
  TertiaryColor_Tel,
  SecondaryColor_Yel,
  PrimaryLight,
  PrimaryColor,
} from "../../theme/resource";
import Button from "../../components/Buttons/Buttons";
import { useHistory } from "react-router-dom";
import {
  MobileHightlightCard,
  MobileMain,
} from "../../components/Mobilehightlights";
import { default as MBtn } from "react-bootstrap/Button";
import { useDevice } from "../../hooks/useDevice";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Tools = () => {
  const [showContent, setContent] = useState([tools[3], tools[4]]);
  const [show, setShow] = useState(false);
  const [severityIndex, setSeverityIndex] = useState(0);
  let { isMobile, isVertical } = useDevice();

  const goBack = () => {
    if (show) {
      setShow(false);
    } else {
      history.push("/assessment/pears");
    }
  };
  const viewSwicher = () => {
    if (!show) {
      setShow(true);
    } else {
      history.push("/treatment");
    }
  };

  const jump = (index) => {
    index === 1
      ? window.open(toolLink2, "_blank")
      : window.open(toolLink1, "_blank");
  };

  const mouseOver = (index) => {
    let replaceArr = [...showContent];
    let replace1 = tools[6];
    let replace2 = tools[7];

    index === 0 ? (replaceArr[0] = replace1) : (replaceArr[1] = replace2);

    setContent(replaceArr);
  };

  const mouseOut = (index) => {
    let replaceArr = [...showContent];
    let replace1 = tools[3];
    let replace2 = tools[4];

    index === 0 ? (replaceArr[0] = replace1) : (replaceArr[1] = replace2);
    setContent(replaceArr);
  };
  const Pmarging = "20px 0";
  let history = useHistory();

  function mobileOnclickNext() {
    if (show) {
      history.push("/treatment");
    }

    setShow(!show);
  }

  function mobileOnclickPre() {
    if (!show) {
      history.push("/assessment/pears");
      return;
    }
    setShow(!show);
  }

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
            <MBreadCrumb>
              Current Section:
              {show ? " Assessing Depression Severity" : " Assessment Tools"}
            </MBreadCrumb>
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
            <MTitle>
              {show ? "Assessing Depression Severity" : "Assessment Tools"}
            </MTitle>
            <MobileHightlightCard>
              {show ? (
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
                  <MobileP> {Severity[0]}</MobileP>
                  <MobileP> {Severity[1] + Severity[2]}</MobileP>

                  <div
                    style={{
                      height: 50,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(0);
                      }}
                      style={{
                        height: 40,
                        width: 80,
                        color: severityIndex === 0 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 0 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",
                        borderRadius: 0,
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Mild</MobileP>
                    </MBtn>
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(1);
                      }}
                      style={{
                        borderRadius: 0,
                        height: 40,
                        width: 80,
                        color: severityIndex === 1 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 1 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",
                        borderLeft: "none",
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Moderate</MobileP>
                    </MBtn>
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(2);
                      }}
                      style={{
                        borderRadius: 0,
                        height: 40,
                        width: 80,
                        color: severityIndex === 2 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 2 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",

                        borderLeft: "none",
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Severe</MobileP>
                    </MBtn>
                  </div>
                  <div
                    style={{
                      height: 150,
                      width: 240,
                      borderLeft: `1px solid ${PrimaryColor}`,
                      borderBottom: `1px solid ${PrimaryColor}`,
                      borderRight: `1px solid ${PrimaryColor}`,
                      alignSelf: "center",
                      marginTop: -5,
                      overflow: "auto",
                      padding: 8,
                    }}
                  >
                    {severityIndex == 0 && <MobileP>{Severity[3]}</MobileP>}
                    {severityIndex == 1 && <MobileP>{Severity[4]}</MobileP>}
                    {severityIndex == 2 && <MobileP>{Severity[5]}</MobileP>}
                  </div>
                </div>
              ) : (
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
                    overflow: "auto",
                  }}
                >
                  <MobileP>
                    {tools[0] + " Learn more in our "}
                    <a href="/resources/tools/assessment/animateVideos">
                      short animated videos.
                    </a>
                    {tools[1]}
                  </MobileP>

                  <div
                    style={{
                      minHeight: 100,
                      maxHeight: 100,
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: TertiaryColor_Tel,
                      alignSelf: "center",
                      borderRadius: 5,
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      window.open(toolLink1, "_blank");
                    }}
                  >
                    <MobileP style={{ margin: "unset" }}>{tools[3]}</MobileP>
                  </div>
                  <MobileP style={{ fontSize: 10, alignSelf: "center" }}>
                    *{tools[4]}
                  </MobileP>

                  <div
                    style={{
                      minHeight: 100,
                      maxHeight: 100,
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: SecondaryColor_Yel,
                      alignSelf: "center",
                      borderRadius: 5,
                      marginTop: 16,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(toolLink2, "_blank");
                    }}
                  >
                    <MobileP style={{ margin: "unset" }}>{tools[4]}</MobileP>
                  </div>
                  <MobileP
                    style={{
                      fontSize: 10,
                      alignSelf: "center",
                      textAlign: "center",
                    }}
                  >
                    *{tools[6]}
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
                    backgroundColor: show ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: !show ? PrimaryColor : PrimaryLight,
                  }}
                ></div>
              </div>
              <MBtn
                variant="outline-primary"
                onClick={mobileOnclickNext}
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
            onClick={() => {
              history.push("/treatment");
            }}
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
            <MBreadCrumb>
              Current Section:
              {show ? " Assessing Depression Severity" : " Assessment Tools"}
            </MBreadCrumb>
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
                onClick={mobileOnclickNext}
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
              onClick={() => {
                history.push("/treatment");
              }}
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
            <MTitle>
              {show ? "Assessing Depression Severity" : "Assessment Tools"}
            </MTitle>
            <MobileHightlightCard style={{ height: "60%" }}>
              {show ? (
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
                  <MobileP> {Severity[0]}</MobileP>
                  <MobileP> {Severity[1] + Severity[2]}</MobileP>

                  <div
                    style={{
                      height: 50,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(0);
                      }}
                      style={{
                        height: 40,
                        width: 80,
                        color: severityIndex === 0 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 0 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",
                        borderRadius: 0,
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Mild</MobileP>
                    </MBtn>
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(1);
                      }}
                      style={{
                        borderRadius: 0,
                        height: 40,
                        width: 80,
                        color: severityIndex === 1 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 1 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",
                        borderLeft: "none",
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Moderate</MobileP>
                    </MBtn>
                    <MBtn
                      variant="outline-primary"
                      onClick={() => {
                        setSeverityIndex(2);
                      }}
                      style={{
                        borderRadius: 0,
                        height: 40,
                        width: 80,
                        color: severityIndex === 2 ? "white" : PrimaryColor,
                        borderColor: PrimaryColor,
                        backgroundColor:
                          severityIndex === 2 ? PrimaryColor : "transparent",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        boxShadow: "none",

                        borderLeft: "none",
                      }}
                    >
                      <MobileP style={{ margin: "unset" }}>Severe</MobileP>
                    </MBtn>
                  </div>
                  <div
                    style={{
                      height: 150,
                      width: 240,
                      borderLeft: `1px solid ${PrimaryColor}`,
                      borderBottom: `1px solid ${PrimaryColor}`,
                      borderRight: `1px solid ${PrimaryColor}`,
                      alignSelf: "center",
                      marginTop: -5,
                      overflow: "auto",
                      padding: 8,
                    }}
                  >
                    {severityIndex == 0 && <MobileP>{Severity[3]}</MobileP>}
                    {severityIndex == 1 && <MobileP>{Severity[4]}</MobileP>}
                    {severityIndex == 2 && <MobileP>{Severity[5]}</MobileP>}
                  </div>
                </div>
              ) : (
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
                    overflow: "auto",
                  }}
                >
                  <MobileP>
                    {tools[0] + " Learn more in our "}
                    <a href="/resources/tools/assessment/animateVideos">
                      short animated videos.
                    </a>
                    {tools[1]}
                  </MobileP>

                  <div
                    style={{
                      minHeight: 100,
                      maxHeight: 100,
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: TertiaryColor_Tel,
                      alignSelf: "center",
                      borderRadius: 5,
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      window.open(toolLink1, "_blank");
                    }}
                  >
                    <MobileP style={{ margin: "unset" }}>{tools[3]}</MobileP>
                  </div>
                  <MobileP style={{ fontSize: 10, alignSelf: "center" }}>
                    *{tools[4]}
                  </MobileP>

                  <div
                    style={{
                      minHeight: 100,
                      maxHeight: 100,
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: SecondaryColor_Yel,
                      alignSelf: "center",
                      borderRadius: 5,
                      marginTop: 16,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(toolLink2, "_blank");
                    }}
                  >
                    <MobileP style={{ margin: "unset" }}>{tools[4]}</MobileP>
                  </div>
                  <MobileP
                    style={{
                      fontSize: 10,
                      alignSelf: "center",
                      textAlign: "center",
                    }}
                  >
                    *{tools[6]}
                  </MobileP>
                </div>
              )}
            </MobileHightlightCard>
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
        <p style={{ fontSize: 14, color: "black" }}>
          {" "}
          {show ? "Assessing Depression Severity" : "Assessment Tools"}
        </p>
      </div>
      <Heading
        size={fontSize.title}
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        className="pageTitle"
        mmargin={`${margin}px 0 ${margin * 1.5}px 0`}
      >
        {show ? "Assessing Depression Severity" : "Assessment Tools"}
      </Heading>
      <div id="tools_views" tabIndex="0">
        <SubContainer show={!show}>
          <Card height="50vh" width="80vw" padding="50px 20px">
            <Paragraph
              margin={Pmarging}
              color={SecondaryColor_Blk}
              weight="normal"
            >
              {tools[0] + " Learn more in our "}
              <a href="/resources/tools/assessment/animateVideos">
                short animated videos.
              </a>
              {tools[1]}
            </Paragraph>
            <Paragraph
              margin={`${margin}px 0 ${margin * 2.5}px 0`}
              color={SecondaryColor_Blk}
            >
              {tools[2]}
            </Paragraph>
            <Row>
              <Col md={6}>
                <StepCard
                  height="20vh"
                  background={TertiaryColor_Tel}
                  className="tool_card"
                  onClick={() => {
                    jump(2);
                  }}
                  onMouseOver={() => mouseOver(0)}
                  onMouseOut={() => mouseOut(0)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") mouseOver(0);
                  }}
                  tabIndex="0"
                >
                  <Heading
                    type="h1"
                    weight="normal"
                    size={fontSize.title2}
                    color="white"
                    align="center"
                  >
                    {showContent[0]}
                  </Heading>
                </StepCard>
              </Col>
              <Col md={6}>
                <StepCard
                  height="20vh"
                  background={SecondaryColor_Yel}
                  padding="0 10px"
                  className="tool_card"
                  onClick={() => {
                    jump(1);
                  }}
                  onMouseOver={() => mouseOver(1)}
                  onMouseOut={() => mouseOut(1)}
                  tabIndex="1"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") mouseOver(1);
                  }}
                >
                  <Heading
                    type="h1"
                    weight="normal"
                    size={fontSize.title2}
                    color="white"
                    align="center"
                  >
                    {showContent[1]}
                  </Heading>
                </StepCard>
              </Col>
            </Row>
            <Paragraph margin={Pmarging} color={SecondaryColor_Blk}>
              {tools[5]}
            </Paragraph>
          </Card>
        </SubContainer>
        <SeverityCard show={show} />
      </div>
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
          primary
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display
        >
          <Paragraph>{show ? "Next Section" : "Next"}</Paragraph>
        </Button>
      </BtnGroup>
    </Container>
  );
};

export default Tools;

const Container = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  transition: all 1s linear;
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 1s linear;

  ${({ show }) =>
    show
      ? css`
          animation: ${enterAni3} 0.8s linear forwards;
          flex-shrink: 1;
        `
      : css`
          animation: ${exitAni2} 0.8s linear forwards;
          flex-shrink: 2000;
        `}
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
  width: 220px;
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
