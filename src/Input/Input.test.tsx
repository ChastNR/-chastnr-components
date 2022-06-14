import { fireEvent, render, renderHook } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  const onChangeMock = jest.fn();

  it('snapshots should be equal', () => {
    const regExp = new RegExp('pattern');

    const wrapper = render(
      <Input
        autoComplete="on"
        className="testClassName"
        content="testContent"
        disabled
        errorMessage="errorMessage"
        label="Test"
        maxLength={100}
        name="testInput"
        onChange={onChangeMock}
        placeholder="testPlaceholder"
        regExp={regExp}
        requiredMessage="requiredMessage"
        startValidate
        type="password"
        value="testValue"
      />
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it('should trigger change event', () => {
    const input = render(<Input label="Test" onChange={onChangeMock} value="testValue" />);
    const inputElement = input.container.getElementsByTagName('input')[0];

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(onChangeMock).toBeCalledWith('test');
  });

  it('should trigger blur event', () => {
    const onBlurMock = jest.fn();
    const input = render(
      <Input label="Test" onBlur={onBlurMock} onChange={onChangeMock} value="testValue" />
    );
    const inputElement = input.container.getElementsByTagName('input')[0];
    fireEvent.blur(inputElement);

    expect(onBlurMock).toBeCalled();
  });

  it('should trigger focus event', () => {
    const onFocusMock = jest.fn();
    const input = render(
      <Input label="Test" onChange={onChangeMock} onFocus={onFocusMock} value="testValue" />
    );
    const inputElement = input.container.getElementsByTagName('input')[0];
    fireEvent.focus(inputElement);

    expect(onFocusMock).toBeCalled();
  });
});
