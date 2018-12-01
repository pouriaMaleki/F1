import React from "react";
import css from "./Info.module.sass";
import classNames from "classnames";
import { ActionButton } from "../../Home/Season/ActionButton";

interface IProps {
  season: string;
  className?: string;
  onViewDetails?: any;
}

const Info = (props: IProps) => (
  <div className={classNames(css.root, props.className)}>
    <div className={css.season}>{props.season}</div>
    <div className={css.title}>Formula 1</div>
    <div className={css.smallTitle}>World Championship</div>
    {props.onViewDetails && (
      <ActionButton
        className={css.viewPageButton}
        onClick={props.onViewDetails}
      >
        View Details
      </ActionButton>
    )}
  </div>
);

export { Info };
