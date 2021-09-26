import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import DatePicker from "./DatePicker";

const mockOnSelect = jest.fn();

describe("<DatePicker />", () => {
  it("should render", () => {
    const control = shallow(<DatePicker onSelect={mockOnSelect} label="testLabel" />);
    expect(toJson(control)).toMatchSnapshot();
  });
});
