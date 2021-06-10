import React from "react";

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

    const checkbox = mount(<Checkbox checked={checked} disabled={disabled} />);

    const input = checkbox.find("input");

    expect(input.props().checked).toEqual(checked);
    expect(input.props().disabled).toEqual(disabled);
  });
});
