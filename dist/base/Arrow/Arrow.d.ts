/// <reference types="react" />
import { ReactComponent as ArrowSvg } from "./arrow.svg";
import "./Arrow.scss";
interface ArrowProps {
    direction?: "top" | "right" | "left";
}
declare const Arrow: React.FC<ArrowProps>;
export { Arrow, ArrowSvg };
