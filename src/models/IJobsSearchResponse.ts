import { IJob } from './IJob';

export interface IJobsSearchResponse {
  // Number of job ads found
  total: {
    value: number;
  };
  // Contains the list of jobs returned from API. Amount of jobs returned depends on limit and offset in search query.
  hits: IJob[];
  // Number of total jobs within found job ads
  positions: number;
}
