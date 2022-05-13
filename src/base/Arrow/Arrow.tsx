import classNames from 'clsx';
import { ReactComponent as ArrowSvg } from './arrow.svg';

import './Arrow.scss';

interface ArrowProps {
  direction?: 'top' | 'right' | 'left';
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  const arrowClassNames = classNames('arrow', {
    'arrow--top': direction === 'top',
    'arrow--right': direction === 'right',
    'arrow--left': direction === 'left',
  });

  return (
    <div className={arrowClassNames}>
      <ArrowSvg />
    </div>
  );
};

export { Arrow, ArrowSvg };
