import { Option } from '../types';

const createSelectedOptions = (
  selected: Option<string | number>[],
  option: Option
): Option<string | number>[] => {
  const isOptionSelected = selected.some((o) => o.value === option.value);

  return isOptionSelected
    ? selected.filter((o) => o.value !== option.value)
    : selected.concat(option);
};

export default createSelectedOptions;
