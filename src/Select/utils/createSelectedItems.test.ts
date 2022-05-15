import { IOption } from '../../types';
import { createSelectedItems } from './createSelectedItems';

describe('createSelectedItems', () => {
  it('should return valid value', () => {
    const options: IOption[] = [
      {
        title: 'Test',
        value: 'test',
      },
      {
        title: 'Test 2',
        value: 'test 2',
      },
    ];

    const selected: IOption[] = [options[0]];

    const items = createSelectedItems(options, selected);

    expect(items).toEqual('Test');
  });
});
