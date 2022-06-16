import { PropsWithChildren } from 'react';
import classNames from 'clsx';

import './CardsContainer.scss';

interface ICardsContainerProps
  extends PropsWithChildren<{
    className?: string;
  }> {}

export const CardsContainer: React.FC<ICardsContainerProps> = ({ className, children }) => {
  const containerClassName = classNames('cds__cnt', className);

  return <div className={containerClassName}>{children}</div>;
};
