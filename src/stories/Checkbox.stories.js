import React from 'react';
import Checkbox from '../components/CheckBox/Checkbox';

export default {
  component: Checkbox,
  title: 'Check Box',
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Checkbox content="Try check it." />;
};
