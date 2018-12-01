import React, { Component } from "react";
import { SeasonDetails } from "../presentationalComponents/SeasonDetails";
import { Loading } from "../presentationalComponents/shared/components/Loading";
import { IRound } from "../presentationalComponents/SeasonDetails/IRound";

interface IProps {
  season: string;
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
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <SeasonDetails
        rounds={this.state.rounds}
        season={this.props.season}
        onClose={this.props.onClose}
      />
    );
  }
}

export { SeasonDetailsContainer };
