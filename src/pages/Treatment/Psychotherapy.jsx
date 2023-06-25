import React, { useState, useEffect } from "react";
import Heading, { Paragraph } from "../../components/Text/Heading";
import styled, { css } from "styled-components";
import VA from "../../components/Vertical_Accordions/va";
import { Row, Col, Alert } from "react-bootstrap";
import { Psychotherapy } from "../../resource/content";
import { SecondaryColor_Blk, SecondaryColor_Tel } from "../../theme/resource";
import { enterAni2 } from "../../theme/animation";
import { useHistory } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Buttons/Buttons";
import { useDevice } from "../../hooks/useDevice";

const Psycho = () => {
  const [show, setShow] = useState(false);
  const [mount, setMount] = useState(false);
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

  return (
    <Container mount={mount.toString()}>
      <Alert
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
        show={show}
      >
        <Alert.Heading>
          Tilt Your Device for A Better Viewing Experience
        </Alert.Heading>
        <p>
          Please keep your device in the landscape mode for a better viewing
          experience.
        </p>
      </Alert>
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
export default Psycho;
