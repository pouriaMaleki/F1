export interface IRound {
  round: number | string;
  raceName: string;
  driver: string;
  driverId: string;
  team: string;
  laps: number | string;
  grid: number | string;
  time: string;
  seasonChampion?: boolean;
}
