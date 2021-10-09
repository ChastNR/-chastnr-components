/// <reference types="react" />
import './InfoBox.scss';
interface InfoBoxProps {
    additionalInfo?: React.ReactNode;
    className?: string;
    img?: string;
    small?: boolean;
    title: React.ReactNode;
}
declare const InfoBox: React.FC<InfoBoxProps>;
export default InfoBox;
