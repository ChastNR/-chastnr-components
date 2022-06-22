import { IOption } from '../../types';
import { createSelectedOptions } from './createSelectedOptions';

describe('createSelectedOptions', () => {
  const testOption1: IOption = { title: 'testTitle1', value: 'testValue1' };
  const testOption2: IOption = { title: 'testTitle2', value: 'testValue2' };

  it('should return expected result when option selected', () => {
    const selected: IOption<string | number>[] = [testOption1, testOption2];
    const expected: IOption<string | number>[] = [testOption2];

    const result = createSelectedOptions(selected, testOption1);

    expect(result).toStrictEqual(expected);
  });

  it('should return expected result when option is not selected', () => {
    const selected: IOption<string | number>[] = [testOption1];
    const expected: IOption<string | number>[] = [testOption1, testOption2];

    const result = createSelectedOptions(selected, testOption2);

    expect(result).toStrictEqual(expected);
  });
});
