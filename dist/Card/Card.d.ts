/// <reference types="react" />
import "./Card.scss";
interface CardProps {
    animate?: boolean;
    className?: string;
    size?: "small" | "medium";
    imgSrc: string;
    buttonText: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Card: React.FC<CardProps>;
export default Card;
