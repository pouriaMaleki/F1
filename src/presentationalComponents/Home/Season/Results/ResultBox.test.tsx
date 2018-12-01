import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ResultBox } from "./ResultBox";
import css from "./ResultBox.module.sass";

describe("Render ResultBox", () => {
  // snapshot test
  it("render correctly ResultBox component", () => {
    const ResultBoxComponent = renderer
      .create(<ResultBox title="title" value="value" />)
      .toJSON();
    expect(ResultBoxComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        className: CLASSNAME
      },
      ResultBoxComponent = mount(
        <ResultBox title="title" value="value" {...props} />
      );

    expect(ResultBoxComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  it("render proper title", () => {
    const props = {
        title: "title",
        value: "value"
      },
      ResultBoxComponent = mount(<ResultBox {...props} />);

    expect(ResultBoxComponent.find("." + css.title).text()).toEqual(
      props.title
    );
  });

  it("render proper value", () => {
    const props = {
        title: "title",
        value: "value"
      },
      ResultBoxComponent = mount(<ResultBox {...props} />);

    expect(ResultBoxComponent.find("." + css.value).text()).toEqual(
      props.value
    );
  });
});
