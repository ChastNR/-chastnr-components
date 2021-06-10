/// <reference types="react" />
import { Option } from "../Option";
import "./Select.scss";
interface SelectProps {
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    isMulti?: boolean;
    label: React.ReactNode;
    name?: string;
    onSelect: (value: Option | Option[]) => void;
    options: Option[];
    requiredMessage?: React.ReactNode;
    selected?: Option[];
}
declare const Select: React.FC<SelectProps>;
export default Select;
