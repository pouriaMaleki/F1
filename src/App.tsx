import React, { Component } from "react";
import css from "./App.module.sass";
import { Home } from "./App/Home";
import { SeasonDetails } from "./App/SeasonDetails";
import { ISeason } from "./App/Home/ISeason";
import { IRound } from "./App/SeasonDetails/IRound";

const seasons: ISeason[] = [
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
];

const rounds: IRound[] = [
  {
    round: 1,
    raceName: "Austali",
    driver: "Lwoid",
    team: "McDAS",
    laps: "12",
    grid: "2",
    time: "234.3243.3",
    seasonChampion: true
  }
];

class App extends Component {
  render() {
    return (
      <div className={css.root}>
        <Home seasons={seasons} onViewDetails={console.log} />
        {/* <SeasonDetails rounds={rounds} season="2005" onClose={console.log} /> */}
      </div>
    );
  }
}

export default App;
