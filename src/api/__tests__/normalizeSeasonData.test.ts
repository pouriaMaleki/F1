import Seasons from "../__mocks__/seasons.json";
import { normalizeSeasonsData } from "../normalizeSeasonsData";

describe("normalize seasons list data", () => {
  it("should correctly puts data into normalized array", async () => {
    const normalizedData = await normalizeSeasonsData(Seasons);

    const oneSeason = Seasons.MRData.StandingsTable.StandingsLists[0];
    const champion = oneSeason.DriverStandings[0];
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
    const sampleSeasonNormalized = {
      season: oneSeason.season,
      driver: `${driver.givenName} ${driver.familyName}`,
      driverId: driver.driverId,
      results
    };

    expect(normalizedData.length).toBe(
      Seasons.MRData.StandingsTable.StandingsLists.length
    );
    expect(normalizedData[0]).toEqual(sampleSeasonNormalized);
  });

  it("should throw in case of wrong data input", () => {
    expect(() => normalizeSeasonsData(false)).toThrow();
  });
});

export {};
