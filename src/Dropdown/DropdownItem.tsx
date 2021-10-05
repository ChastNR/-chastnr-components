import { Link } from "react-router-dom";

export interface DropdownItem {
  id: string | number;
  title: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
}

const DropdownElement: React.FC<DropdownItem> = ({ to, title, onClick, onKeyDown }) => (
  <li>
    <Link onClick={onClick} onKeyDown={onKeyDown} to={to}>
      {title}
    </Link>
  </li>
);

export default DropdownElement;
