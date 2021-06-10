import { memo } from "react";

import classNames from "clsx";

import { ReactComponent as ArrowSvg } from "./arrow.svg";

import "./Arrow.scss";

type Direction = "top" | "right" | "left";

interface ArrowProps {
  direction?: Direction;
}

const Arrow: React.FC<ArrowProps> = memo(({ direction }) => {
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
});

export { Arrow, ArrowSvg };
