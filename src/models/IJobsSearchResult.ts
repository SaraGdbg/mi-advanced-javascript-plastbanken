import { IJob } from './IJob';

export interface IJobsSearchResults {
  total: {
    value: number;
  };
  // Number of job ads found
  hits: IJob[];
  // Number of total jobs within found job ads
  positions: number;
}
