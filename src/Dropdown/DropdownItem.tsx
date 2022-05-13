import { Link } from 'react-router-dom';

export interface IDropdownItem {
  id: string | number;
  title: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
}

export const DropdownElement: React.FC<IDropdownItem> = ({ to, title, onClick, onKeyDown }) => (
  <li>
    <Link onClick={onClick} onKeyDown={onKeyDown} to={to}>
      {title}
    </Link>
  </li>
);
