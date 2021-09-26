/// <reference types="react" />
import { Option } from "../types";
interface OptionProps {
    option: Option;
    checked?: boolean;
    isMulti?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const SelectOption: React.FC<OptionProps>;
export default SelectOption;
