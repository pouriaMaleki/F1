import React, { Component } from "react";
import { SeasonDetails } from "../presentationalComponents/SeasonDetails";
import { Loading } from "../presentationalComponents/shared/components/Loading";
import { IRound } from "../presentationalComponents/SeasonDetails/IRound";
import { getSeasonDetails } from "../api/getSeasonDetails";

interface IProps {
  season: string;
  championDriverId: string;
  onClose: any;
}

interface IState {
  loading: boolean;
  rounds: IRound[];
}

class SeasonDetailsContainer extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { loading: true, rounds: [] };
  }

  async componentDidMount() {
    const rounds = await getSeasonDetails(this.props.season);
    this.setState({ rounds, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <SeasonDetails
        rounds={this.state.rounds.map(round => ({
          ...round,
          seasonChampion: this.props.championDriverId === round.driverId
        }))}
        season={this.props.season}
        onClose={this.props.onClose}
      />
    );
  }
}

export { SeasonDetailsContainer };
