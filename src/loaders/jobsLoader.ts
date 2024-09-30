import { LoaderFunction, Params } from 'react-router-dom';
import { IJob } from '../models/IJob';
import { getSearchedJobs } from '../services/jobService.ts';

interface IJobsLoader {
  params: Params<string>;
}

export const jobsLoader: LoaderFunction = async ({
  params,
}: IJobsLoader): Promise<IJob[]> => {
  const searchQuery = params.query ? `q=${params.query}&` : '';
  const jobs = await getSearchedJobs(searchQuery);

  return jobs;
};
