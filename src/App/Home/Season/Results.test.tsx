import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Results } from "./Results";
import { ResultBox } from "./Results/ResultBox";

const data = [
  {
    title: "No.",
    value: "26"
  },
  {
    title: "No.",
    value: "26"
  },
  {
    title: "No.",
    value: "26"
  }
];

describe("Render Results", () => {
  // snapshot test
  it("render correctly Results component", () => {
    const ResultsComponent = renderer.create(<Results data={data} />).toJSON();
    expect(ResultsComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        data: [],
        className: CLASSNAME
      },
      ResultsComponent = mount(<Results {...props} />);

    expect(ResultsComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  it("render all results", () => {
    const props = {
        data
      },
      ResultsComponent = mount(<Results {...props} />);

    expect(ResultsComponent.find(ResultBox).length).toEqual(data.length);
  });
});
