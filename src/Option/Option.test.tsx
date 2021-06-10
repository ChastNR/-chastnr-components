import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import SelectOption, { Option } from "./Option";

describe("<Option />", () => {
  const option: Option = {
    title: "Test",
    value: "testValue",
  };

  it("should equal snapshot", () => {
    const optionComponent = shallow(<SelectOption option={option} />);
    expect(toJson(optionComponent)).toMatchSnapshot();
  });

  it("props should equal", () => {
    const checked = true;
    const isMulti = true;

    const optionComponent = mount(
      <SelectOption checked={checked} isMulti={isMulti} option={option} />
    );

    const input = optionComponent.find("input");

    expect(input.props().checked).toEqual(checked);

    if (isMulti) {
      expect(input).toBeTruthy();
    }
  });
});
