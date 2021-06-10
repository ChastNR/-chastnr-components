/// <reference types="react" />
import "./Slider.scss";
interface SliderProps {
    slides: React.ReactNode[];
    defaultSlide?: number;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
