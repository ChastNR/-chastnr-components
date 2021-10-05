/// <reference types="react" />
import "./Switch.scss";
interface SwitchProps {
    name?: string;
    checked?: boolean;
    onChange?: React.MouseEventHandler<HTMLSpanElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLSpanElement>;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
