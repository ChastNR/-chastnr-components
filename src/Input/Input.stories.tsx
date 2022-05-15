/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Input } from './Input';

const componentMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultInput = () => {
  const [value, setValue] = useState('');

  return <Input label="Test input" onChange={setValue} value={value} />;
};

export default componentMeta;
