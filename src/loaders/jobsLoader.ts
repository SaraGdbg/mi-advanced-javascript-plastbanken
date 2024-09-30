import { LoaderFunction, Params } from 'react-router-dom';
import { IJob } from '../models/IJob';
import { getSearchedJobs } from '../services/jobService.ts';

interface IJobsLoader {
  params: Params<string>;
}

export const jobsLoader: LoaderFunction = async ({
  params,
}: IJobsLoader): Promise<IJob[]> => {
  const jobs = await getSearchedJobs(`q=${params.query}&`);
  console.log(jobs);

  return jobs;
};
