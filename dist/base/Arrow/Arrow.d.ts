/// <reference types="react" />
import { ReactComponent as ArrowSvg } from "./arrow.svg";
import "./Arrow.scss";
declare type Direction = "top" | "right" | "left";
interface ArrowProps {
    direction?: Direction;
}
declare const Arrow: React.FC<ArrowProps>;
export { Arrow, ArrowSvg };
