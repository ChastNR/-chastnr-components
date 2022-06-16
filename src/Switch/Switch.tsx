/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'clsx';

import './Switch.scss';

interface ISwitchProps {
  checked?: boolean;
  className?: string;
  name?: string;
  onChange?: React.MouseEventHandler<HTMLSpanElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLSpanElement>;
}

export const Switch: React.FC<ISwitchProps> = ({
  checked = false,
  className,
  name,
  onChange,
  onKeyDown,
}) => {
  const switchClassNames = classNames('sw', className, {
    'sw--checked': checked,
  });

  return (
    <span className={switchClassNames} onClick={onChange} onKeyDown={onKeyDown}>
      <span className="sw__box" tabIndex={-1}>
        <input defaultChecked={checked} hidden name={name} type="checkbox" />
        <span className="sw__box__left" />
        <span className="sw__box__right" />
      </span>
    </span>
  );
};
