import React from "react";
import drivers from "../../../assets/images/drivers";
import css from "./Driver.module.sass";

interface IProps {
  driver: string;
  driverId: string;
  className?: string;
}

const Driver = (props: IProps) => (
  <div className={props.className}>
    <img
      src={drivers[props.driverId]}
      className={css.image}
      alt={props.driver}
    />
    <div className={css.title}>{props.driver}</div>
  </div>
);

export { Driver };
