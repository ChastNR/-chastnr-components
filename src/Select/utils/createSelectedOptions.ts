import { IOption } from '../../types';

export const createSelectedOptions = (
  selected: IOption<string | number>[],
  option: IOption
): IOption<string | number>[] => {
  const isOptionSelected = selected.some((o) => o.value === option.value);

  return isOptionSelected
    ? selected.filter((o) => o.value !== option.value)
    : selected.concat(option);
};
