import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Background } from "./Background";
import cars from "../../../assets/images/cars";

describe("Render Background", () => {
  // snapshot test
  it("render correctly Background component", () => {
    const BackgroundComponent = renderer
      .create(<Background season="2005" />)
      .toJSON();
    expect(BackgroundComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        season: "2005",
        className: CLASSNAME
      },
      BackgroundComponent = mount(<Background {...props} />);

    expect(BackgroundComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  it("render proper season car image", () => {
    const props = {
        season: "2007"
      },
      BackgroundComponent = mount(<Background {...props} />);
    expect(BackgroundComponent.find("img").prop("src")).toEqual(cars["2007"]);
  });
});
