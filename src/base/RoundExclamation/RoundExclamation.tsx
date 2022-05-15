import React from 'react';
import { ReactComponent as RoundExclamationSvg } from './roundExclamation.svg';

import './RoundExclamation.scss';

const RoundExclamation: React.FC = () => (
  <span className="rnd__exl">
    <RoundExclamationSvg />
  </span>
);

export { RoundExclamation, RoundExclamationSvg };
