import React, { Component } from "react";
import css from "./Home.module.sass";
import { Season } from "./Home/Season";
import { PageIndicator } from "./Home/PageIndicator";
import InViewMonitor from "react-inview-monitor";
import scrollToComponent from "react-scroll-to-component";
import { ISeason } from "./Home/ISeason";

interface IProps {
  seasons: ISeason[];
  onViewDetails: any;
}

interface IState {
  selectedPage: number;
}

class Home extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 0
    };
  }

  handlePageInView = selectedPage => () => {
    this.setState({ selectedPage });
  };

  handleSelectPage = selectedPage => {
    scrollToComponent(this.refs[selectedPage + ""]);
    this.setState({ selectedPage });
  };

  handleSelectSeason = (season, index) => () => {
    this.props.onViewDetails(season, index);
  };

  render() {
    const { seasons } = this.props;
    return (
      <div className={css.root}>
        {seasons.map((season, index) => (
          <InViewMonitor
            key={index + ""}
            classNameInView={css.inView}
            repeatOnInView={true}
            onInView={this.handlePageInView(index)}
          >
            <Season
              ref={"" + index}
              {...season}
              onViewDetails={this.handleSelectSeason(season, index)}
            />
          </InViewMonitor>
        ))}
        <PageIndicator
          count={seasons.length}
          onSelect={this.handleSelectPage}
          selected={this.state.selectedPage}
        />
      </div>
    );
  }
}

export { Home };
