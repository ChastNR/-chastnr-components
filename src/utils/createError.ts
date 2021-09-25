import React from "react";

interface Options {
  validate?: boolean;
  startValidate?: boolean;
  requiredMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
  regExp?: RegExp;
  value?: string | boolean | Date;
}

const createError = ({
  validate,
  startValidate = false,
  requiredMessage,
  errorMessage,
  value,
  regExp,
}: Options): React.ReactNode => {
  if (!validate && !startValidate) {
    return null;
  }

  if (requiredMessage && !value) {
    return requiredMessage;
  }

  if (regExp && value && typeof value === "string" && !regExp.test(value)) {
    return errorMessage;
  }

  if (startValidate) {
    return errorMessage;
  }

  return null;
};

export default createError;
