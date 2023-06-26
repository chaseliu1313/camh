import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled, { css } from "styled-components";
import VA from "../../components/Vertical_Accordions/va";
import { Row, Col } from "react-bootstrap";
import { PsychosocialStrategies } from "../../resource/content";
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

const Psychosocial = () => {
  const [show, setShow] = useState(false);
  const [, updateState] = React.useState();
  const [mount, setMount] = useState(false);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const history = useHistory();
  const { isMobile, isVertical } = useDevice();
  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setShow(true);
      updateState();
    }
    setMount(true);
    updateState();
    return () => {
      setMount(false);
    };
  }, [isVertical]);

  const goBack = () => {
    history.goBack();
  };

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
              Lifestyle Advice & Psychosocial Strategies
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
                    {PsychosocialStrategies[0].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {PsychosocialStrategies[0].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                    <MobileP>
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
                    </MobileP>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header id="accordian-header-1">
                    {PsychosocialStrategies[1].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {PsychosocialStrategies[1].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                    <MobileP>
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
                    </MobileP>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header id="accordian-header-2">
                    {PsychosocialStrategies[2].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {PsychosocialStrategies[2].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                    <MobileP>
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
                    </MobileP>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header id="accordian-header-3">
                    {PsychosocialStrategies[3].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {PsychosocialStrategies[3].content.map((c, i) => (
                      <MobileP key={i}>{c}</MobileP>
                    ))}
                    <MobileP>
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
                    </MobileP>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header id="accordian-header-4">
                    {PsychosocialStrategies[4].heading}
                  </Accordion.Header>
                  <Accordion.Body style={{ textAlign: "left" }}>
                    {PsychosocialStrategies[4].content.map((c, i) => {
                      if (i === 0) {
                        return (
                          <MobileP>
                            We have developed&nbsp;
                            <a
                              className="ov_a"
                              href="resources/tools/video"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              animated videos
                            </a>
                            &nbsp; for youth on how food, movement and sleep can
                            impact mood.
                          </MobileP>
                        );
                      }
                      return <MobileP key={i}>{c}</MobileP>;
                    })}
                    <a
                      href="https://www.camh.ca/-/media/files/mood-foundations-package-youth-pdf.pdf"
                      target="_blank"
                      download
                      rel="noopener noreferrer"
                    >
                      <Button
                        primary={false}
                        height="80px"
                        width="150px"
                        display
                        margin="25% 0 0 25%"
                      >
                        Download
                      </Button>
                    </a>
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
              Lifestyle Advice & Psychosocial Strategies
            </MTitle>
            <Accordion
              defaultActiveKey="0"
              className="m-accordion"
              style={{ width: "90%" }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header id="accordian-header-0">
                  {PsychosocialStrategies[0].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {PsychosocialStrategies[0].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                  <MobileP>
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
                  </MobileP>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header id="accordian-header-1">
                  {PsychosocialStrategies[1].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {PsychosocialStrategies[1].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                  <MobileP>
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
                  </MobileP>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header id="accordian-header-2">
                  {PsychosocialStrategies[2].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {PsychosocialStrategies[2].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                  <MobileP>
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
                  </MobileP>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header id="accordian-header-3">
                  {PsychosocialStrategies[3].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {PsychosocialStrategies[3].content.map((c, i) => (
                    <MobileP key={i}>{c}</MobileP>
                  ))}
                  <MobileP>
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
                  </MobileP>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header id="accordian-header-4">
                  {PsychosocialStrategies[4].heading}
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "left" }}>
                  {PsychosocialStrategies[4].content.map((c, i) => {
                    if (i === 0) {
                      return (
                        <MobileP>
                          We have developed&nbsp;
                          <a
                            className="ov_a"
                            href="resources/tools/video"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            animated videos
                          </a>
                          &nbsp; for youth on how food, movement and sleep can
                          impact mood.
                        </MobileP>
                      );
                    }
                    return <MobileP key={i}>{c}</MobileP>;
                  })}
                  <a
                    href="https://www.camh.ca/-/media/files/mood-foundations-package-youth-pdf.pdf"
                    target="_blank"
                    download
                    rel="noopener noreferrer"
                  >
                    <Button
                      primary={false}
                      height="80px"
                      width="150px"
                      display
                      margin="25% 0 0 25%"
                    >
                      Download
                    </Button>
                  </a>
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
        <Col xs lg="2">
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
        <Col md={{ span: 8, offset: 0 }}>
          <VertiCol>
            <Heading
              type="h1"
              weight="normal"
              size="3.5vmin"
              align="center"
              color={SecondaryColor_Blk}
            >
              {"Lifestyle Advice & Psychosocial Strategies"}
            </Heading>
            <Paragraph size="16px">
              Provide psychoeducation and help with implementation of lifestyle
              advice and psychosocial strategies
            </Paragraph>
          </VertiCol>
        </Col>
      </Row>
      <VA
        length={PsychosocialStrategies.length}
        info={PsychosocialStrategies}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 3vmin 3vmin 5vmin 3vmin;

  ${({ mount }) =>
    mount === "true"
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
        `
      : ""}
`;

const VertiCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export default Psychosocial;
