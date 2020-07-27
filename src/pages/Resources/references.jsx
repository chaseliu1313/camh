import React from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading, { Paragraph } from '../../components/Text/Heading';
import Button from '../../components/Buttons/Buttons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryColor_Blk, SecondaryColor_Tel } from '../../theme/resource';

const Reference = () => {
  const path = '/resources/help';

  return (
    <Container>
      <Row>
        <Col xs lg="1">
          <Link to={path}>
            <Button
              primary={false}
              type="outlined"
              height="5vmin"
              width="5vw"
              display
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <Paragraph size="2vmin" color={SecondaryColor_Tel}>
                Back
              </Paragraph>
            </Button>
          </Link>
        </Col>
        <CenterCol xs={8} md={10}>
          <Heading
            size="5vmin"
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            References
          </Heading>
        </CenterCol>
        <Col xs lg="1">
          ''
        </Col>
      </Row>
      <ListRow>
        <ListGroup className="ref_list" variant="flush">
          <ListGroup.Item>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · American Psychiatric Association. (2013). Diagnostic and
              Statistical Manual of Mental Disorders (5th ed.). Arlington, V.A.:
              Author.
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · American Psychological Association. (2020). Attachment-Based
              Family Therapy. Retrieved April 2020, from{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="  https://www.apa.org/pubs/videos/4310925?tab=1"
              >
                https://www.apa.org/pubs/videos/4310925?tab=1
              </a>
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · Association for Family Therapy & Systemic Practice. (n.d.).
              Association for Family Therapy & Systemic Practice. Retrieved
              April 2020, from{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=" https://www.aft.org.uk/SpringboardWebApp/userfiles/aft/file/Employers"
              >
                {' '}
                https://www.aft.org.uk/SpringboardWebApp/userfiles/aft/file/Employers
              </a>{' '}
              and Commissioners/AFT Information for Commissioners V2.pdf
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · Bennett, K., Courtney, D., Duda, S., Henderson, J. & Szatmari,
              P. (2018). An appraisal of the trustworthiness of practice
              guidelines for depression and anxiety in children and youth.
              Depression & Anxiety, 35 (6), 530–540. doi: 10.1002/da.22752
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · Centre for Addiction and Mental Health. (2020a). Cognitive
              behavioural therapy. Retrieved April 2020, from{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=" https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/cognitive-behavioural-therapy"
              >
                {' '}
                https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/cognitive-behavioural-therapy
              </a>
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · Centre for Addiction and Mental Health. (2020b). Interpersonal
              Psychotherapy (IPT). Retrieved April 2020, from{' '}
              <a
                rel="noopener noreferrer"
                href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/interpersonal-psychotherapy"
                target="_blank"
              >
                https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/interpersonal-psychotherapy
              </a>
            </Paragraph>
            <Paragraph color={SecondaryColor_Blk} size="2vmin">
              · Cuijpers, P., Driessen, E., Hollon, S. D., Oppen, P. V., Barth,
              J., & Andersson, G. (2012). The efficacy of non-directive
              supportive therapy for adult depression: A meta-analysis. Clinical
              Psychology Review, 32(4), 280-291. doi: 10.1016/j.cpr.2012.01.003
            </Paragraph>
          </ListGroup.Item>
        </ListGroup>
      </ListRow>
    </Container>
  );
};

export default Reference;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

const Row = styled(R)`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: auto;
`;

const ListRow = styled(R)`
  width: 100%;
  padding: 0;
  overflow: hidden;
  height: 100%;
  margin: 2vmin auto;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
