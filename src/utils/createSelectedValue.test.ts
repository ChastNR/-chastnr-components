import { IOption } from '../types';
import { createSelectedValue } from './createSelectedValue';

describe('createSelectedValue', () => {
  it('should return empty array', () => {
    const items = createSelectedValue();

    expect(items.length).toEqual(0);
  });

  it('should return array of selected options when isMulti equals true', () => {
    const selectedItems: IOption[] = [{ title: 'Test', value: 'Test' }];
    const isMulti = true;

    const items = createSelectedValue(selectedItems, isMulti);

    expect(items.length).toEqual(1);
    expect(items[0].value).toMatch('Test');
  });

  it('should return array of selected options when option provided', () => {
    const selectedItems: IOption = { title: 'Test', value: 'Test' };

    const items = createSelectedValue(selectedItems);

    expect(items.length).toEqual(1);
    expect(items[0].value).toMatch('Test');
  });
});
