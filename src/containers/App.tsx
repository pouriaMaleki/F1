import React, { Component } from "react";
import css from "./App.module.sass";
import { Home } from "../presentationalComponents/Home";
import { SeasonDetailsContainer } from "./SeasonDetailsContainer";
import { ISeason } from "../presentationalComponents/Home/ISeason";
import { IRound } from "../presentationalComponents/SeasonDetails/IRound";
import { getSeasons } from "../api/getSeasons";
import { Loading } from "../presentationalComponents/shared/components/Loading";

const rounds: IRound[] = [
  {
    round: 1,
    raceName: "Austali",
    driver: "Lwoid",
    driverId: "Lwoid",
    team: "McDAS",
    laps: "12",
    grid: "2",
    time: "234.3243.3"
  }
];

interface IState {
  loading: boolean;
  selectedSeason: null | ISeason;
  seasons: ISeason[];
}

class App extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = { loading: true, seasons: [], selectedSeason: null };

    this.handleSelectSeason = this.handleSelectSeason.bind(this);
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
  }

  async componentDidMount() {
    const seasons = await getSeasons();
    this.setState({ seasons, loading: false });
  }

  handleSelectSeason(selectedSeason) {
    this.setState({ selectedSeason });
  }

  handleCloseDetails() {
    this.setState({ selectedSeason: null });
  }

  render() {
    return <div className={css.root}>{this.renderPage()}</div>;
  }

  renderPage() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.selectedSeason) {
      return (
        <SeasonDetailsContainer
          season={this.state.selectedSeason.season}
          championDriverId={this.state.selectedSeason.driverId}
          onClose={this.handleCloseDetails}
        />
      );
    } else {
      return (
        <Home
          seasons={this.state.seasons}
          onViewDetails={this.handleSelectSeason}
        />
      );
    }
  }
}

export default App;
