import { IOption } from '../../types';

export const createSelectedItems = (
  options: IOption[],
  selected: IOption[],
  separator = ', '
): string => {
  const selectedTitles = options.reduce((acc: React.ReactNode[], o) => {
    const option = selected.find((s) => o.value === s.value);

    if (option) {
      acc.push(option.title);
    }

    return acc;
  }, []);

  return selectedTitles.join(separator);
};
