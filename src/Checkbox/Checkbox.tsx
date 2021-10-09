import classNames from 'clsx';

import { ReactComponent as CheckboxSvg } from './checkbox.svg';

import './Checkbox.scss';

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  disabled,
  onChange = () => {},
}) => {
  const checkBoxClassNames = classNames('cb', className);

  return (
    <div className={checkBoxClassNames}>
      <input
        checked={checked}
        className="cb__input"
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
      />
      <span>
        <span>
          <span>
            <CheckboxSvg />
          </span>
        </span>
      </span>
    </div>
  );
};

export default Checkbox;
