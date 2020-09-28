import React, { useState, useEffect, Fragment } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { Modal, ModalBody, Tabs, Tab } from 'react-bootstrap';
import {
  Relapse,
  Flouxetine,
  check3,
  check6,
  TeamReview,
  TeamReviewExtra,
  Check2,
  Check2Extra,
  RelapseExtra2,
  MedicationExtra,
} from '../../resource/content';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor_Blk } from '../../theme/resource';

const contentSwitcher = (index) => {
  switch (index) {
    case 1:
      return [Flouxetine, MedicationExtra];
    case 2:
      return [check6, ''];
    case 3:
      return [check3, ''];
    case 4:
      return [Relapse, ''];
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
  const [extra, setExtra] = useState(MedicationExtra);
  const [tabKey, setKey] = useState('Sertraline');
  console.log();
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
                    Has there been a reduction in symptoms or improvement in
                    functioning (i.e., worsening, no change, minimal, much/very
                    much improved)?
                  </Paragraph>
                  <Paragraph
                    weight="normal"
                    size="2.5vmin"
                    color={SecondaryColor_Blk}
                    margin="0 0 0 5px"
                  >
                    See&nbsp;
                    <a
                      className="ov_a"
                      href={Check2Extra.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clinical Global Impressions Scale
                    </a>
                    &nbsp;to standardize approach.
                  </Paragraph>
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

          {content.heading === 'Medication' ? (
            <Paragraph
              weight="normal"
              size="2 vmin"
              color={SecondaryColor_Blk}
              margin="0 0 0 5px"
            >
              Click&nbsp;
              <a
                className="ov_a"
                href="https://edc.camhx.ca/redcap/surveys/?s=FFCNLCMXEM&what=8&fname=Medication-for-YOUth-Resource-pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              &nbsp;to download our medication handout—it was developed for
              youth, by youth in partnership with a psychiatrist and pharmacist.
            </Paragraph>
          ) : (
            ''
          )}

          {extra ? (
            content.heading === 'Medication' ||
            content.heading === 'Team Review & Treatment Change:' ? (
              <>
                <Paragraph
                  weight="normal"
                  size="2vmin"
                  color={SecondaryColor_Blk}
                  margin="3vmin 0 3vmin 0 "
                >
                  Click on each box to learn more.
                </Paragraph>
                <Tabs
                  activeKey={tabKey}
                  id="treatment_tabs"
                  onSelect={(k) => setKey(k)}
                >
                  {extra.map((e) => (
                    <Tab eventKey={e.text} title={e.text} key={e.text}>
                      {e.content.map((c) => (
                        <div key={c.sh}>
                          <Heading type="h3" weight="normal" size="2vmin">
                            {c.sh}
                          </Heading>
                          {c.detail.map((d, index) => (
                            <Paragraph
                              weight="normal"
                              size="2vmin"
                              color={SecondaryColor_Blk}
                              margin="0 0 0 5px"
                              key={index}
                            >
                              {d}
                            </Paragraph>
                          ))}
                        </div>
                      ))}
                    </Tab>
                  ))}
                </Tabs>
              </>
            ) : content.heading === 'Relapse prevention plan:' ? (
              <>
                <Heading type="h3" weight="normal" size="2vmin">
                  {RelapseExtra2[0]}
                </Heading>
                <Heading type="h3" weight="normal" size="2vmin">
                  {RelapseExtra2[1]}
                </Heading>
              </>
            ) : (
              ''
            )
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
