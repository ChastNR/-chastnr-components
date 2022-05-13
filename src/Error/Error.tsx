import { PropsWithChildren, useState } from 'react';
import classNames from 'clsx';

import './Error.scss';

export const Error: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [height, setHeight] = useState(0);

  const handleRef = (element: HTMLDivElement | null) =>
    element && setHeight(children ? element.scrollHeight : 0);

  const errorClassNames = classNames('er__cntr', {
    error: height !== 0,
  });

  return (
    <div className={errorClassNames} ref={handleRef} style={{ height }}>
      <div>{children}</div>
    </div>
  );
};
