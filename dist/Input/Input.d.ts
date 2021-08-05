/// <reference types="react" />
import { InputTypes } from "../types";
import "./Input.scss";
interface InputProps {
    autoComplete?: "on" | "off";
    className?: string;
    content?: React.ReactNode;
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    id?: string;
    isOptionsAvailable?: boolean;
    label: React.ReactNode;
    maxLength?: number;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onChange: (value: string) => void;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    options?: any[];
    placeholder?: string;
    regExp?: RegExp;
    renderOption?: (option: any, index: number) => React.ReactNode;
    requiredMessage?: React.ReactNode;
    startValidate?: boolean;
    type?: InputTypes;
    value: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
