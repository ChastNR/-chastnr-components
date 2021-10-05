import classNames from "clsx";

import { ReactComponent as ArrowSvg } from "./arrow.svg";

import "./Arrow.scss";

interface ArrowProps {
  direction?: "top" | "right" | "left";
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  const arrowClassNames = classNames("arrow", {
    arrow__top: direction === "top",
    arrow__right: direction === "right",
    arrow__left: direction === "left",
  });

  return (
    <div className={arrowClassNames}>
      <ArrowSvg />
    </div>
  );
};

export { Arrow, ArrowSvg };
