import React from "react";
import css from "./ActionButton.module.sass";
import classNames from "classnames";

interface IProps {
  children: string | ChildNode;
  className?: string;
  onClick?: any;
}

const ActionButton = (props: IProps) => (
  <div
    className={classNames(css.root, props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

export { ActionButton };
