/* eslint-disable jsx-a11y/label-has-associated-control */
import Checkbox from "../Checkbox";

import "./InfoBox.scss";

interface InfoBoxProps {
  title: React.ReactNode;
  additionalInfo?: React.ReactNode;
  img?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ additionalInfo, img, title, children }) => (
  <label className="ib">
    <div>
      <div className="ib__stn">
        <Checkbox />
      </div>
      {img && (
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

export default InfoBox;
