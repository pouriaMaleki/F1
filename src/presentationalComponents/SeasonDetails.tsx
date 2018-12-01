import React from "react";
import css from "./SeasonDetails.module.sass";
import { SeasonTable } from "./SeasonDetails/SeasonTable";
import { Info } from "./shared/components/Info";
import { Background } from "./shared/components/Background";
import { BackButton } from "./SeasonDetails/BackButton";
import { Logo } from "./shared/components/Logo";
import { IRound } from "./SeasonDetails/IRound";

interface IProps {
  rounds: IRound[];
  season: string;
  onClose: any;
}

const SeasonDetails = ({ rounds, season, onClose }: IProps) => (
  <div className={css.root}>
    <Background season={season} className={css.background} />
    <BackButton className={css.backButton} onClick={onClose} />
    <Logo className={css.logo} />
    <div className={css.header}>
      <Info season={season} />
    </div>
    <div className={css.body}>
      <SeasonTable rounds={rounds} />
    </div>
  </div>
);

export { SeasonDetails };
