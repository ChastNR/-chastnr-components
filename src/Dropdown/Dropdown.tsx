import { PropsWithChildren } from 'react';
import classNames from 'clsx';
import { DropdownElement, IDropdownItem } from './DropdownItem';

import './Dropdown.scss';

interface IDropdownProps
  extends PropsWithChildren<{
    className?: string;
    items: IDropdownItem[];
  }> {}

export const Dropdown: React.FC<IDropdownProps> = ({ className, children, items }) => {
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
