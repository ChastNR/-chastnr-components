import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Control from "./Control";

describe("<Control />", () => {
  it("should render", () => {
    const control = shallow(<Control hasValue={false} label="testLabel" />);
    expect(toJson(control)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const className = "testClassName";
    const content = "testContent";
    const name = "testName";
    const disabled = true;
    const error = "testError";
    const label = "testLabel";
    const required = true;
    const hasValue = true;
    const role = "textbox";

    const control = mount(
      <Control
        className={className}
        content={content}
        disabled={disabled}
        error={error}
        hasValue={hasValue}
        label={label}
        name={name}
        required={required}
        role={role}
      />
    );

    expect(control.props().className).toEqual(className);
    expect(control.props().content).toEqual(content);
    expect(control.props().name).toEqual(name);
    expect(control.props().disabled).toEqual(disabled);
    expect(control.props().error).toEqual(error);
    expect(control.props().label).toEqual(label);
    expect(control.props().required).toEqual(required);
    expect(control.props().hasValue).toEqual(hasValue);
    expect(control.props().role).toEqual(role);
  });
});
