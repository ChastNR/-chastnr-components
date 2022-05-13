import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'clsx';
import { Ring } from '../base';

import './Button.scss';

interface ILocationProps {
  pathname?: string;
  search?: string;
  state?: unknown;
}

interface IButtonProps
  extends PropsWithChildren<{
    buttonStyle?: 'link' | 'outline' | 'icon';
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    to?: string | ILocationProps;
    type?: 'submit' | 'reset' | 'button';
  }> {}

export const Button: React.FC<IButtonProps> = ({
  buttonStyle,
  children,
  className,
  disabled,
  isLoading,
  onClick,
  to,
  type = 'button',
}) => {
  const buttonClassNames = classNames('btn', className, {
    'btn--link': buttonStyle === 'link',
    'btn--icon': buttonStyle === 'icon',
    'btn--outline': buttonStyle === 'outline',
  });

  const button = (
    <button className={buttonClassNames} disabled={disabled} onClick={onClick} type={type}>
      <div className="btn__txt__cntr" tabIndex={-1}>
        <div className="btn__txt__cntr__txt">{isLoading ? <Ring /> : children}</div>
      </div>
    </button>
  );

  return to ? (
    <Link tabIndex={-1} to={to}>
      {button}
    </Link>
  ) : (
    button
  );
};
