/// <reference types="react" />
import "./Dropdown.scss";
export interface DropdownItem {
    id: string | number;
    title: React.ReactNode;
    to?: string;
    onClick?: () => void;
}
interface DropdownProps {
    items: DropdownItem[];
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
