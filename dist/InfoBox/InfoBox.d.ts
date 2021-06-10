/// <reference types="react" />
import "./InfoBox.scss";
interface InfoBoxProps {
    title: React.ReactNode;
    additionalInfo?: React.ReactNode;
    img?: string;
}
declare const InfoBox: React.FC<InfoBoxProps>;
export default InfoBox;
