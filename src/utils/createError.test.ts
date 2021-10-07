import createError from './createError';

describe('createError', () => {
  it('should return null when validate equals false', () => {
    const result = createError({ validate: false });

    expect(result).toBeNull();
  });

  it('should return required message when requiredMessage provided and value is undefined', () => {
    const requiredMessage = 'Value required';

    const result = createError({ requiredMessage, validate: true });

    expect(result).toMatch(requiredMessage);
  });

  it('should return error message when value in not match regexp', () => {
    const errorMessage = 'Value is incorrect';
    const regExp = /^\d+$/;
    const value = 'NaN';

    const result = createError({ errorMessage, regExp, value, validate: true });

    expect(result).toMatch(errorMessage);
  });

  it('should return error message when startValidate provided', () => {
    const errorMessage = 'Value is incorrect';

    const result = createError({ errorMessage, startValidate: true });

    expect(result).toMatch(errorMessage);
  });

  it('should return null when no properties provided', () => {
    const result = createError({ validate: true });

    expect(result).toBeNull();
  });
});
