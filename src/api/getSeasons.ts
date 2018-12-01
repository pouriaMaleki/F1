import { normalizeSeasonsData } from "./normalizeSeasonsData";

export const getSeasons = () => {
  return fetch(
    "http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55"
  )
    .then(res => res.json())
    .then(normalizeSeasonsData);
};
