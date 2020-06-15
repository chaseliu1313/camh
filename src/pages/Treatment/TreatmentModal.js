import React, { useState, useEffect } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody, Accordion, Card } from 'react-bootstrap';
import {
  RelapseExtra,
  Relapse,
  FluoxetineExtra,
  Flouxetine,
  check3,
  check6,
} from '../../resource/content';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor_Blk } from '../../theme/resource';

const TreatmentModal = (props) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(Flouxetine);
  const [extra, setExtra] = useState(FluoxetineExtra);

  const handleClose = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    let s = props.show;
    setShow(s);

    switch (props.index) {
      case 1:
        setContent(Flouxetine);
        setExtra(FluoxetineExtra);
        break;
      case 2:
        setContent(check6);
        setExtra('');
        break;
      case 3:
        setContent(check3);
        setExtra('');
        break;
      case 4:
        setContent(Relapse);
        setExtra(RelapseExtra);
        break;
      default:
        break;
    }

    return () => {
      setShow(false);
    };
  }, [props.show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered
      id="treatment_modal"
    >
      <Modal.Header closeButton id="treatment_header">
        <Heading
          type="h2"
          weight="bold"
          size="2.5vmin"
          margin="0 5px 0 20px"
          color="white"
        >
          {content.heading}
        </Heading>
      </Modal.Header>
      <ModalBody>
        <Container>
          {content.content.map((c) => (
            <>
              {c.subHeading === 'Definitions:' ||
              c.subHeading === 'Assess Response Using:' ? (
                <Heading
                  type="h2"
                  weight="bold"
                  size="2.5vmin"
                  color={SecondaryColor_Blk}
                  margin="10px 0 10px 0"
                >
                  {c.subHeading}
                </Heading>
              ) : (
                <Heading
                  type="h2"
                  weight="bold"
                  size="2.5vmin"
                  color={PrimaryColor}
                >
                  {c.subHeading}
                </Heading>
              )}
              <Paragraph
                weight="normal"
                size="2.5vmin"
                color={SecondaryColor_Blk}
                margin="0 0 0 5px"
              >
                {c.content}
              </Paragraph>
            </>
          ))}

          {content.heading === 'Fluoxetine' ? (
            <>
              <Paragraph
                weight="normal"
                size="2vmin"
                color={SecondaryColor_Blk}
                margin="3vmin 0 3vmin 0 "
              >
                Click on each box to learn more.
              </Paragraph>
              <Accordion id="treatment_accor">
                {extra.map((e, index) => (
                  <Card id="treatment_accor_card">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index.toString()}
                    >
                      <Heading type="h2" weight="bold" size="2.5vmin">
                        {e.text}
                      </Heading>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <Card.Body>
                        {e.content.map((ec) => (
                          <Paragraph
                            weight="normal"
                            size="2.5vmin"
                            color={SecondaryColor_Blk}
                            margin="0 0 0 5px"
                          >
                            {ec}
                          </Paragraph>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </>
          ) : content.heading === 'Relapse prevention plan:' ? (
            extra.map((e) => (
              <>
                <Heading type="h2" weight="bold" size="2.5vmin">
                  {e}
                </Heading>
              </>
            ))
          ) : (
            ''
          )}
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

export default TreatmentModal;

//
