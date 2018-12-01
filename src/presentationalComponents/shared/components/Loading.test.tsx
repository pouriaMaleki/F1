import React from "react";
import renderer from "react-test-renderer";
import { Loading } from "./Loading";

describe("Render Loading", () => {
  // snapshot test
  it("render correctly Loading component", () => {
    const LoadingComponent = renderer.create(<Loading />).toJSON();
    expect(LoadingComponent).toMatchSnapshot();
  });
});
