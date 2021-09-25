import { useCallback, useState } from "react";

import Checkbox from "../Checkbox";
import { mouseDownPrevent } from "../utils";

export interface Option<T = string | number> {
  title: React.ReactNode;
  value: T;
}

interface OptionProps {
  option: Option;
  checked?: boolean;
  isMulti?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SelectOption: React.FC<OptionProps> = ({ checked = false, option, isMulti, onClick }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setChecked((s) => !s);

      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <button className="slt__opt" onClick={handleClick} onMouseDown={mouseDownPrevent} type="button">
      <div className="slt__opt__txt">{option.title}</div>
      {isMulti && <Checkbox checked={isChecked} />}
    </button>
  );
};

export default SelectOption;
