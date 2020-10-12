import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody, Popover, OverlayTrigger } from 'react-bootstrap';
import { DSMContent } from '../../resource/content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Error_R, DarkPurple } from '../../theme/resource';

import styled from 'styled-components';

const DSM = (props) => {
  const [show, setShow] = useState(false);
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

  const popover = (
    <Popover id="dsm-popover">
      <Popover.Title>
        <Paragraph color={DarkPurple} weight="bold" size="2.5vmin">
          Important Notes
        </Paragraph>
      </Popover.Title>
      <Popover.Content>
        <Paragraph
          color={DarkPurple}
          weight="bold"
          size="2vmin"
          margin={MarginP}
        >
          Note: Criteria A-C represents a major depressive episode.
        </Paragraph>

        <Paragraph
          color={DarkPurple}
          weight="bold"
          size="2vmin"
          margin={MarginP}
        >
          Note: Responses to a significant loss (e.g., bereavement, financial
          ruin, losses from a natural disaster, a serious medical illness or
          disability) may include the feelings of intense sadness, rumination
          about the loss, insomnia, poor appetite, and weight loss noted in
          Criterion A, which may resemble a depressive episode. Although such
          symptoms may be understandable or considered appropriate to the loss,
          the presence of a major depressive episode in addition to the normal
          response to a significant loss should also be carefully considered.
          This decision inevitably requires the exercise of clinical judgment
          based on the individual’s history and the cultural norms for the
          expression of distress in the context of loss.
        </Paragraph>
      </Popover.Content>
    </Popover>
  );

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered id="dsm_modal">
      <Modal.Header closeButton id="dsm_header">
        <HeaderContainer>
          <Heading
            type="h2"
            weight="bold"
            size="2.5vmin"
            margin="0 5px 0 20px"
            color="white"
          >
            DSM-5 Criteria
          </Heading>
          <HeaderSubContainer>
            <Paragraph
              color={Error_R}
              weight="bold"
              size="2vmin"
              margin="0 5px"
            >
              Important Notes:
            </Paragraph>
            <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
              <FontAwesomeIcon
                icon={faStickyNote}
                className="arrow_d"
                color={Error_R}
                cursor="pointer"
              />
            </OverlayTrigger>
          </HeaderSubContainer>
        </HeaderContainer>
      </Modal.Header>
      <ModalBody>
        <Container>
          <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[0]}Note: {DSMContent[1]}
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
              {index === 0
                ? ' (Note: In children and adolescents, can be irritable mood.)'
                : index === 2
                ? ' (Note: In children, consider failure to make expected weight gain.)'
                : ''}
            </Paragraph>
          ))}
          <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[3]}
          </Paragraph>
          <Paragraph color="white" weight="bold" size="2vmin" margin={MarginP}>
            {DSMContent[4]}
          </Paragraph>
          <Paragraph color="white" weight="normal" size="2vmin" margin="20px 0">
            {DSMContent[5]}
          </Paragraph>
        </Container>
      </ModalBody>
    </Modal>
  );
};

const Container = styled.div`
  height: 100%;
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
`;

export default DSM;
