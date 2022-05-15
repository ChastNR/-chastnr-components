import { ReactNode } from 'react';
import { isFilesValid } from './isFilesValid';

interface IOptions {
  validate?: boolean;
  startValidate?: boolean;
  requiredMessage?: ReactNode;
  errorMessage?: ReactNode;
  files: File[];
  accept?: string;
  maxSizeKb?: number;
}

export const createFileUploadError = ({
  accept,
  validate,
  startValidate,
  errorMessage,
  requiredMessage,
  files,
  maxSizeKb,
}: IOptions): ReactNode => {
  if (!validate && !startValidate) {
    return null;
  }

  const filesLength = files.length;

  if (requiredMessage && !filesLength) {
    return requiredMessage;
  }

  if (!isFilesValid(files, accept, maxSizeKb)) {
    return errorMessage;
  }

  if (startValidate) {
    return errorMessage;
  }

  return null;
};
