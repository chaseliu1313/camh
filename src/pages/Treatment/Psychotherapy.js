import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled, { css } from 'styled-components';
import VA from '../../components/Vertical_Accordions/va';
import { Row, Col, Alert } from 'react-bootstrap';
import { Psychotherapy } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';
import { enterAni2 } from '../../theme/animation';

const Psycho = () => {
  const [show, setShow] = useState(false);
  const [mount, setMount] = useState(false);

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
    <Container mount={mount}>
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
        <Col md={{ span: 10, offset: 1 }}>
          <Heading
            type="h1"
            weight="normal"
            size="5vmin"
            align="center"
            color={SecondaryColor_Blk}
          >
            Psychotherapy
          </Heading>
          <Paragraph weight="normal" size="2.5vmin" align="center">
            Try individual CBT first if possible. Otherwise, choose another
            psychotherapy.Click on each box to learn about each therapy.
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
    mount
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
        `
      : ''}
`;
export default Psycho;
