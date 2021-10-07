import { Link } from 'react-router-dom';

import classNames from 'clsx';

import { Ring } from '../base';

import './Button.scss';

interface LocationProps {
  pathname?: string;
  search?: string;
  state?: unknown;
}

interface ButtonProps {
  buttonStyle?: 'link' | 'outline' | 'icon';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string | LocationProps;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
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
    btn__link: buttonStyle === 'link',
    btn__icon: buttonStyle === 'icon',
    btn__outline: buttonStyle === 'outline',
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

export default Button;
