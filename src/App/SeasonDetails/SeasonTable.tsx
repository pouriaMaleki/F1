import React from "react";
import css from "./SeasonTable.module.sass";
import { RoundRow } from "./SeasonTable/RoundRow";
import { IRound } from "./IRound";

interface IProps {
  rounds: IRound[];
}

const SeasonTable = (props: IProps) => {
  return (
    <div className={css.root}>
      {props.rounds.map((round, index) => (
        <RoundRow key={index} {...round} seasonChampion={index === 3} />
      ))}
    </div>
  );
};

export { SeasonTable };
