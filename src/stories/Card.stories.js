import React from 'react';
import Heading, { Paragraph, SubText } from '../components/Text/Heading';
import Card from '../components/Cards/Card';
import { PrimaryColor, SecondaryColor_Blk } from '../theme/resource';

export default {
  component: Card,
  title: 'Card',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Card>
    <Heading type="h1" weight="bold" size="5vmin">
      This is the title
    </Heading>
    <SubText weight="100">Sub Description</SubText>
    <Paragraph weight="normal" size="2vmin">
      Psychology is the science of behavior and mind. Psychology includes the
      study of conscious and unconscious phenomena, as well as feeling and
      thought. It is an academic discipline of immense scope. Psychologists seek
      an understanding of the emergent properties of brains, and all the variety
      of phenomena linked to those emergent properties, joining this way the
      broader neuro-scientific group of researchers. As a social science it aims
      to understand individuals and groups by establishing general principles
      and researching specific cases.
    </Paragraph>
  </Card>
);
