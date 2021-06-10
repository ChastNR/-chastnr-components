import React from "react";

import { ReactComponent as TickSvg } from "./tick.svg";

import "./Tick.scss";

const Tick: React.FC = () => (
  <span className="tick">
    <TickSvg />
  </span>
);

export { Tick, TickSvg };
