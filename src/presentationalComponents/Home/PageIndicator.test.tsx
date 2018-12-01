import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { PageIndicator } from "./PageIndicator";

describe("Render PageIndicator", () => {
  // snapshot test
  it("render correctly PageIndicator component", () => {
    const PageIndicatorComponent = renderer
      .create(<PageIndicator count={2} selected={1} onSelect={() => {}} />)
      .toJSON();
    expect(PageIndicatorComponent).toMatchSnapshot();
  });

  // test props
  it("render count of circles same as count prop", () => {
    const props = {
        count: 3,
        selected: 0,
        onSelect: () => {}
      },
      PageIndicatorComponent = mount(<PageIndicator {...props} />);

    expect(PageIndicatorComponent.find(".circle").length).toEqual(props.count);
  });

  it("render correct selected circle", () => {
    const props = {
        count: 3,
        selected: 1,
        onSelect: () => {}
      },
      PageIndicatorComponent = mount(<PageIndicator {...props} />);

    expect(
      PageIndicatorComponent.find(".circle")
        .at(props.selected)
        .hasClass("selected")
    ).toEqual(true);
  });

  // mock function props - function call test
  it("click on circle should call prop onSelect and pass clicked circle index as param", () => {
    const index = 2,
      onSelect = jest.fn(),
      props = {
        count: 3,
        selected: 1,
        onSelect
      },
      PageIndicatorComponent = mount(<PageIndicator {...props} />);
    PageIndicatorComponent.find(".circle")
      .at(index)
      .simulate("click");

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][0]).toBe(index);
  });
});
