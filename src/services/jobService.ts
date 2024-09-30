import { IJob } from '../models/IJob.ts';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse.ts';
import { get } from './serviceBase.ts';

// TODO: CHANGE INTO RIGHT BASE_URL
export const BASE_URL = 'https://jobsearch.api.jobtechdev.se/search?';
export const BASE_URL_END = 'offset=0&limit=10';

export const getJobs = async (): Promise<IJob[]> => {
  const response = await get<IJobsSearchResponse>(BASE_URL + BASE_URL_END);

  return response.data.hits;
};

export const getSearchedJobs = async (searchText: string): Promise<IJob[]> => {
  if (!searchText) {
    return await getJobs();
  }

  const response = await get<IJobsSearchResponse>(
    BASE_URL + searchText + BASE_URL_END,
  );

    return response.data.hits;
  }
};
