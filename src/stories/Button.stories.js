import React from 'react';

import Button from '../components/Buttons/Buttons';

export default {
  component: Button,
  title: 'Buttons',
  excludeStories: /.*Data$/,
};

export const OutlinedDefault = () => {
  return <Button type="outlined">Default</Button>;
};

export const OutlinedPrimary = () => {
  return (
    <Button primary={true} type="outlined">
      Primary
    </Button>
  );
};

export const OutlinedError = () => {
  return (
    <Button err={true} type="outlined">
      ERROR
    </Button>
  );
};

export const SolidDefault = () => {
  return <Button>Default</Button>;
};

export const SolidPrimary = () => {
  return <Button primary={true}>Primary</Button>;
};

export const SolidError = () => {
  return <Button err={true}>ERROR</Button>;
};
