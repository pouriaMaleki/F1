import Seasons from "./seasons.json";
import { normalizeSeasonsData } from "../normalizeSeasonsData";

const getSeasons = () => {
  return new Promise(resolve => {
    resolve(normalizeSeasonsData(Seasons));
  });
};

export { getSeasons };
