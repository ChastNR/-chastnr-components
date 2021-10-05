import DropdownElement, { DropdownItem } from "./DropdownItem";

import "./Dropdown.scss";

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ children, items }) => (
  <div className="dd">
    <span className="dd__cnt">{children}</span>
    <span className="dd__itms">
      <ul>
        {items.map((i) => (
          <DropdownElement key={i.id} {...i} />
        ))}
      </ul>
    </span>
  </div>
);

export default Dropdown;
