import { PropsWithChildren } from 'react';
import classNames from 'clsx';

import './Form.scss';

interface IFormProps
  extends PropsWithChildren<{
    className?: string;
    title?: React.ReactNode;
  }> {}

export const Form: React.FC<IFormProps> = ({ className, children, title }) => {
  const formClassNames = classNames('frm', className);

  return (
    <div className={formClassNames}>
      <div>
        {title && (
          <div className="frm__title">
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
