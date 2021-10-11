/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'clsx';

import Checkbox from '../Checkbox';

import './InfoBox.scss';

interface InfoBoxProps {
  additionalInfo?: React.ReactNode;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  img?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  small?: boolean;
  title: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  additionalInfo,
  checked,
  children,
  className,
  disabled,
  img,
  onChange,
  small,
  title,
}) => {
  const infoBoxClassNames = classNames('ib', className, { small });

  const isImgAvailable = img && !small;

  return (
    <label className={infoBoxClassNames}>
      <div>
        <div className="ib__stn">
          <Checkbox checked={checked} disabled={disabled} onChange={onChange} />
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
