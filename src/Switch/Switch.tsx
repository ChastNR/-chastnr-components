import classNames from 'clsx';

import './Switch.scss';

interface ISwitchProps {
  name?: string;
  checked?: boolean;
  onChange?: React.MouseEventHandler<HTMLSpanElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLSpanElement>;
}

export const Switch: React.FC<ISwitchProps> = ({ name, checked, onChange, onKeyDown }) => {
  const switchClassNames = classNames('sw', {
    'sw--checked': checked,
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span className={switchClassNames} onClick={onChange} onKeyDown={onKeyDown}>
      <span className="sw__box" tabIndex={-1}>
        <input checked={checked} hidden name={name} type="checkbox" />
        <span className="sw__box__left" />
        <span className="sw__box__right" />
      </span>
    </span>
  );
};
