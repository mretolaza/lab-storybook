import React from 'react';
import ButtonNumber from "../src/Components/ButtonNumber/ButtonNumber.jsx"
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button-Number',
};
export const buttonNumber = () =>  <ButtonNumber click={() => 0} clickOp={() => 0} />;
