import { formatBytes } from './formatBytes';

describe('formatBytes', () => {
  it('should return expected result when file size is more than 999 Kb', () => {
    const result = formatBytes(1000 * 1024);
    expect(result).toMatch('0.98 MB');
  });

  it('should return expected result when file size is less than 999 Kb', () => {
    const result = formatBytes(500 * 1024);
    expect(result).toMatch('500.00 KB');
  });
});
