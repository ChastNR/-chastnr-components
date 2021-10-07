/// <reference types="react" />
import './Control.scss';
interface ControlProps {
    className?: string;
    content?: React.ReactNode;
    disabled?: boolean;
    name?: string;
    error?: React.ReactNode;
    hasValue: boolean;
    label: React.ReactNode;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    required?: boolean;
    role?: React.AriaRole;
}
declare const Control: import("react").ForwardRefExoticComponent<ControlProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Control;
