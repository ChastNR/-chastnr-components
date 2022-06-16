/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta } from '@storybook/react';
import { Tab } from './Tab';

const componentMeta: ComponentMeta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultTab = () => <Tab animate={false}>Test</Tab>;

export const ConfigurableTab = {
  args: {
    animate: true,
    children: 'Text',
  },
};

export default componentMeta;
