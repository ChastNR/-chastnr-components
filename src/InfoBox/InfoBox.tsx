/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'clsx';

import Checkbox from '../Checkbox';

import './InfoBox.scss';

interface InfoBoxProps {
  additionalInfo?: React.ReactNode;
  className?: string;
  img?: string;
  small?: boolean;
  title: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  additionalInfo,
  className,
  img,
  small,
  title,
  children,
}) => {
  const infoBoxClassNames = classNames('ib', className, { small });

  const isImgAvailable = img && !small;

  return (
    <label className={infoBoxClassNames}>
      <div>
        <div className="ib__stn">
          <Checkbox />
        </div>
        {isImgAvailable && (
          <div className="ib__stn">
            <img alt="icon" src={img} />
          </div>
        )}
        <div className="ib__stn">
          <div className="ib__stn__title">{title}</div>
          <div className="ib__stn__cnt">{children}</div>
        </div>
        <div className="ib__stn">
          <span>{additionalInfo}</span>
        </div>
      </div>
    </label>
  );
};

export default InfoBox;
