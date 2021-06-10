import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Input from "./Input";

describe("<Input />", () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  const onFocusMock = jest.fn();

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

    expect(input.props().className).toEqual(className);
    expect(input.props().content).toEqual(content);
    expect(input.props().disabled).toEqual(disabled);
    expect(input.props().label).toEqual(label);
    expect(input.props().name).toEqual(name);
    expect(input.props().maxLength).toEqual(maxLength);
    expect(input.props().type).toEqual(type);
    expect(input.props().value).toEqual(value);
    expect(input.props().placeholder).toEqual(placeholder);
    expect(input.props().regExp).toEqual(regExp);
    expect(input.props().autoComplete).toEqual(autoComplete);
    expect(input.props().errorMessage).toEqual(errorMessage);
    expect(input.props().requiredMessage).toEqual(requiredMessage);
    expect(input.props().startValidate).toEqual(startValidate);
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
    input.find("input").simulate("focus");
    input.find("input").simulate("blur");
    input.simulate("blur");
    expect(onBlurMock).toBeCalled();
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
