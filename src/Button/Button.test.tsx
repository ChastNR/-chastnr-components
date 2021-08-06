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

    const props = button.props();

    expect(props.buttonStyle).toEqual(style);
    expect(props.className).toEqual(className);
    expect(props.disabled).toEqual(disabled);
    expect(props.isLoading).toEqual(isLoading);
    expect(props.to).toEqual(to);
    expect(props.type).toEqual(type);
  });
});
