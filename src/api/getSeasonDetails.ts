import { normalizeSeasonDetailsData } from "./normalizeSeasonDetailsData";

export const getSeasonDetails = (season: string) => {
  return fetch(`https://ergast.com/api/f1/${season}/results/1.json`)
    .then(res => res.json())
    .then(normalizeSeasonDetailsData);
};
