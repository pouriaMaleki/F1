import React from "react";
import css from "./Results.module.sass";
import classNames from "classnames";
import { ResultBox } from "./Results/ResultBox";
import { IResult } from "./IResult";

interface IProps {
  data: IResult[];
  className?: string;
}

const Results = (props: IProps) => (
  <div className={classNames(css.root, props.className)}>
    {props.data.map((result, index) => (
      <ResultBox key={index + ""} {...result} />
    ))}
  </div>
);

export { Results };
