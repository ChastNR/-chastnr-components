import { PropsWithChildren } from 'react';
import './Container.scss';

export const OptionsContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="slt__opts">{children}</div>
);
