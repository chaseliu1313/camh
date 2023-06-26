import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled, { css } from "styled-components";
import VA from "../../components/Vertical_Accordions/va";
import { Row, Col, Alert } from "react-bootstrap";
import { Psychotherapy } from "../../resource/content";
import {
  PrimaryColor,
  SecondaryColor_Blk,
  SecondaryColor_Tel,
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
const Psycho = () => {
  const [show, setShow] = useState(false);
  const [, updateState] = React.useState();
  const [mount, setMount] = useState(false);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let { isMobile, isVertical } = useDevice();
  const history = useHistory();

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
              Moderate to Severe Depression Psychotherapy
            </MTitle>
            <MTitle style={{ color: PrimaryColor }}>
              Try individual CBT first if possible. Otherwise, choose another
              psychotherapy. Hover over each box to learn about each therapy.
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
                    {Psychotherapy[0].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {Psychotherapy[0].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header id="accordian-header-1">
                    {Psychotherapy[1].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {Psychotherapy[1].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header id="accordian-header-2">
                    {Psychotherapy[2].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    <MobileP>Psychotherapy[2].description</MobileP>
                    <MobileP style={{ color: PrimaryColor }}>
                      {Psychotherapy[2].subHeading1}
                    </MobileP>
                    {Psychotherapy[2].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                    <MobileP style={{ color: PrimaryColor }}>
                      {Psychotherapy[2].subHeading2}
                    </MobileP>
                    {Psychotherapy[2].subContent2.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header id="accordian-header-3">
                    {Psychotherapy[3].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {Psychotherapy[3].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header id="accordian-header-4">
                    {Psychotherapy[4].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {Psychotherapy[4].content.map((c, i) => {
                      return <MobileP key={i}>{c}</MobileP>;
                    })}
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
              Moderate to Severe Depression Psychotherapy
            </MTitle>
            <MTitle style={{ color: PrimaryColor }}>
              Try individual CBT first if possible. Otherwise, choose another
              psychotherapy. Hover over each box to learn about each therapy.
            </MTitle>
            <Accordion
              defaultActiveKey="0"
              className="m-accordion"
              style={{ width: "90%" }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header id="accordian-header-0">
                  {Psychotherapy[0].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {Psychotherapy[0].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header id="accordian-header-1">
                  {Psychotherapy[1].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {Psychotherapy[1].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header id="accordian-header-2">
                  {Psychotherapy[2].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  <MobileP>Psychotherapy[2].description</MobileP>
                  <MobileP style={{ color: PrimaryColor }}>
                    {Psychotherapy[2].subHeading1}
                  </MobileP>
                  {Psychotherapy[2].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                  <MobileP style={{ color: PrimaryColor }}>
                    {Psychotherapy[2].subHeading2}
                  </MobileP>
                  {Psychotherapy[2].subContent2.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header id="accordian-header-3">
                  {Psychotherapy[3].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {Psychotherapy[3].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header id="accordian-header-4">
                  {Psychotherapy[4].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {Psychotherapy[4].content.map((c, i) => {
                    return <MobileP key={i}>{c}</MobileP>;
                  })}
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
            className="backBtn"
            display
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
            Moderate to Severe Depression Psychotherapy
          </Heading>
          <Paragraph weight="normal" size="2vmin" align="center">
            Try individual CBT first if possible. Otherwise, choose another
            psychotherapy. Hover over each box to learn about each therapy.
          </Paragraph>
        </Col>
      </Row>
      <VA length={Psychotherapy.length} info={Psychotherapy} />
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

export default Psycho;
