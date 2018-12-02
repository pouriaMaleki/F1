import SeasonDetails from "../__mocks__/seasonDetails.json";
import { normalizeSeasonDetailsData } from "../normalizeSeasonDetailsData";

describe("normalize season details data", () => {
  it("should correctly puts data into normalized array", async () => {
    const normalizedData = await normalizeSeasonDetailsData(SeasonDetails);

    const oneRace = SeasonDetails.MRData.RaceTable.Races[0];
    const info = oneRace.Results[0];
    const sampleResult = {
      round: oneRace.round,
      raceName: oneRace.raceName,
      driver: `${info.Driver.givenName} ${info.Driver.familyName}`,
      driverId: info.Driver.driverId,
      team: info.Constructor.name,
      laps: info.laps,
      grid: info.grid,
      time: info.Time.time
    };

    expect(normalizedData.length).toBe(
      SeasonDetails.MRData.RaceTable.Races.length
    );
    expect(normalizedData[0]).toEqual(sampleResult);
  });

  it("should throw in case of wrong data input", () => {
    expect(() => normalizeSeasonDetailsData(false)).toThrow();
  });
});

export {};
