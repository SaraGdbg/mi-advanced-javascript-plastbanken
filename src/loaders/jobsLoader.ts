import { LoaderFunction, Params } from 'react-router-dom';
import { getSearchedJobs } from '../services/jobService.ts';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse.ts';

interface IJobsLoader {
  params: Params<string>;
}

export const jobsLoader: LoaderFunction = async ({
  params,
}: IJobsLoader): Promise<IJobsSearchResponse> => {
  const searchQuery = params.query ? `${params.query}&` : '';
  const jobs = await getSearchedJobs(searchQuery);

  return jobs;
};
