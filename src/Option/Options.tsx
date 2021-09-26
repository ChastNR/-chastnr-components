import { Option } from "../types";
import OptionsContainer from "./Container";
import SelectOption from "./Option";

import "./Options.scss";

interface OptionsProps {
  options: Option[];
  isMulti?: boolean;
  onClick: (value: Option) => () => void;
}

const Options: React.FC<OptionsProps> = ({ options, onClick, isMulti = false }) => (
  <OptionsContainer>
    {options.map((o) => (
      <SelectOption isMulti={isMulti} key={o.value} onClick={onClick(o)} option={o} />
    ))}
  </OptionsContainer>
);

export default Options;
