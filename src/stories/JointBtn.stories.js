import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JointBtnContainer, { JointBtn } from '../components/JointBtn';

export default {
  component: JointBtn,
  title: 'Joint Buttons',
  excludeStories: /.*Data$/,
};

const btnData = {
  btn1: { label: 'Mild', disabled: false, primary: false },
  btn2: { label: 'Sever', disabled: false, primary: true },
};
export const actionData = {
  onClick: () => {},
};

export const Default = () => (
  <JointBtnContainer>
    <JointBtn btn={{ ...btnData.btn1 }} {...actionData} />
    <JointBtn btn={{ ...btnData.btn2 }} {...actionData} />
  </JointBtnContainer>
);
