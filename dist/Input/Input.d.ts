/// <reference types="react" />
import { InputTypes } from '../types';
import './Input.scss';
export interface InputProps {
    autoComplete?: 'on' | 'off';
    className?: string;
    content?: React.ReactNode;
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    id?: string;
    label: React.ReactNode;
    maxLength?: number;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onChange: (value: string) => void;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    placeholder?: string;
    regExp?: RegExp;
    requiredMessage?: React.ReactNode;
    startValidate?: boolean;
    type?: InputTypes;
    value: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
