import { ReactNode } from 'react';
interface Options {
    validate?: boolean;
    startValidate?: boolean;
    requiredMessage?: ReactNode;
    errorMessage?: ReactNode;
    regExp?: RegExp;
    value?: string | boolean | Date;
}
declare const createError: ({ validate, startValidate, requiredMessage, errorMessage, value, regExp, }: Options) => ReactNode;
export default createError;
