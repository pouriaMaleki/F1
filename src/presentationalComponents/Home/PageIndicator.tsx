import React from "react";
import css from "./PageIndicator.module.sass";
import classNames from "classnames";

interface IProps {
  count: number;
  selected: number;
  onSelect: any;
}

const PageIndicator = (props: IProps) => {
  // initialize new array with undefined values
  // to use "map" easily to render circles
  let pages: Array<undefined> = new Array(props.count);
  pages.fill(undefined);

  return (
    <div className={css.root}>
      {pages.map((_, index) => (
        <div
          key={index}
          className={classNames({
            [css.circle]: true,
            [css.selected]: props.selected === index
          })}
          onClick={() => props.onSelect(index)}
        />
      ))}
    </div>
  );
};

export { PageIndicator };
