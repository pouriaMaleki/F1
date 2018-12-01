import { ISeason } from "../presentationalComponents/Home/ISeason";

export const normalizeSeasonsData = (data: any): ISeason[] => {
  const seasonsUnstructed = data.MRData.StandingsTable.StandingsLists;

  return seasonsUnstructed.map(seasonData => {
    const champion = seasonData.DriverStandings[0];
    const driver = champion.Driver;
    const results = [
      {
        title: "No.",
        value: driver.permanentNumber
      },
      {
        title: "Wins",
        value: champion.wins
      },
      {
        title: "Points",
        value: champion.points
      }
    ];
    const result: ISeason = {
      season: seasonData.season,
      driver: `${driver.givenName} ${driver.familyName}`,
      driverId: driver.driverId,
      results
    };
    return result;
  });
};
