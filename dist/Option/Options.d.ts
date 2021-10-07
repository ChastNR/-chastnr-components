/// <reference types="react" />
import { Option } from '../types';
import './Options.scss';
interface OptionsProps {
    options: Option[];
    isMulti?: boolean;
    onClick: (value: Option) => () => void;
}
declare const Options: React.FC<OptionsProps>;
export default Options;
