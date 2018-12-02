import SeasonDetails from "./seasonDetails.json";
import { normalizeSeasonDetailsData } from "../normalizeSeasonDetailsData";

const getSeasonDetails = season => {
  return new Promise(resolve => {
    resolve(normalizeSeasonDetailsData(SeasonDetails));
  });
};

export { getSeasonDetails };
