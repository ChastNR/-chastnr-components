import { PropsWithChildren } from "react";

interface OptionRenderComponentProps {
  className?: string;
  label: string;
  onClick?: () => void;
}

export type OptionRenderComponent = (
  props: PropsWithChildren<OptionRenderComponentProps>
) => JSX.Element;
