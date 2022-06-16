/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { IOption } from '../types';
import { Select } from './Select';

const componentMeta: ComponentMeta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
};

const testOptions: IOption[] = [{ title: 'Test 1', value: 'Test1' }];

export const DefaultSelect = () => {
  const [value, setValue] = useState<IOption>();

  return (
    <Select
      label="Выберите файлы или перетяните их сюда"
      onSelect={setValue}
      options={testOptions}
      selected={value}
    />
  );
};

export const Form = () => {
  const [value, setValue] = useState<IOption>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.test.value) {
      e.currentTarget.test.focus();
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Select
        label="Выберите файлы или перетяните их сюда"
        onSelect={setValue}
        options={testOptions}
        selected={value}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default componentMeta;
