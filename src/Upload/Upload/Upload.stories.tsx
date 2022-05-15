/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Upload } from './Upload';

const componentMeta: ComponentMeta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultUpload = () => {
  const [value, setValue] = useState<File[]>([]);

  return (
    <Upload
      accept=".jpg"
      files={value}
      info="Файлы pdf, jpeg, jpg, bmp, xlsx, docx не больше 10 Мб"
      label="Выберите файлы или перетяните их сюда"
      onChange={setValue}
    />
  );
};

export default componentMeta;
