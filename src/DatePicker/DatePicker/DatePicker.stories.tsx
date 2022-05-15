/* eslint-disable import/no-extraneous-dependencies */

import { ComponentMeta } from '@storybook/react';
import { DatePicker } from './DatePicker';

const componentMeta: ComponentMeta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultDatePicker = () => <DatePicker label="Test label" onSelect={() => {}} />;

export default componentMeta;
