import React from "react";
import renderer from "react-test-renderer";
import { SeasonDetails } from "./SeasonDetails";

describe("Render SeasonDetails", () => {
  // snapshot test
  it("render correctly SeasonDetails component", () => {
    const SeasonDetailsComponent = renderer
      .create(<SeasonDetails rounds={[]} season="2005" onClose={() => {}} />)
      .toJSON();
    expect(SeasonDetailsComponent).toMatchSnapshot();
  });
});
