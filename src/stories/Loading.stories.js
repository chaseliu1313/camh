import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Loading from '../components/Loading';

export default {
  component: Loading,
  title: 'Loading',
  excludeStories: /.*Data$/,
};

export const Default = () => <Loading loading={true}></Loading>;
