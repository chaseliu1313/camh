import React, { useState, useEffect, Fragment } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody, Accordion, Card } from 'react-bootstrap';
import {
  RelapseExtra,
  Relapse,
  FluoxetineExtra,
  Flouxetine,
  check3,
  check6,
  TeamReview,
  TeamReviewExtra,
  Check2,
  Check2Extra,
  RelapseExtra2,
} from '../../resource/content';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor_Blk } from '../../theme/resource';

const contentSwitcher = (index) => {
  switch (index) {
    case 1:
      return [Flouxetine, FluoxetineExtra];
    case 2:
      return [check6, ''];
    case 3:
      return [check3, ''];
    case 4:
      return [Relapse];
    case 5:
      return [TeamReview, TeamReviewExtra];
    case 6:
      return [Check2, Check2Extra];
    case 7:
      return [Relapse, RelapseExtra2];
    case 8:
      return [
        { ...Check2, heading: 'Check response after 2 to 3 months' },
        RelapseExtra2,
      ];
    default:
      break;
  }
};

const TreatmentModal = (props) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(Flouxetine);
  const [extra, setExtra] = useState(TeamReviewExtra);

  const handleClose = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    let s = props.show;
    setShow(s);

    if (props.index) {
      const contentSelected = contentSwitcher(props.index);
      setContent(contentSelected[0]);
      setExtra(contentSelected[1]);
    }

    return () => {
      setShow(false);
    };
  }, [props.show, props.index]);

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
          {content.content.map((c, index) => (
            <Fragment key={index}>
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
              {c.subHeading.includes('Clinical Judgment:') ? (
                <>
                  <Paragraph
                    weight="normal"
                    size="2.5vmin"
                    color={SecondaryColor_Blk}
                    margin="0 0 0 5px"
                  >
                    {c.content}
                  </Paragraph>
                  <a
                    className="ov_a"
                    href={Check2Extra.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Clinical Global Impressions Scale
                  </a>
                </>
              ) : (
                <Paragraph
                  weight="normal"
                  size="2.5vmin"
                  color={SecondaryColor_Blk}
                  margin="0 0 0 5px"
                >
                  {c.content}
                </Paragraph>
              )}
            </Fragment>
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
                  <Card id="treatment_accor_card" key={index}>
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
                        {e.content.map((ec, index) => (
                          <Paragraph
                            weight="normal"
                            size="2.5vmin"
                            color={SecondaryColor_Blk}
                            margin="0 0 0 5px"
                            key={index}
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
          ) : content.heading === 'Team Review & Treatment Change:' ? (
            <Accordion id="treatment_accor">
              {extra.map((e, index) => (
                <Card id="treatment_accor_card" key={e.text}>
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
                      {e.content.map((c) => (
                        <div key={c.sh}>
                          <Heading type="h3" weight="normal" size="2.5vmin">
                            {c.sh}
                          </Heading>
                          {c.detail.map((d, index) => (
                            <Paragraph
                              weight="normal"
                              size="2.5vmin"
                              color={SecondaryColor_Blk}
                              margin="0 0 0 5px"
                              key={index}
                            >
                              {d}
                            </Paragraph>
                          ))}
                        </div>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
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
