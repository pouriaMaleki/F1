import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Home } from "./Home";
import InViewMonitor from "react-inview-monitor";
import { Season } from "./Home/Season";
import { PageIndicator } from "./Home/PageIndicator";

describe("Render Home", () => {
  // snapshot test
  it("render correctly Home component", () => {
    const HomeComponent = renderer
      .create(<Home seasons={[]} onViewDetails={() => {}} />)
      .toJSON();
    expect(HomeComponent).toMatchSnapshot();
  });

  // test props

  // test props
  it("render all seasons and InViewMonitor wrappers", () => {
    const props = {
        seasons: [
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          },
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          }
        ]
      },
      HomeComponent = mount(<Home {...props} onViewDetails={() => {}} />);

    expect(HomeComponent.find(InViewMonitor).length).toEqual(
      props.seasons.length
    );
    expect(HomeComponent.find(Season).length).toEqual(props.seasons.length);
  });

  it("render page indicator with correct count of circles", () => {
    const props = {
        seasons: [
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          },
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          }
        ]
      },
      HomeComponent = mount(<Home {...props} onViewDetails={() => {}} />),
      IndicatorComponent = HomeComponent.find(PageIndicator);

    expect(IndicatorComponent.exists()).toEqual(true);
    expect(IndicatorComponent.props().count).toEqual(props.seasons.length);
  });

  // test state
  it("set correct page as active in PageIndicator", () => {
    const props = {
        seasons: [
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          },
          {
            season: "2005",
            driver: "Lewis Hamilton",
            results: [
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
            ]
          }
        ]
      },
      HomeComponent = mount(<Home {...props} onViewDetails={() => {}} />);

    expect(HomeComponent.find(PageIndicator).props().selected).toEqual(0);
    HomeComponent.setState({ selectedPage: 1 });
    expect(HomeComponent.find(PageIndicator).props().selected).toEqual(1);
  });

  // TODO: scroll tests
});
