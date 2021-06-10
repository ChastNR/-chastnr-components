import { ReactComponent as CheckboxSvg } from "./checkbox.svg";

import "./Checkbox.scss";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled, onChange = () => {} }) => (
  <div className="cb">
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

export default Checkbox;
