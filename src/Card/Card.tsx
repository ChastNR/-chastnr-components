import { PropsWithChildren } from 'react';
import classNames from 'clsx';
import { Button } from '../Button';

import './Card.scss';

interface ICardProps
  extends PropsWithChildren<{
    animate?: boolean;
    buttonText: React.ReactNode;
    className?: string;
    imgSrc: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    size?: 'small' | 'medium';
  }> {}

export const Card: React.FC<ICardProps> = ({
  animate = true,
  buttonText,
  children,
  className,
  imgSrc,
  onClick,
  size = 'medium',
}) => {
  const cardClassNames = classNames('cd', className, {
    size,
  });

  const boxClassNames = classNames('cd__box', {
    animate,
  });

  return (
    <div className={cardClassNames}>
      <div>
        <div className={boxClassNames}>
          <div>
            <div className="cd__pctr">
              <img alt="alt" src={imgSrc} />
            </div>
            <div className="cd__cnt">
              <div className="cd__stn">{children}</div>
              <div className="cd__stn">
                <Button onClick={onClick}>{buttonText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
