import React from 'react';
import StepCard from '../components/Cards/StepCard';
import Heading from '../components/Text/Heading';
import { colorPalette } from '../theme/resource';

export default {
  component: StepCard,
  title: 'StepCard',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <div>
    <StepCard background={colorPalette(2)}>
      <Heading
        type="h1"
        weight="normal"
        size="3vmin"
        color="white"
        align="center"
        lineHeight="13vh"
      >
        Card1
      </Heading>
    </StepCard>
    <br />
    <StepCard background={colorPalette(2)}>
      <Heading
        type="h1"
        weight="normal"
        size="3vmin"
        color="white"
        align="center"
        lineHeight="13vh"
      >
        Card2
      </Heading>
    </StepCard>
    <br />
    <StepCard background={colorPalette(2)}>
      <Heading
        type="h1"
        weight="normal"
        size="3vmin"
        color="white"
        align="center"
        lineHeight="13vh"
      >
        Card2
      </Heading>
    </StepCard>
  </div>
);
