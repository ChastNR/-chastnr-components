import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Switch } from './Switch';

const componentMeta: ComponentMeta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultSwitch = () => {
  const [isChecked, setCheched] = useState(false);

  const handleChange = () => setCheched((s) => !s);

  return <Switch checked={isChecked} name="testName" onChange={handleChange} />;
};

export default componentMeta;
