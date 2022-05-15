import React from 'react';
import { ReactComponent as CloseSvg } from './close.svg';

import './Close.scss';

const Close: React.FC = () => (
  <span className="close">
    <CloseSvg />
  </span>
);

export { Close, CloseSvg };
