import React from "react";
import css from "./Loading.module.sass";
import { PropagateLoader } from "react-spinners";
import { Logo } from "./Logo";

const Loading = () => (
  <div className={css.pageCenter}>
    <Logo className={css.logo} />
    <div className={css.loading}>
      <PropagateLoader
        sizeUnit={"px"}
        size={25}
        color={"#FF2000"}
        loading={true}
      />
    </div>
  </div>
);

export { Loading };
