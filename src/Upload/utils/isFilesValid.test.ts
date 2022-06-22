import { isFilesValid } from './isFilesValid';

describe('isFilesValid', () => {
  const testFile = new File(['test'], 'test.txt', {
    type: 'text/plain',
  });

  it('should return truthy result when accept is undefined and maxSize equals zero', () => {
    const result = isFilesValid([testFile]);
    expect(result).toBeTruthy();
  });

  it('should return falsy result when file extension is not valid', () => {
    const result = isFilesValid([testFile], '.docx');
    expect(result).toBeFalsy();
  });

  it('should return falsy result when fileSize is more than maxSize', () => {
    const result = isFilesValid([testFile], '', 0.001);
    expect(result).toBeFalsy();
  });

  it('should return truthy result when file is valid', () => {
    const result = isFilesValid([testFile], '.txt', 1);
    expect(result).toBeTruthy();
  });
});
