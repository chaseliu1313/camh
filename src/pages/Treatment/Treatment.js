import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Row as R, Col as C } from 'react-bootstrap';
import Card from '../../components/Cards/Card';
import bg from '../../resource/mental.svg';
import { PrimaryColor, TertiaryColor_Tel, size } from '../../theme/resource';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { treatment } from '../../resource/content';
import Button from '../../components/Buttons/Buttons';
import './treatment.css';
import { useHistory } from 'react-router-dom';
import {
  enterAni3,
  enterAni2,
  exitAni3,
  exitAni2,
} from '../../theme/animation';

const Treatment = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const Pmarging = '10px 0';

  const history = useHistory();

  const viewSwicher = (index) => {
    setMount(false);
    setTimeout(() => {
      index === 1
        ? history.push('/treatment/mild')
        : history.push('/treatment/severe');
    }, 850);
  };

  return (
    <Container>
      <Row>
        <ColLeft
          md={6}
          sm={12}
          className="treatment_col_left"
          mount={mount.toString()}
        >
          <div className="treatment_wraper">
            <Card
              height="auto"
              width="45vw"
              padding="5vmin"
              className="treatment_card"
              bgColor={TertiaryColor_Tel}
            >
              <Heading size="5vmin" weight="bold" align="center" color="white">
                Treatment
              </Heading>
              <Paragraph margin={Pmarging} color="white">
                {treatment}
              </Paragraph>
            </Card>
            <SubContainer>
              <Button
                primary
                display
                height="20vh"
                width="20vw"
                onClick={() => viewSwicher(1)}
              >
                <Paragraph
                  color="white"
                  align="center"
                  className="treatment_btn_text"
                >
                  Mild Depression
                </Paragraph>
              </Button>
              <Button
                dark
                primary
                display
                height="20vh"
                width="20vw"
                onClick={() => viewSwicher(2)}
              >
                <Paragraph
                  color="white"
                  margin="auto"
                  align="center"
                  className="treatment_btn_text"
                >
                  Moderate/Severe Depression
                </Paragraph>
              </Button>
            </SubContainer>
          </div>
        </ColLeft>
        <ColRight
          md={6}
          sm={'12'}
          className="treatment_col_right"
          mount={mount.toString()}
        ></ColRight>
      </Row>
    </Container>
  );
};

export default Treatment;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Row = styled(R)`
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ColLeft = styled(C)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vmin;
  z-index: 2;

  ${({ mount }) =>
    mount === 'true'
      ? css`
          animation: ${enterAni2} 0.8s linear forwards;
        `
      : css`
          animation: ${exitAni3} 0.8s linear forwards;
        `}

  @media (max-width: ${size.mobileL}) {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
  }

  @media (max-width: ${size.tablet}) {
  }
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColRight = styled(C)`
  background-color: ${PrimaryColor};
  background-image: url(${bg});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80% 80%;

  ${({ mount }) =>
    mount === 'true'
      ? css`
          animation: ${enterAni3} 0.8s linear forwards;
        `
      : css`
          animation: ${exitAni2} 0.8s linear forwards;
        `}

  @media (max-width: ${size.mobileL}) {
    display: none !important;
  }
`;
