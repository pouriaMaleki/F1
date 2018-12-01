import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ActionButton } from "./ActionButton";
import css from "./ActionButton.module.sass";

describe("Render ActionButton", () => {
  // snapshot test
  it("render correctly ActionButton component", () => {
    const buttonChildren = "ButtonChildren";
    const ActionButtonComponent = renderer
      .create(<ActionButton>{buttonChildren}</ActionButton>)
      .toJSON();
    expect(ActionButtonComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        className: CLASSNAME
      },
      ActionButtonComponent = mount(
        <ActionButton {...props}>ButtonChildren</ActionButton>
      );

    expect(ActionButtonComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  // mock function props - function call test
  it("click action button should call prop onClick", () => {
    const onClick = jest.fn(),
      props = {
        onClick: onClick
      },
      ActionButtonComponent = mount(
        <ActionButton {...props}>ButtonChildren</ActionButton>
      );
    ActionButtonComponent.simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
