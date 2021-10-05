/// <reference types="react" />
export interface DropdownItem {
    id: string | number;
    title: React.ReactNode;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
}
declare const DropdownElement: React.FC<DropdownItem>;
export default DropdownElement;
