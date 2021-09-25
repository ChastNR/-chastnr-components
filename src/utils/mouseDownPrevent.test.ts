import mouseDownPrevent from "./mouseDownPrevent";

describe("mouseDownPrevent", () => {
  it("should call preventDefault and stopPropagation", () => {
    const mockPreventDefault = jest.fn();
    const mockStopPropagation = jest.fn();
    const event = {
      preventDefault: mockPreventDefault,
      stopPropagation: mockStopPropagation,
    } as unknown as React.MouseEvent<any, MouseEvent>;

    mouseDownPrevent(event);

    expect(mockPreventDefault).toBeCalledTimes(1);
    expect(mockStopPropagation).toBeCalledTimes(1);
  });
});
