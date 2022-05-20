import classNames from 'clsx';
import { Spinner } from '../base';

import './Loader.scss';

interface ILoaderProps {
  className?: string;
  fullScreen?: boolean;
}

export const Loader: React.FC<ILoaderProps> = ({ className, fullScreen }) => {
  const loaderClassName = classNames('ldr', className, {
    fs: fullScreen,
  });

  return (
    <div className={loaderClassName}>
      <Spinner />
    </div>
  );
};
