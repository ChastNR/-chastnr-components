import { PropsWithChildren } from 'react';
interface OptionRenderComponentProps {
    className?: string;
    label: string;
    onClick?: () => void;
}
export declare type OptionRenderComponent = (props: PropsWithChildren<OptionRenderComponentProps>) => JSX.Element;
export {};
