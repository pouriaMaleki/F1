import React from "react";
import css from "./ResultBox.module.sass";
import classNames from "classnames";
import { IResult } from "../IResult";

interface IProps extends IResult {
  className?: string;
}

const ResultBox = (props: IProps) => (
  <div className={classNames(css.root, props.className)}>
    <div className={css.title}>{props.title}</div>
    <div className={css.value}>{props.value}</div>
  </div>
);

export { ResultBox };
