/// <reference types="react" />
import { DropdownItem } from './DropdownItem';
import './Dropdown.scss';
interface DropdownProps {
    items: DropdownItem[];
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
