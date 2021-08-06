import { render } from "enzyme";
import toJson from "enzyme-to-json";

import { Tick } from "./Tick";

describe("<Tick/>", () => {
  it("should match snapshot", () => {
    const tick = render(<Tick />);
    expect(toJson(tick)).toMatchSnapshot();
  });
});
