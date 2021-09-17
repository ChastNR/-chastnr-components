/// <reference types="react" />
import { Option } from "../Option";
import "./Select.scss";
interface SelectProps {
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    label: React.ReactNode;
    onSelect: ((value: Option) => void) | ((value: Option[]) => void);
    options: Option[];
    optionsSeparator?: string;
    requiredMessage?: React.ReactNode;
    selected?: Option | Option[];
}
declare const Select: React.FC<SelectProps>;
export default Select;
