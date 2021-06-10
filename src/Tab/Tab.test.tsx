import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Tab from "./Tab";

describe("<Tab/>", () => {
  it("should match snapshot", () => {
    const tab = shallow(<Tab />);
    expect(toJson(tab)).toMatchSnapshot();
  });
});
