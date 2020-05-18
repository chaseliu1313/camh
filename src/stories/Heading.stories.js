import React from 'react';
import Heading, { Paragraph, SubText } from '../components/Text/Heading';

export default {
  component: Heading,
  title: 'Styled Text',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Heading type="h1" weight="bold">
    Heading H1
  </Heading>
);

export const H2 = () => (
  <Heading type="h2" weight="normal" size="7vmin">
    Heading H2
  </Heading>
);

export const Para = () => <Paragraph weight="normal">Paragraph</Paragraph>;
export const ST = () => <SubText weight="normal">Paragraph</SubText>;
