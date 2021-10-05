import { MemoryRouter } from "react-router-dom";

import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { DropdownItem } from "./DropdownItem";
import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  const items: DropdownItem[] = [
    {
      id: 0,
      title: "testTitle",
      to: "/",
    },
  ];

  it("shoud equal snapshot", () => {
    const dropdown = shallow(<Dropdown items={items} />);
    expect(toJson(dropdown)).toMatchSnapshot();
  });

  it("props should be equal", () => {
    const dropdown = mount(
      <MemoryRouter>
        <Dropdown items={items} />
      </MemoryRouter>
    );
    const link = dropdown.find("a");

    expect(link.props().href).toEqual("/");
    expect(link.text()).toContain("testTitle");
  });
});
