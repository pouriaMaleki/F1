import React, { Component } from "react";
import css from "./Season.module.sass";
import { Logo } from "../shared/components/Logo";
import { Driver } from "./Season/Driver";
import { Background } from "../shared/components/Background";
import { Info } from "../shared/components/Info";
import { Results } from "./Season/Results";
import { IResult } from "./Season/IResult";

interface IProps {
  season: string;
  results: IResult[];
  driver: string;
  driverId: string;
  onViewDetails: any;
}

// just let it be class without state, because we need to use "ref" in parent
class Season extends Component<IProps, never> {
  render() {
    const { season, results, driver, driverId, onViewDetails } = this.props;

    return (
      <div className={css.root}>
        <Background className={css.background} season={season} />
        <Logo className={css.logo} />
        <Driver driverId={driverId} driver={driver} className={css.driver} />
        <Info
          season={season}
          className={css.info}
          onViewDetails={onViewDetails}
        />
        <Results className={css.results} data={results} />
      </div>
    );
  }
}

export { Season };
