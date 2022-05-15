export const getFileExtension = (fileName: string): string => fileName.split('.').pop();

export const getFilenameAndExtension = (fileName: string): [name: string, extension: string] => {
  const fileNameExtension = fileName.replace(/^.*[\\/]/, '');
  const name = fileNameExtension.substring(0, fileNameExtension.lastIndexOf('.'));
  const extension = getFileExtension(fileNameExtension);
  return [name, extension];
};
