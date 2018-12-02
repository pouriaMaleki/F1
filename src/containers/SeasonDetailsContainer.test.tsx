import React from "react";
import { SeasonDetailsContainer } from "./SeasonDetailsContainer";
import { shallow } from "enzyme";
import { Loading } from "../presentationalComponents/shared/components/Loading";
import { SeasonDetails } from "../presentationalComponents/SeasonDetails";

jest.mock("../api/getSeasonDetails");

describe("Render SeasonDetailsContainer", () => {
  it("shows loading when just loaded", () => {
    const SeasonDetailsContainerComponent = shallow(
      <SeasonDetailsContainer
        season="2008"
        championDriverId="hamilton"
        onClose={() => {}}
      />
    );

    expect(SeasonDetailsContainerComponent.find(Loading).exists()).toEqual(
      true
    );
  });

  it("call getSeasonDetails, setState rounds, and remove loading, render seasonDetails", done => {
    let SeasonDetailsContainerComponent = shallow(
      <SeasonDetailsContainer
        season="2008"
        championDriverId="hamilton"
        onClose={() => {}}
      />
    );
    setTimeout(() => {
      SeasonDetailsContainerComponent.update();

      const state = SeasonDetailsContainerComponent.instance().state as any;
      expect(state.rounds.length).toEqual(18);
      expect(state.loading).toEqual(false);
      expect(
        SeasonDetailsContainerComponent.find(SeasonDetails).exists()
      ).toEqual(true);
      done();
    });
  });
});
