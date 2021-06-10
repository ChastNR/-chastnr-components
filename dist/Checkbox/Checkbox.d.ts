/// <reference types="react" />
import "./Checkbox.scss";
interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
