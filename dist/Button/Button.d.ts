/// <reference types="react" />
import "./Button.scss";
interface LocationProps {
    pathname?: string;
    search?: string;
    state?: unknown;
}
declare type ButtonStyle = "link" | "outline" | "icon";
interface ButtonProps {
    buttonStyle?: ButtonStyle;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    to?: string | LocationProps;
    type?: "submit" | "reset" | "button";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
