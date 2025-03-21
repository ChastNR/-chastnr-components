import { ReactNode } from 'react';

interface IOptions {
  validate?: boolean;
  startValidate?: boolean;
  requiredMessage?: ReactNode;
  errorMessage?: ReactNode;
  regExp?: RegExp;
  value?: string | boolean | Date;
}

export const createError = ({
  validate,
  startValidate = false,
  requiredMessage,
  errorMessage,
  value,
  regExp,
}: IOptions): ReactNode => {
  if (!validate && !startValidate) {
    return null;
  }

  if (requiredMessage && !value) {
    return requiredMessage;
  }

  if (regExp && value && typeof value === 'string' && !regExp.test(value)) {
    return errorMessage;
  }

  if (startValidate) {
    return errorMessage;
  }

  return null;
};
