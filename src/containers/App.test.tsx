import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Loading } from "../presentationalComponents/shared/components/Loading";
import { SeasonDetailsContainer } from "./SeasonDetailsContainer";
import { Home } from "../presentationalComponents/Home";

jest.mock("../api/getSeasons");

describe("Render App", () => {
  it("shows loading when just loaded", () => {
    const AppComponent = shallow(<App />);

    expect(AppComponent.find(Loading).exists()).toEqual(true);
  });

  it("call get seasons, setState results, and remove loading", done => {
    let AppComponent = shallow(<App />);
    setTimeout(() => {
      AppComponent.update();

      const state = AppComponent.instance().state as any;
      expect(state.seasons.length).toEqual(11);
      expect(state.loading).toEqual(false);
      done();
    });
  });

  it("show details and show season list", done => {
    let AppComponent = shallow(<App />);
    setTimeout(() => {
      AppComponent.update();

      expect(AppComponent.find(SeasonDetailsContainer).exists()).toEqual(false);
      expect(AppComponent.find(Home).exists()).toEqual(true);
      const state = AppComponent.instance().state as any;
      AppComponent.instance().setState({
        selectedSeason: state.seasons[0]
      }) as any;
      expect(AppComponent.find(SeasonDetailsContainer).exists()).toEqual(true);
      expect(AppComponent.find(Home).exists()).toEqual(false);
      done();
    });
  });
});
