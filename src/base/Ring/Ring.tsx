import classNames from "clsx";

import { ReactComponent as Circle } from "./circle.svg";

import "./Ring.scss";

interface RingProps {
  size?: "small" | "large";
}

const Ring: React.FC<RingProps> = ({ size = "small" }) => {
  const ringClassNames = classNames("ring", {
    ring__small: size === "small",
  });

  return (
    <div className={ringClassNames}>
      <Circle />
    </div>
  );
};

export default Ring;
