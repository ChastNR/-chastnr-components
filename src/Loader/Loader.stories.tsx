/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta } from '@storybook/react';
import { Loader } from './Loader';

const componentMeta: ComponentMeta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultLoader = () => <Loader />;

export default componentMeta;
