import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BackButton } from "./BackButton";
import css from "./BackButton.module.sass";

describe("Render BackButton", () => {
  // snapshot test
  it("render correctly BackButton component", () => {
    const BackButtonComponent = renderer.create(<BackButton />).toJSON();
    expect(BackButtonComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        className: CLASSNAME
      },
      BackButtonComponent = mount(
        <BackButton {...props}>ButtonChildren</BackButton>
      );

    expect(BackButtonComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  // mock function props - function call test
  it("click action button should call prop onClick", () => {
    const onClick = jest.fn(),
      props = {
        onClick: onClick
      },
      BackButtonComponent = mount(
        <BackButton {...props}>ButtonChildren</BackButton>
      );
    BackButtonComponent.simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
