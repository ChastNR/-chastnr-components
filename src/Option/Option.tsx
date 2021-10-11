import { useCallback, useState } from 'react';

import classNames from 'clsx';

import Checkbox from '../Checkbox';
import { Option } from '../types';
import { mouseDownPrevent } from '../utils';

interface OptionProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  isMulti?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  option: Option;
}

const SelectOption: React.FC<OptionProps> = ({
  checked = false,
  className,
  disabled,
  isMulti,
  onClick,
  option,
}) => {
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

  const optionsClassNames = classNames('slt__opt', className, {
    disabled,
  });

  return (
    <button
      className={optionsClassNames}
      onClick={handleClick}
      onMouseDown={mouseDownPrevent}
      type="button"
    >
      <div className="slt__opt__txt">{option.title}</div>
      {isMulti && <Checkbox checked={isChecked} />}
    </button>
  );
};

export default SelectOption;
