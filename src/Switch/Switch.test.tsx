import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Switch from "./Switch";

describe("<Switch/>", () => {
  it("should match snapshot", () => {
    const switchComponent = shallow(<Switch />);
    expect(toJson(switchComponent)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const name = "testName";
    const checked = true;

    const switchComponent = mount(<Switch checked={checked} name={name} />);

    expect(switchComponent.props().name).toEqual(name);
    expect(switchComponent.props().checked).toEqual(checked);
  });
});
