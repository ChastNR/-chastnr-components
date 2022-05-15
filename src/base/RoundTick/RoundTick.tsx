import React from 'react';
import { ReactComponent as RoundTickSvg } from './roundTick.svg';

import './RoundTick.scss';

const RoundTick: React.FC = () => (
  <span className="rnd__tick">
    <RoundTickSvg />
  </span>
);

export { RoundTick, RoundTickSvg };
