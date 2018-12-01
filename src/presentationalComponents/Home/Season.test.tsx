import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Season } from "./Season";
import { Background } from "../shared/components/Background";
import { Logo } from "../shared/components/Logo";
import { Driver } from "./Season/Driver";
import { Info } from "../shared/components/Info";
import { Results } from "./Season/Results";

describe("Render Season", () => {
  // snapshot test
  it("render correctly Season component", () => {
    const props = {
      season: "2005",
      driver: "Lewis Hamilton",
      results: [
        {
          title: "No.",
          value: "26"
        }
      ],
      onViewDetails: () => {}
    };
    const SeasonComponent = renderer.create(<Season {...props} />).toJSON();
    expect(SeasonComponent).toMatchSnapshot();
  });

  // test props
  it("render all props", () => {
    const props = {
        season: "2005",
        driver: "Lewis Hamilton",
        results: [
          {
            title: "No.",
            value: "26"
          }
        ],
        onViewDetails: () => {}
      },
      SeasonComponent = mount(<Season {...props} />);

    expect(SeasonComponent.find(Background).exists()).toEqual(true);
    expect(SeasonComponent.find(Logo).exists()).toEqual(true);
    expect(SeasonComponent.find(Driver).exists()).toEqual(true);
    expect(SeasonComponent.find(Info).exists()).toEqual(true);
    expect(SeasonComponent.find(Results).exists()).toEqual(true);
  });
});
