import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled, { css } from 'styled-components';
import VA from '../../components/Vertical_Accordions/va';
import { Row, Col, Alert } from 'react-bootstrap';
import { PsychosocialStrategies } from '../../resource/content';
import { SecondaryColor_Blk, SecondaryColor_Tel } from '../../theme/resource';
import { enterAni2 } from '../../theme/animation';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Buttons/Buttons';

const Psychosocial = () => {
  const [show, setShow] = useState(false);

  const [mount, setMount] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setShow(true);
    }
    setMount(true);

    return () => {
      setMount(false);
    };
  }, []);

  const goBack = () => {
    history.goBack();
  };

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
        <Col xs lg="2">
          <Button
            primary={false}
            type="outlined"
            height="5vmin"
            width="5vw"
            display
            onClick={() => goBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
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
              {'Lifestyle Advice & Psychosocial Strategies'}
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
    mount === 'true'
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
        `
      : ''}
`;

const VertiCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Psychosocial;
