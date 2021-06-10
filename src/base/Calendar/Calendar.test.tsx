import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Calendar from "./Calendar";

describe("<Calendar/>", () => {
  it("should equal snapshot", () => {
    const calendar = shallow(<Calendar />);
    expect(toJson(calendar)).toMatchSnapshot();
  });
});
