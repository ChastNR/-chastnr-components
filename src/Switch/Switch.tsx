import classNames from "clsx";

import "./Switch.scss";

interface SwitchProps {
  name?: string;
  checked?: boolean;
  onChange?: React.MouseEventHandler<HTMLSpanElement>;
}

const Switch: React.FC<SwitchProps> = ({ name, checked, onChange }) => {
  const switchClassNames = classNames("sw", {
    sw__checked: checked,
  });

  return (
    <span className={switchClassNames} onClick={onChange}>
      <span className="sw__box" tabIndex={-1}>
        <input checked={checked} hidden name={name} type="checkbox" />
        <span className="sw__box__left" />
        <span className="sw__box__right" />
      </span>
    </span>
  );
};

export default Switch;
