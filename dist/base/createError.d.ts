import React from "react";
interface Options {
    validate?: boolean;
    startValidate?: boolean;
    requiredMessage?: React.ReactNode;
    errorMessage?: React.ReactNode;
    regExp?: RegExp;
    value?: string | boolean | Date;
}
declare const createError: ({ validate, startValidate, requiredMessage, errorMessage, value, regExp, }: Options) => React.ReactNode | null;
export default createError;
