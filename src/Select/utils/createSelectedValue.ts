import { IOption } from '../../types';

export const createSelectedValue = (
  selected?: IOption | IOption[],
  isMulti?: boolean
): IOption[] => {
  if (!selected) {
    return [];
  }

  if (isMulti) {
    return selected as IOption[];
  }

  return [selected as IOption];
};
