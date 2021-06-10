import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Error from "./Error";

describe("<Error/>", () => {
  it("should equal snapshot", () => {
    const error = shallow(<Error>Error Text</Error>);
    expect(toJson(error)).toMatchSnapshot();
  });

  // it("should change className when children exists", () => {
  //   const error = shallow(<Error />);
  //   error.setProps({ children: "Error Text" });
  //   error.setProps({});
  //   expect(error.state("height")).toBeGreaterThan(0);
  // });
});
