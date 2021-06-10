/// <reference types="react" />
export interface Option<T = string | number> {
    title: React.ReactNode;
    value: T;
}
interface OptionProps {
    option: Option;
    checked?: boolean;
    isMulti?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const SelectOption: React.FC<OptionProps>;
export default SelectOption;
