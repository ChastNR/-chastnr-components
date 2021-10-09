import classNames from 'clsx';

import DropdownElement, { DropdownItem } from './DropdownItem';

import './Dropdown.scss';

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ className, children, items }) => {
  const dropdownClassNames = classNames('dd', className);

  return (
    <div className={dropdownClassNames}>
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
};

export default Dropdown;
