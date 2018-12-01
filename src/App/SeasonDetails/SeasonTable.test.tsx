import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { SeasonTable } from "./SeasonTable";
import { RoundRow } from "./SeasonTable/RoundRow";

describe("Render SeasonTable", () => {
  // snapshot test
  it("render correctly SeasonTable component", () => {
    const SeasonTableComponent = renderer
      .create(<SeasonTable rounds={[]} />)
      .toJSON();
    expect(SeasonTableComponent).toMatchSnapshot();
  });

  // test props
  it("render all round rows", () => {
    const props = {
        rounds: [
          {
            round: 1,
            raceName: "Austali",
            driver: "Lwoid",
            team: "McDAS",
            laps: "12",
            grid: "2",
            time: "234.3243.3",
            seasonChampion: true
          },
          {
            round: 1,
            raceName: "Austali",
            driver: "Lwoid",
            team: "McDAS",
            laps: "12",
            grid: "2",
            time: "234.3243.3",
            seasonChampion: true
          },
          {
            round: 1,
            raceName: "Austali",
            driver: "Lwoid",
            team: "McDAS",
            laps: "12",
            grid: "2",
            time: "234.3243.3"
          }
        ]
      },
      SeasonTableComponent = mount(<SeasonTable {...props} />);

    expect(SeasonTableComponent.find(RoundRow).length).toEqual(
      props.rounds.length
    );
  });
});
