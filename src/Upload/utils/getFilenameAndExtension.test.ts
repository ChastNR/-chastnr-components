import { getFilenameAndExtension } from './getFilenameAndExtension';

describe('getFilenameAndExtension', () => {
  it('should return expected result', () => {
    const fileName = 'test.txt';
    const expected = ['test', 'txt'];

    const result = getFilenameAndExtension(fileName);

    expect(result).toStrictEqual(expected);
  });
});
