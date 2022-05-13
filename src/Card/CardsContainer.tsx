import { PropsWithChildren } from 'react';
import './CardsContainer.scss';

export const CardsContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="cds__cnt">{children}</div>
);
