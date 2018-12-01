import React from "react";
import css from "./Background.module.sass";
import cars from "../../../assets/images/cars";
import classNames from "classnames";

interface IProps {
  season: string;
  className?: string;
}

const Background = (props: IProps) => (
  <div className={classNames(css.root, props.className)}>
    <img src={cars[props.season]} className={css.car} alt="car" />
    <div className={css.pageShades} />
  </div>
);

export { Background };
