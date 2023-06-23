import React from 'react';
import styled from 'styled-components';
import { Row as R, Col, ListGroup } from 'react-bootstrap';

import Heading, { Paragraph } from '../../components/Text/Heading';

import { SecondaryColor_Blk } from '../../theme/resource';

const Reference = () => {
  return (
    <Container>
      <Row>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <Heading
            size="5vmin"
            weight="bold"
            align="center"
            color={SecondaryColor_Blk}
          >
            References
          </Heading>
        </CenterCol>
      </Row>
      <ListRow>
        <ListGroup className="ref_list" variant="flush">
          <ListGroup.Item>
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · American Psychiatric Association. (2013). Diagnostic and
              Statistical Manual of Mental Disorders (5th ed.). Arlington, V.A.:
              Author.
            </Paragraph>
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
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
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
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
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Bennett, K., Courtney, D., Duda, S., Henderson, J. & Szatmari,
              P. (2018). An appraisal of the trustworthiness of practice
              guidelines for depression and anxiety in children and youth.
              Depression & Anxiety, 35 (6), 530–540. doi: 10.1002/da.22752
            </Paragraph>
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
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
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
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
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Cuijpers, P., Driessen, E., Hollon, S. D., Oppen, P. V., Barth,
              J., & Andersson, G. (2012). The efficacy of non-directive
              supportive therapy for adult depression: A meta-analysis. Clinical
              Psychology Review, 32(4), 280-291. doi: 10.1016/j.cpr.2012.01.003
            </Paragraph>
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Courtney, D. B., Cheung, A., Henderson, J., Bennett, K.,
              Battaglia, M., Strauss, J., . . . Szatmari, P. (2019).
              Effectiveness of an Integrated Care Pathway for Adolescents with
              Depression: A Pilot Clinical Trial Protocol. Journal of the
              Canadian Academy of Child and Adolescent Psychiatry, 28(3),
              115-133. Retrieved September 17, 2020, from
              <a
                rel="noopener noreferrer"
                href="https://www.cacap-acpea.org/wp-content/uploads/Effectiveness-of-an-Integrated-Care-Pathway-for-Adolescents.pdf"
                target="_blank"
              >
                https://www.cacap-acpea.org/wp-content/uploads/Effectiveness-of-an-Integrated-Care-Pathway-for-Adolescents.pdf
              </a>
            </Paragraph>

            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Frank, E., Prien, R. F., & Jarrett, R. B. (1991).
              Conceptualization and Rationale for Consensus Definitions of Terms
              in Major Depressive Disorder: Remission, Recovery, Relapse, and
              Recurrence. Archives of General Psychiatry, 48(9), 851-855.
              doi:10.1001/archpsyc.1991.01810330075011
            </Paragraph>

            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · National Institute for Health and Care Excellence. (2019, June
              25). Depression in children and young people: Identification and
              management: Guidance. Retrieved July 02, 2020, from
              <a
                rel="noopener noreferrer"
                href="https://www.nice.org.uk/guidance/ng134"
                target="_blank"
              >
                https://www.nice.org.uk/guidance/ng134
              </a>
            </Paragraph>

            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Psychology Today. (2020). Psychodynamic Therapy | Psychology
              Today Canada. Retrieved April 2020, from
              <a
                rel="noopener noreferrer"
                href="https://www.psychologytoday.com/ca/therapy-types/psychodynamic-therapy"
                target="_blank"
              >
                https://www.psychologytoday.com/ca/therapy-types/psychodynamic-therapy
              </a>
            </Paragraph>

            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · Reyes-Portillo, J. (2020). About Interpersonal Psychotherapy for
              Adolescents (IPT-A). Retrieved April 2020, from
              <a
                rel="noopener noreferrer"
                href="https://childadolescentpsych.cumc.columbia.edu/articles/interpersonal-therapy-adolescents-ipta"
                target="_blank"
              >
                https://childadolescentpsych.cumc.columbia.edu/articles/interpersonal-therapy-adolescents-ipta
              </a>
            </Paragraph>
            <Paragraph
              color={SecondaryColor_Blk}
              size="2vmin"
              margin="1vmin 0 0 0"
            >
              · World Health Organization. (2020). Depression. Retrieved April
              2020 from
              <a
                rel="noopener noreferrer"
                href="https://childadolescentpsych.cumc.columbia.edu/articles/interpersonal-therapy-adolescents-ipta"
                target="_blank"
              >
                https://www.who.int/news-room/fact-sheets/detail/depression
              </a>
            </Paragraph>
          </ListGroup.Item>
        </ListGroup>
      </ListRow>
    </Container>
  );
};

export default Reference;

const Container = styled.div`
  height: 120%;
  width: 100%;
 
  padding-top: 25px;
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
  height: 100%;
  margin: 2vmin auto;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
