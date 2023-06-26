import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled, { css } from "styled-components";
import VA from "../../components/Vertical_Accordions/va";
import { Row, Col, Alert } from "react-bootstrap";
import { PsychotherapyMild } from "../../resource/content";
import {
  SecondaryColor_Blk,
  SecondaryColor_Tel,
  PrimaryColor,
} from "../../theme/resource";
import { enterAni2 } from "../../theme/animation";
import { useHistory } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Buttons/Buttons";
import { useDevice } from "../../hooks/useDevice";
import { MobileMain } from "../../components/Mobilehightlights";
import { default as MBtn } from "react-bootstrap/Button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
const PsychoMild = () => {
  const [show, setShow] = useState(false);
  const [mount, setMount] = useState(false);
  const history = useHistory();
  const [, updateState] = React.useState();
  const { isMobile, isVertical } = useDevice();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setShow(true);
    }
    setMount(true);

    return () => {
      setMount(false);
    };
  }, []);

  return isMobile ? (
    <MobileMain onClick={forceUpdate}>
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
            <MBreadCrumb>Current Section: Treatment</MBreadCrumb>
          </MBreadCrumContainer>
          <div
            style={{
              height: "90%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 24,
            }}
          >
            <MTitle style={{ fontWeight: "bold" }}>
              Mild Depression Psychotherapy
            </MTitle>
            <div
              style={{
                height: 50,
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <MBtn
                variant="outline-primary"
                onClick={() => goBack()}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineKeyboardArrowLeft />
                <MobileP style={{ margin: "unset" }}>Back</MobileP>
              </MBtn>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 24,
                overflow: "auto",
              }}
            >
              <Accordion
                defaultActiveKey="0"
                className="m-accordion"
                style={{ width: "90%" }}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header id="accordian-header-0">
                    {PsychotherapyMild[0].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    <MobileP style={{ fontWeight: 400 }}>
                      {PsychotherapyMild[0].subHeading1}
                    </MobileP>
                    {PsychotherapyMild[0].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header id="accordian-header-1">
                    {PsychotherapyMild[1].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    <MobileP style={{ fontWeight: 400 }}>
                      {PsychotherapyMild[1].subHeading1}
                    </MobileP>
                    {PsychotherapyMild[1].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header id="accordian-header-2">
                    {PsychotherapyMild[2].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    <MobileP style={{ fontWeight: 400 }}>
                      {PsychotherapyMild[2].subHeading1}
                    </MobileP>
                    {PsychotherapyMild[2].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
            <MBreadCrumb>Current Section: Treatment</MBreadCrumb>
          </MBreadCrumContainer>
          <div
            style={{
              width: "15%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <MBtn
                variant="outline-primary"
                onClick={() => goBack()}
                style={{
                  height: 40,
                  width: 80,
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineKeyboardArrowLeft />
                <MobileP style={{ margin: "unset" }}>Back</MobileP>
              </MBtn>
            </div>
          </div>
          <div
            id="column_left_m_h"
            style={{
              width: "85%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "auto",
              paddingBottom: "20%",
            }}
          >
            <MTitle style={{ fontWeight: "bold" }}>
              Mild Depression Psychotherapy
            </MTitle>
            <Accordion
              defaultActiveKey="0"
              className="m-accordion"
              style={{ width: "90%" }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header id="accordian-header-0">
                  {PsychotherapyMild[0].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  <MobileP style={{ fontWeight: 400 }}>
                    {PsychotherapyMild[0].subHeading1}
                  </MobileP>
                  {PsychotherapyMild[0].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header id="accordian-header-1">
                  {PsychotherapyMild[1].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  <MobileP style={{ fontWeight: 400 }}>
                    {PsychotherapyMild[1].subHeading1}
                  </MobileP>
                  {PsychotherapyMild[1].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header id="accordian-header-2">
                  {PsychotherapyMild[2].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  <MobileP style={{ fontWeight: 400 }}>
                    {PsychotherapyMild[2].subHeading1}
                  </MobileP>
                  {PsychotherapyMild[2].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      )}
    </MobileMain>
  ) : (
    <Container mount={mount.toString()}>
      <Row className="p_row">
        <Col xs lg="1">
          <Button
            primary={false}
            type="outlined"
            height="5vmin"
            width="5vw"
            display
            className="backBtn"
            onClick={() => goBack()}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ height: 12, marginRight: 2 }}
            />
            <Paragraph size="2vmin" color={SecondaryColor_Tel}>
              Back
            </Paragraph>
          </Button>
        </Col>
        <Col md={{ span: 10, offset: 0 }}>
          <Heading
            type="h1"
            weight="normal"
            size="5vmin"
            align="center"
            color={SecondaryColor_Blk}
          >
            Mild Depression Psychotherapy
          </Heading>
          <Paragraph weight="normal" size="2vmin" align="center">
            Hover over each box to learn about each therapy.
          </Paragraph>
        </Col>
      </Row>
      <VA length={PsychotherapyMild.length} info={PsychotherapyMild} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 1vmin 3vmin 5vmin 3vmin;

  ${({ mount }) =>
    mount === "true"
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
        `
      : ""}
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

export default PsychoMild;
