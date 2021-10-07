import classNames from 'clsx';

import Button from '../Button';

import './Card.scss';

interface CardProps {
  animate?: boolean;
  className?: string;
  size?: 'small' | 'medium';
  imgSrc: string;
  buttonText: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Card: React.FC<CardProps> = ({
  animate = true,
  size = 'medium',
  imgSrc,
  buttonText,
  children,
  onClick,
}) => {
  const cardClassNames = classNames('cd', {
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

export default Card;
