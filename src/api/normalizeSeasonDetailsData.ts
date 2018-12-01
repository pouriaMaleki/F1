import { IRound } from "../presentationalComponents/SeasonDetails/IRound";

export const normalizeSeasonDetailsData = (data: any): IRound[] => {
  const unstructedRounds = data.MRData.RaceTable.Races;

  return unstructedRounds.map(roundsData => {
    const info = roundsData.Results[0];
    const result: IRound = {
      round: roundsData.round,
      raceName: roundsData.raceName,
      driver: `${info.Driver.givenName} ${info.Driver.familyName}`,
      driverId: info.Driver.driverId,
      team: info.Constructor.name,
      laps: info.laps,
      grid: info.grid,
      time: info.Time.time
    };
    return result;
  });
};
