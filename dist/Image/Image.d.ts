/// <reference types="react" />
import "./Image.scss";
interface ImageProps {
    alt?: string;
    backgroundColor?: string;
    className?: string;
    src: string;
    lazy?: boolean;
    width?: number;
    height?: number;
}
declare const Image: React.FC<ImageProps>;
export default Image;
