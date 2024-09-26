import { get } from './serviceBase.ts';

// TODO: CHANGE INTO RIGHT BASE_URL
const BASE_URL = 'https://jobsearch.api.jobtechdev.se/search?offset=0&limit=10';

// TODO: CHANGE TO CORRECT INTERFACE HERE
export interface IJob {
  id: number;
  headline: string;
  description: {
    text: string;
  };
}

// TODO: CHANGE TO CORRECT INTERFACE HERE
interface IJobSearchResponse {
  hits: IJob[];
}

export const getJobs = async (): Promise<IJob[]> => {
  const response = await get<IJobSearchResponse>(BASE_URL);

  return response.data.hits;
};
