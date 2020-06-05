import React, { useState, useEffect } from 'react';
import Heading from '../../components/Text/Heading';
import styled from 'styled-components';
import VA from '../../components/Vertical_Accordions/va';
import { Row, Col, Alert } from 'react-bootstrap';
import { PsychosocialStrategies } from '../../resource/content';
import { SecondaryColor_Blk } from '../../theme/resource';

const Psychosocial = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setShow(true);
    }
  }, []);

  return (
    <Container>
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
        <Col md={{ span: 8, offset: 2 }}>
          <Heading
            type="h1"
            weight="normal"
            size="5vmin"
            align="center"
            color={SecondaryColor_Blk}
          >
            Psychosocial Strategies
          </Heading>
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
  padding: 3vmin;
`;
export default Psychosocial;
