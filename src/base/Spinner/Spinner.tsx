import React from 'react';
import { ReactComponent as SpinnerSvg } from './spinner.svg';

import './Spinner.scss';

const Spinner: React.FC = () => (
  <span className="spnr">
    <SpinnerSvg viewBox="0 0 100 100" />
  </span>
);

export { Spinner, SpinnerSvg };
