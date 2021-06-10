import { Link } from "react-router-dom";

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

export const Dropdown: React.FC<DropdownProps> = ({ children, items }) => (
  <div className="dd">
    <span className="dd__cnt">{children}</span>
    <span className="dd__itms">
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.to ? (
              <Link onClick={i.onClick} to={i.to}>
                {i.title}
              </Link>
            ) : (
              <a role="button" onClick={i.onClick}>
                {i.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </span>
  </div>
);
