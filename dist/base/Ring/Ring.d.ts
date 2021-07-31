/// <reference types="react" />
import { ReactComponent as RingSvg } from "./circle.svg";
import "./Ring.scss";
interface RingProps {
    color?: string;
    size?: "small" | "large";
}
declare const Ring: React.FC<RingProps>;
export { Ring, RingSvg };
