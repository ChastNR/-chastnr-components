import { getFileExtension } from './getFilenameAndExtension';

export const isFilesValid = (files: File[], accept?: string, maxSizeKb = 0) => {
  if (!accept && maxSizeKb <= 0) {
    return true;
  }

  const maxSizeInBytes = maxSizeKb * 1024;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (accept && !accept.includes(getFileExtension(file.name))) {
      return false;
    }

    if (maxSizeInBytes < file.size) {
      return false;
    }
  }

  return true;
};
