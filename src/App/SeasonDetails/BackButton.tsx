import React from "react";
import css from "./BackButton.module.sass";
import classNames from "classnames";

interface IProps {
  className?: string;
  onClick?: any;
}

const BackButton = (props: IProps) => (
  <div
    className={classNames(css.root, props.className)}
    onClick={props.onClick}
  />
);

export { BackButton };
