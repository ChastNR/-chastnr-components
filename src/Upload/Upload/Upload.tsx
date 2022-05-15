import { ChangeEvent, useState } from 'react';
import { Control } from '../../Control';
import { FilesInfo } from '../FilesInfo';
import { createFileUploadError } from '../utils';

import './Upload.scss';

interface IUploadProps {
  accept?: string;
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  info?: React.ReactNode;
  label: React.ReactNode;
  multiple?: boolean;
  files?: File[];
  maxSizeKb?: number;
  name?: string;
  requiredMessage?: React.ReactNode;
  onChange: (files: File[]) => void;
  startValidate?: boolean;
}

export const Upload: React.FC<IUploadProps> = ({
  accept,
  disabled,
  errorMessage,
  info,
  files = [],
  label,
  name,
  multiple,
  maxSizeKb,
  requiredMessage,
  onChange,
  startValidate = false,
}) => {
  const [validate, setValidate] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files[0];

    if (!multiple) {
      onChange([file]);
    } else {
      const isTheSameFileExists = files.some((uploadedFile) => uploadedFile.name === file.name);
      const uploadedFiles = isTheSameFileExists ? files : [...files, file];
      onChange(uploadedFiles);
    }

    setValidate(true);
  };

  const handleDelete = (fileName: string) => {
    const uploadedFiles = files.filter((uploadedFile) => uploadedFile.name !== fileName);
    onChange(uploadedFiles);
  };

  const error = createFileUploadError({
    accept,
    validate,
    startValidate,
    errorMessage,
    requiredMessage,
    files,
    maxSizeKb,
  });

  return (
    <Control
      className="upl"
      disabled={disabled}
      error={error}
      info={<FilesInfo accept={accept} files={files} info={info} onDeleteClick={handleDelete} />}
      label={label}
      name={name}
      required={!!requiredMessage}
    >
      <input
        accept={accept}
        disabled={disabled}
        multiple={multiple}
        name={name}
        onChange={handleChange}
        required={!!requiredMessage}
        type="file"
      />
    </Control>
  );
};
