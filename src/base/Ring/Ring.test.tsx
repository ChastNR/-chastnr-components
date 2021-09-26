import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Ring } from "./Ring";

describe("<Calendar/>", () => {
  it("should equal snapshot", () => {
    const ring = shallow(<Ring />);
    expect(toJson(ring)).toMatchSnapshot();
  });
});
