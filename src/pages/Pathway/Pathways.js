import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import './pathway.css';
import { Row, Col, Alert } from 'react-bootstrap';
import Heading, { Paragraph } from '../../components/Text/Heading';

import JointBtnContainer, { JointBtn } from '../../components/JointBtn';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';

import { SecondaryColor_Blk, PrimaryColor } from '../../theme/resource';

import MildPathway from './MildPathway';
import SeverePathway from './SeverePathway';

export default function Pathways() {
  const btnData = {
    btn1: { label: 'Mild Depression', disabled: false, primary: false },
    btn2: {
      label: 'Moderate/Severe Depression',
      disabled: false,
      primary: true,
    },
  };

  const severeBtnRef = React.useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [switchView, setView] = useState([false, false]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleViewSwitch = useCallback((index) => {
    setShowAlert(false);
    if (index === 0) {
      setView([true, false]);
    } else {
      setView([false, true]);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    setShowAlert(true);

    return () => {
      setMounted(false);
      setShowAlert(false);
    };
  }, []);

  return (
    <Main mounted={mounted}>
      <Row>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <Heading
            color={SecondaryColor_Blk}
            size="5vmin"
            weight="bold"
            align="center"
          >
            Pathways
          </Heading>
          {!showAlert ? (
            <Paragraph size="2.5vmin" align="center">
              The pathway has been defaulted to "No" responses. Click on "Yes"
              and "No" to change the outcomes.
            </Paragraph>
          ) : (
            ''
          )}

          <JointBtnContainer>
            <JointBtn
              btn={{ ...btnData.btn1 }}
              onClick={() => handleViewSwitch(0)}
            />
            <JointBtn
              btn={{ ...btnData.btn2 }}
              onClick={() => handleViewSwitch(1)}
              ref={severeBtnRef}
            />
          </JointBtnContainer>
        </CenterCol>
      </Row>

      <Row>
        {switchView[0] ? <MildPathway node={severeBtnRef.current} /> : null}
        {switchView[1] ? <SeverePathway /> : null}
        {!switchView[0] && !switchView[1] ? (
          <CenterCol md={{ span: 10, offset: 1 }}>
            <Heading size="5vmin">⬆ Choose the Pathway ⬆</Heading>
          </CenterCol>
        ) : null}
      </Row>
      <Row>
        {showAlert ? (
          <Alert
            variant="success"
            onClose={closeAlert}
            dismissible
            style={{ margin: 'auto', width: '50%' }}
          >
            <Alert.Heading>
              <Heading
                color={PrimaryColor}
                size="3vmin"
                weight="bold"
                align="center"
              >
                About the Pathways
              </Heading>
            </Alert.Heading>
            <hr />
            <Paragraph size="2.5vmin" align="center">
              This section provides an overview of the treatment pathways. Click
              on "Mild Depression" and "Moderate/Severe Depression" to switch
              between the pathways. Each step will be reviewed in more detail in
              the Treatment section of this tool.
            </Paragraph>
          </Alert>
        ) : (
          ''
        )}
      </Row>
      <Row>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <NaviBtnGroup backLink="/overview" forwardLink="/assessment" />
        </CenterCol>
      </Row>
    </Main>
  );
}

const enterAni = keyframes`

0% {
  opacity: 0;
  transform: scale(0.6) translateY(-100vh);

}

50%{
  opacity:0.5;
  transform: scale(0.8) translateY(-50vh);
}
 
100%{
  opacity:1;
  transform: scale(1) translateY(0);
}
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 30%;
  transition: all ease-in-out 0.6s;

  ${({ mounted }) =>
    mounted
      ? css`
          animation: ${enterAni} 1s linear;
        `
      : null};
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
