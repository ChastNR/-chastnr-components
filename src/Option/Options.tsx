import SelectOption, { Option } from "./Option";

import "./Options.scss";

interface OptionsProps {
  options: Option[];
  isMulti?: boolean;
  onClick: (value: Option) => () => void;
}

const Options: React.FC<OptionsProps> = ({ options, onClick, isMulti = false }) => (
  <div className="slt__opts">
    {options.map((o) => (
      <SelectOption isMulti={isMulti} key={o.value} onClick={onClick(o)} option={o} />
    ))}
  </div>
);

export default Options;
