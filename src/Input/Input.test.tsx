import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Input from "./Input";

describe("<Input />", () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  const onFocusMock = jest.fn();
  const mockSetState = jest.fn();
  const mockUseRef = jest.fn();

  beforeEach(() => {
    jest.mock("react", () => {
      const actualReact = jest.requireActual("react");

      mockUseRef.mockImplementation(actualReact.useRef);

      return {
        ...actualReact,
        useRef: mockUseRef,
        useState: jest.fn().mockImplementation((value) => [value, mockSetState]),
      };
    });
  });

  it("snapshots should be equal", () => {
    const wrapper = shallow(<Input label="Test" onChange={onChangeMock} value="test" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const label = "Test";
    const name = "testInput";
    const maxLength = 100;
    const type = "password";
    const value = "testValue";
    const placeholder = "testPlaceholder";
    const regExp = new RegExp("pattern");
    const autoComplete = "on";
    const className = "testClassName";
    const errorMessage = "errorMessage";
    const requiredMessage = "requiredMessage";
    const content = "testContent";
    const disabled = true;
    const startValidate = true;

    const input = mount(
      <Input
        autoComplete={autoComplete}
        className={className}
        content={content}
        disabled={disabled}
        errorMessage={errorMessage}
        label={label}
        maxLength={maxLength}
        name={name}
        onChange={onChangeMock}
        placeholder={placeholder}
        regExp={regExp}
        requiredMessage={requiredMessage}
        startValidate={startValidate}
        type={type}
        value={value}
      />
    );

    const {
      className: expectedClassName,
      content: expectedContent,
      disabled: expectedDisabled,
      label: expectedLabel,
      name: expectedName,
      maxLength: expectedMaxLength,
      type: expectedType,
      value: expectedValue,
      placeholder: expectedPlaceholder,
      regExp: expectedRegExp,
      autoComplete: expectedAutoComplete,
      errorMessage: expectedErrorMessage,
      requiredMessage: expectedRequiredMessage,
      startValidate: expectedStartValidate,
    } = input.props();

    expect(expectedClassName).toEqual(className);
    expect(expectedContent).toEqual(content);
    expect(expectedDisabled).toEqual(disabled);
    expect(expectedLabel).toEqual(label);
    expect(expectedName).toEqual(name);
    expect(expectedMaxLength).toEqual(maxLength);
    expect(expectedType).toEqual(type);
    expect(expectedValue).toEqual(value);
    expect(expectedPlaceholder).toEqual(placeholder);
    expect(expectedRegExp).toEqual(regExp);
    expect(expectedAutoComplete).toEqual(autoComplete);
    expect(expectedErrorMessage).toEqual(errorMessage);
    expect(expectedRequiredMessage).toEqual(requiredMessage);
    expect(expectedStartValidate).toEqual(startValidate);
  });

  it("should trigger change event", () => {
    const input = mount(<Input label="Test" onChange={onChangeMock} value="testValue" />);

    input.find("input").simulate("change");
    input.simulate("change", { currentTarget: { value: "test" } });

    expect(onChangeMock).toBeCalledWith("testValue");
  });

  it("should trigger blur event", () => {
    const input = mount(
      <Input label="Test" onBlur={onBlurMock} onChange={onChangeMock} value="testValue" />
    );

    const inputElement = input.find("input");

    inputElement.simulate("focus");
    inputElement.simulate("blur");
    input.simulate("blur");

    expect(onBlurMock).toBeCalled();
  });

  it("should return when blur input node", () => {
    mockUseRef.mockImplementation(() => ({ current: null }));

    const input = mount(<Input label="Test" onChange={onChangeMock} value="testValue" />);

    const inputElement = input.find("input");

    inputElement.simulate("focus");
    inputElement.simulate("blur");
    // input.simulate("blur");

    expect(mockSetState).toBeCalledTimes(0);
  });

  it("should trigger focus event", () => {
    const input = mount(
      <Input label="Test" onChange={onChangeMock} onFocus={onFocusMock} value="testValue" />
    );

    input.find("input").simulate("focus");
    input.simulate("focus");

    expect(onFocusMock).toBeCalled();
  });
});
