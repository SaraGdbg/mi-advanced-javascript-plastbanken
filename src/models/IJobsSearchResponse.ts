import { IJob } from './IJob';

export interface IJobsSearchResponse {
  // Number of job ads found, use this when calculating amount search result pages
  total: {
    value: number;
  };
  // Contains the list of jobs returned from API. Amount of jobs returned depends on limit in search query.
  hits: IJob[];
  // Number of total jobs within found job ads
  positions: number;
}
