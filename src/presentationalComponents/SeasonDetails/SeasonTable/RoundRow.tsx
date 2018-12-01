import React from "react";
import css from "./RoundRow.module.sass";
import classNames from "classnames";
import { IRound } from "../IRound";

const RoundRow = (props: IRound) => {
  return (
    <div
      className={classNames({
        [css.root]: true,
        [css.champion]: props.seasonChampion
      })}
    >
      <div className={classNames(css.data, css.roundNo)}>{props.round}</div>
      <div className={css.data}>{props.raceName}</div>
      <div className={css.data}>{props.driver}</div>
      <div className={css.data}>{props.team}</div>
      <div className={css.data}>{props.laps} Laps</div>
      <div className={css.data}>{props.grid} Grid</div>
      <div className={css.data}>{props.time}</div>
    </div>
  );
};

export { RoundRow };
