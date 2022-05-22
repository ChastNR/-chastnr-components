import { ChangeEvent, useState } from 'react';
import classNames from 'clsx';
import { Control } from '../../Control';
import { FilesInfo } from '../FilesInfo';
import { createFileUploadError } from '../utils';

import './Upload.scss';

interface IUploadProps {
  accept?: string;
  className?: string;
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  files?: File[];
  info?: React.ReactNode;
  label: React.ReactNode;
  maxSizeKb?: number;
  multiple?: boolean;
  name?: string;
  onChange: (files: File[]) => void;
  requiredMessage?: React.ReactNode;
  startValidate?: boolean;
}

export const Upload: React.FC<IUploadProps> = ({
  accept,
  className,
  disabled,
  errorMessage,
  files = [],
  info,
  label,
  maxSizeKb,
  multiple,
  name,
  onChange,
  requiredMessage,
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

  const controlClassName = classNames('upl', className);

  return (
    <Control
      className={controlClassName}
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
