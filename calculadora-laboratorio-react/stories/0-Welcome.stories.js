import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook of Calculator',
};
