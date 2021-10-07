/// <reference types="react" />
import './Tab.scss';
interface TabProps {
    className?: string;
    content?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
