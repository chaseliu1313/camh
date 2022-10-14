import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Row as R, Col } from 'react-bootstrap';
import bg from '../../resource/faq.svg';
import NaviBtnGroup from '../../components/Buttons/NaviBtnGroup';
import { SecondaryColor_Blk } from '../../theme/resource';
import Heading, { Paragraph } from '../../components/Text/Heading';
import { useWindowResize } from '../../hooks/useWindowResize';
const Faq = () => {
  const paths = ['/resources/help', '/resources/crisisLines'];
  const { size } = useWindowResize();
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
            FAQs
          </Heading>
        </CenterCol>
      </Row>
      <ContentContainer size={size}>
        <ContentRow style={{ marginTop: 0 }}>
          <Paragraph weight={'bold'} style={{ marginRight: 'auto' }} margin={0}>
            Q. Do the recommendations in this tool apply to youth with
            neurodevelopmental disorders (e.g., Autism spectrum disorder,
            Attention deficit hyperactivity disorder)?
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            The recommendations in this tool apply to youth with
            neurodevelopmental disorders.{' '}
            <a
              href="https://www.camh.ca/-/media/files/cundill-centre/depression-and-autism-full-pdf.pdf"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              The Depression in Autism
            </a>{' '}
            resource outlines some additional considerations when prescribing
            medications (e.g., slower titration schedule due to higher risk of
            side effects).
          </Paragraph>
        </ContentRow>
        <ContentRow>
          <Paragraph weight={'bold'} style={{ marginRight: 'auto' }} margin={0}>
            Q. What ages do the recommendations in this tool apply to?
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            This tool is based on the best evidence for young people ages 11-18.
          </Paragraph>
        </ContentRow>
        <ContentRow>
          <Paragraph weight={'bold'} style={{ marginRight: 'auto' }} margin={0}>
            Q. Many young people have co-morbid conditions along with
            depression, such as anxiety and substance use issues. Do the
            recommendations in this tool apply to them?
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            This tool was developed to guide treatment for youth depression. For
            youth with complex presentations (e.g., when substance misuse or
            other mental health diagnoses are also present), a referral to
            specialty mental health services is recommended. Connection with a
            care coordinator to develop an individualized care plan with the
            youth to address mental health and other immediate needs and
            coordinate across different care providers is also recommended. The
            guidance in this tool can be incorporated as part of this
            individualized care plan and to target symptoms of depression. For
            more information, see the NICE Guideline{' '}
            <a
              href="https://www.nice.org.uk/guidance/ng58/chapter/Recommendations"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              Coexisting severe mental illness and substance misuse: community
              health and social care services.
            </a>
          </Paragraph>
        </ContentRow>
        <ContentRow>
          <Paragraph weight={'bold'} style={{ marginRight: 'auto' }} margin={0}>
            Q. What about youth experiencing self-injury or suicidal thoughts?
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            Some useful resources are the{' '}
            <a
              href="https://www.nimh.nih.gov/research/research-conducted-at-nimh/asq-toolkit-materials"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              National Institute of Mental Health’s Suicide-Screening Toolkit
            </a>
            , the{' '}
            <a
              href="https://mentalhealthcommission.ca/wp-content/uploads/2021/02/Suicide-risk-assessment-toolkit.pdf"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              Canadian Mental Health Commission’s Suicide Risk Assessment
              Toolkit
            </a>
            , and LivingWorks’ Applied Suicide Intervention Skills Training
            (ASIST) training.
          </Paragraph>
        </ContentRow>
        <ContentRow>
          <Paragraph weight={'bold'} style={{ marginRight: 'auto' }} margin={0}>
            Q. Should I prescribe medication to a young person who is not also
            receiving psychotherapy?
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            Combined medication and psychotherapy treatment is recommended to
            treat moderate to severe youth depression. If a young person can not
            access psychotherapy immediately (e.g., due to wait times) or
            chooses not to engage in psychotherapy, a medication can be started
            along with other components of evidence-based care (e.g., lifestyle
            advice & psychosocial strategies) to ensure access to timely
            treatment of depression.
          </Paragraph>
          <Paragraph
            color={SecondaryColor_Blk}
            style={{ marginRight: 'auto' }}
            margin={0}
          >
            If you have other questions about the tool, contact our team at{' '}
            <a
              href="mailto:cundill.centre@camh.ca"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              cundill.centre@camh.ca.
            </a>
          </Paragraph>
        </ContentRow>
      </ContentContainer>
      <Row>
        <CenterCol md={{ span: 10, offset: 1 }}>
          <NaviBtnGroup backLink={paths[0]} forwardLink={paths[1]} />
        </CenterCol>
      </Row>
    </Container>
  );
};

export default Faq;
//animations
const enterAni = keyframes`

0% {
  opacity: 0;
 


}
50%{
  opacity:0.5;
 
}
 
100%{
  opacity:1;
  
}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bg}) no-repeat fixed left bottom;
  background-size: 30%;
  padding-top: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  animation: ${enterAni} 0.8s linear;
  transition: all ease-in-out 0.7s;
`;

const Row = styled(R)`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: auto;
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20%;
  overflow: auto;
  ${({ size }) =>
    size.width <= 776
      ? ` padding: 5% 0 35% 0;width: 75%;`
      : 'padding: 5% 0 25% 0;width: 60%;'}
`;
const ContentRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  margin: 25px 0;
`;
