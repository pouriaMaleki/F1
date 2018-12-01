import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("react-scroll-to-component", () => "react-scroll-to-component");
jest.mock("react-inview-monitor", () => "react-inview-monitor");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
