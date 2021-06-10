import { Option } from "../Option";
import createSelectedItems from "./createSelectedItems";

describe("createSelectedItems", () => {
  it("should return valid value", () => {
    const options: Option[] = [
      {
        title: "Test",
        value: "test",
      },
      {
        title: "Test 2",
        value: "test 2",
      },
    ];

    const selected: Option[] = [options[0]];

    const items = createSelectedItems(options, selected);

    expect(items).toEqual("Test");
  });
});
