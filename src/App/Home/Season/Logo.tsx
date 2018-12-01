import React from "react";
import logo from "assets/images/logo.png";
import css from "./Logo.module.sass";
import classNames from "classnames";

interface IProps {
  className?: string;
}

const Logo = (props: IProps) => (
  <img src={logo} className={classNames(css.root, props.className)} alt="f1" />
);

export { Logo };
