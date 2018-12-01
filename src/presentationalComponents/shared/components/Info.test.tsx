import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Info } from "./Info";
import css from "./Info.module.sass";

describe("Render Info", () => {
  // snapshot test
  it("render correctly Info component", () => {
    const InfoComponent = renderer.create(<Info season="2005" />).toJSON();
    expect(InfoComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        className: CLASSNAME
      },
      InfoComponent = mount(<Info season="2005" {...props} />);

    expect(InfoComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  it("render proper season title", () => {
    const props = {
        season: "2007"
      },
      InfoComponent = mount(<Info {...props} />);

    expect(InfoComponent.find("." + css.season).text()).toEqual("2007");
  });

  it("don't render action button if onViewDetails not provided", () => {
    const props = {
        season: "2007"
      },
      InfoComponent = mount(<Info {...props} />);

    expect(InfoComponent.find("." + css.viewPageButton).exists()).toEqual(
      false
    );
  });

  it("render action button if onViewDetails it provided", () => {
    const props = {
        season: "2007",
        onViewDetails: () => {}
      },
      InfoComponent = mount(<Info {...props} />);

    expect(InfoComponent.find("." + css.viewPageButton).exists()).toEqual(true);
  });

  // mock function props - function call test
  it("click action button should call prop onViewDetails", () => {
    const onViewDetails = jest.fn(),
      props = {
        season: "2007",
        onViewDetails: onViewDetails
      },
      InfoComponent = mount(<Info {...props} />);
    InfoComponent.find("." + css.viewPageButton)
      .hostNodes()
      .simulate("click");

    expect(onViewDetails).toHaveBeenCalledTimes(1);
  });
});
