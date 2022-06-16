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

export const Form = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.test.value) {
      e.currentTarget.test.focus();
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Input label="Test input" name="test" onChange={setValue} value={value} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default componentMeta;
