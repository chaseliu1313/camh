import React from 'react';
import StepCard, {
  StepOptionCard,
  StepOptionButton,
} from '../components/Cards/StepCard';
import Heading from '../components/Text/Heading';
import { colorPalette } from '../theme/resource';
import { action } from '@storybook/addon-actions';

export default {
  component: StepOptionCard,
  title: 'StepOptionCard',
  excludeStories: /.*Data$/,
};

export const actionData = {
  onClick: action('onClick'),
};

export const Default = () => (
  <StepOptionCard>
    <StepOptionButton label="No" onClick={actionData.onClick} />
    <StepCard background={colorPalette(3)} shadow="none" radius="0">
      <Heading
        type="h1"
        weight="normal"
        size="3vmin"
        color="white"
        align="center"
        lineHeight="13vh"
      >
        OptionCard
      </Heading>
    </StepCard>
    <StepOptionButton label="Yes" color="green" onClick={actionData.onClick} />
  </StepOptionCard>
);

/**
 * 
<StepOptionCard>
    <StepOptionButton label="No" onClick={actionData.onClick} />
    <StepCard background={colorPalette(3)}>
      <Heading
        type="h1"
        weight="normal"
        size="3vmin"
        color="white"
        align="center"
        lineHeight="13vh"
      >
        OptionCard
      </Heading>
    </StepCard>
    <StepOptionButton label="Yes" color="green" onClick={actionData.onClick} />
  </StepOptionCard>;
 * 
 */
