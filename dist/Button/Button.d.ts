/// <reference types="react" />
import './Button.scss';
interface LocationProps {
    pathname?: string;
    search?: string;
    state?: unknown;
}
interface ButtonProps {
    buttonStyle?: 'link' | 'outline' | 'icon';
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    to?: string | LocationProps;
    type?: 'submit' | 'reset' | 'button';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
