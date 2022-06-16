import { PropsWithChildren } from 'react';
import classNames from 'clsx';

import './Tab.scss';

interface ITabProps
  extends PropsWithChildren<{
    animate?: boolean;
    className?: string;
    content?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }> {}

export const Tab: React.FC<ITabProps> = ({
  animate = true,
  className,
  content,
  children,
  onClick,
}) => {
  const tabClassNames = classNames('tb__btn', className, {
    animate,
    'cursor-pointer': !!onClick,
  });

  return (
    <button className={tabClassNames} onClick={onClick} type="button">
      <span className="tb__box" tabIndex={-1}>
        <span className="tb__txt">{children}</span>
        {content && <span className="tb__cnt">{content}</span>}
      </span>
    </button>
  );
};
