import { forwardRef, PropsWithChildren } from "react";

import classNames from "clsx";

import Error from "../Error";

import "./Control.scss";

interface ControlProps {
  className?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  name?: string;
  error?: React.ReactNode;
  hasValue: boolean;
  label: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  required?: boolean;
  role?: React.AriaRole;
}

const Control = forwardRef<HTMLDivElement, PropsWithChildren<ControlProps>>(
  (
    {
      children,
      className,
      content,
      disabled,
      error,
      hasValue,
      label,
      name,
      onBlur,
      onFocus,
      required,
    },
    ref
  ) => {
    const controlClassNames = classNames("ctrl__cntr", className, {
      required,
      disabled,
      error,
      hasValue,
    });

    return (
      <div className="ctrl">
        <div
          className={controlClassNames}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
          role="textbox"
          tabIndex={0}
        >
          <label className="ctrl__lb" htmlFor={name}>
            {label}
          </label>
          {children}
          {content && <div className="ctrl__cnt">{content}</div>}
        </div>
        <Error>{error}</Error>
      </div>
    );
  }
);

export default Control;
