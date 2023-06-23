import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody  } from 'react-bootstrap';
import { DSMContent } from '../../resource/content';
import { Error_R } from '../../theme/resource';
import { useWindowResize } from '../../hooks/useWindowResize';
import styled from 'styled-components';

const DSM = (props) => {
  const [show, setShow] = useState(false);
  const { size } = useWindowResize();
  const handleClose = () => {
    setShow(false);
    props.onClose(false);
  };

  const fontWeight = 'normal';
  const PaddingP = '5px 15px';
  const MarginP = '10px 0';

  useEffect(() => {
    let s = props.show;
    setShow(s);
  }, [props.show]);

 

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered id="dsm_modal">
      <Modal.Header closeButton id="dsm_header">
        <HeaderContainer>
          <Heading
            type="h2"
            weight="bold"
            size="2.5vmin"
            margin="0 5px 0 20px"
            color="white"
          >
            ICD-11 Criteria
          </Heading>
        </HeaderContainer>
      </Modal.Header>
      <ModalBody>
        <Container height={size.height}>
          <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[0]}
          </Paragraph>
  <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[1]}
          </Paragraph>
          {DSMContent[2].subContent.map((c, index) => (
            <Paragraph
              padding={PaddingP}
              color="white"
              weight={fontWeight}
              size="2vmin"
              key={index}
            >
              {c}          
            </Paragraph>
          ))}
          <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[3]}
          <a className='ov_a' style={{color: 'white'}} href='https://creativecommons.org/licenses/by-nc-nd/3.0/igo/' target='_blank' rel="noopener noreferrer">
            CC BY-ND 3.0 IGO.
          </a>
          </Paragraph>
               <Paragraph
              color={Error_R}
              weight="bold"
              size="2vmin"
              margin="0 5px"
            >
              Important Notes:
            </Paragraph>
            <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
              The mood disturbance must result in significant functional impairment and not be a manifestation of another health condition, due to the effects of a substance or medication, or better accounted for by bereavement. There have never been any prior manic, hypomanic, or mixed episodes, which would indicate the presence of a bipolar disorder.
            </Paragraph>
           
        </Container>
      </ModalBody>
    </Modal>
  );
};

const Container = styled.div`
  height: 80%;
  max-height: ${(props) => props.height * 0.9}px;
  margin-top: 2%;
  overflow: auto !important;
  width: 100%;
  padding: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSubContainer = styled.div`
  display: flex;
  height: 100%;
  width: 15%;
  justify-content: center;
  align-items: center;
  padding-right: 5%;
`;

export default DSM;
