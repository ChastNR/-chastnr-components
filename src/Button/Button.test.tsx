import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Button from "./Button";

describe("<Button />", () => {
  it("should match snapshot", () => {
    const button = shallow(<Button>Click</Button>);
    expect(toJson(button)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const style = "outline";
    const className = "testClassName";
    const disabled = true;
    const isLoading = true;
    const to = "";
    const type = "submit";

    const button = mount(
      <Button
        buttonStyle={style}
        className={className}
        disabled={disabled}
        isLoading={isLoading}
        to={to}
        type={type}
      />
    );

    expect(button.props().buttonStyle).toEqual(style);
    expect(button.props().className).toEqual(className);
    expect(button.props().disabled).toEqual(disabled);
    expect(button.props().isLoading).toEqual(isLoading);
    expect(button.props().to).toEqual(to);
    expect(button.props().type).toEqual(type);
  });
});
