import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Driver } from "./Driver";
import drivers from "../../../assets/images/drivers";

const driver = Object.keys(drivers)[0];

describe("Render Driver", () => {
  // snapshot test
  it("render correctly Driver component", () => {
    const DriverComponent = renderer
      .create(<Driver driver={driver} driverId={driver} />)
      .toJSON();
    expect(DriverComponent).toMatchSnapshot();
  });

  // test props
  it("add className as props", () => {
    const CLASSNAME = "CLASSNAME";
    const props = {
        driver: driver,
        driverId: driver,
        className: CLASSNAME
      },
      DriverComponent = mount(<Driver {...props} />);

    expect(DriverComponent.hasClass(CLASSNAME)).toEqual(true);
  });

  it("render proper driver image", () => {
    const props = {
        driver: driver,
        driverId: driver
      },
      DriverComponent = mount(<Driver {...props} />);
    expect(DriverComponent.find("img").prop("src")).toEqual(drivers[driver]);
  });
});
