import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

const componentMeta: ComponentMeta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultCheckbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => setChecked((s) => !s);

  return <Checkbox checked={isChecked} onChange={handleChange} />;
};

export default componentMeta;
