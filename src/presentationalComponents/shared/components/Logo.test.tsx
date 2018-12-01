import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Logo } from "./Logo";

describe("Render Logo", () => {
  // snapshot test
  it("render correctly logo component", () => {
    const LogoComponent = renderer.create(<Logo />).toJSON();
    expect(LogoComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        className: CLASSNAME
      },
      LogoComponent = mount(<Logo {...props} />);

    expect(LogoComponent.hasClass(CLASSNAME)).toEqual(true);
  });
});
