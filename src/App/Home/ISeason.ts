import { IResult } from "./Season/IResult";

export interface ISeason {
  season: string;
  driver: string;
  results: IResult[];
}
