import { IJob } from '../models/IJob.ts';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse.ts';
import { get } from './serviceBase.ts';

// TODO: CHANGE INTO RIGHT BASE_URL
const BASE_URL = 'https://jobsearch.api.jobtechdev.se/search?offset=0&limit=10';

export const getJobs = async (): Promise<IJob[]> => {
  const response = await get<IJobsSearchResponse>(BASE_URL);

  return response.data.hits;
};
