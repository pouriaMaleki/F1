import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { RoundRow } from "./RoundRow";

describe("Render RoundRow", () => {
  // snapshot test
  it("render correctly RoundRow component", () => {
    const props = {
      round: 1,
      raceName: "Austali",
      driver: "Lwoid",
      team: "McDAS",
      laps: "12",
      grid: "2",
      time: "1.24.32.433",
      seasonChampion: true
    };
    const RoundRowComponent = renderer.create(<RoundRow {...props} />).toJSON();
    expect(RoundRowComponent).toMatchSnapshot();
  });

  // test props
  it("render titles and highlight seasonChampion regarding props", () => {
    const props = {
        round: "1",
        raceName: "Austali",
        driver: "Lwoid",
        team: "McDAS",
        laps: "12",
        grid: "2",
        time: "1.24.32.433",
        seasonChampion: true
      },
      RoundRowComponent = mount(<RoundRow {...props} />),
      dataEls = RoundRowComponent.find(".data");

    expect(dataEls.at(0).text()).toEqual(props.round);
    expect(dataEls.at(1).text()).toEqual(props.raceName);
    expect(dataEls.at(2).text()).toEqual(props.driver);
    expect(dataEls.at(3).text()).toEqual(props.team);
    expect(dataEls.at(4).text()).toEqual(props.laps + " Laps");
    expect(dataEls.at(5).text()).toEqual(props.grid + " Grid");
    expect(dataEls.at(6).text()).toEqual(props.time);
    expect(RoundRowComponent.find(".root").hasClass("champion")).toEqual(true);

    RoundRowComponent.setProps({ seasonChampion: false });
    expect(RoundRowComponent.find(".root").hasClass("champion")).toEqual(false);
  });
});
