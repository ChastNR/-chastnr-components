import { Option } from "../Option";

const createSelectedValue = (selected?: Option | Option[], isMulti?: boolean): Option[] => {
  if (!selected) {
    return [];
  }

  if (isMulti) {
    return selected as Option[];
  }

  return [selected as Option];
};

export default createSelectedValue;
