import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Checkbox from "./Checkbox";

describe("<Checkbox/>", () => {
  it("should match snapshot", () => {
    const checkbox = shallow(<Checkbox />);
    expect(toJson(checkbox)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const checked = true;
    const disabled = true;
    const onChange = jest.fn();

    const checkbox = mount(<Checkbox checked={checked} disabled={disabled} onChange={onChange} />);
    const input = checkbox.find("input");
    input.simulate("change");

    const props = input.props();

    expect(onChange).toBeCalledTimes(1);
    expect(props.checked).toEqual(checked);
    expect(props.disabled).toEqual(disabled);
  });
});
