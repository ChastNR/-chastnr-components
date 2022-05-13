import classNames from 'clsx';
import { ReactComponent as RingSvg } from './circle.svg';

import './Ring.scss';

interface RingProps {
  color?: string;
  size?: 'small' | 'large';
}

const Ring: React.FC<RingProps> = ({ color = '#1771e6', size = 'small' }) => {
  const ringClassNames = classNames('ring', {
    'ring--small': size === 'small',
  });

  return (
    <div className={ringClassNames}>
      <RingSvg stroke={color} />
    </div>
  );
};

export { Ring, RingSvg };
