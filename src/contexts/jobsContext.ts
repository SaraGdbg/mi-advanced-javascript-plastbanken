import { createContext } from 'react';
import { IJob } from '../models/IJob';

// in case we need it later.....
interface IJobsContext {
  jobs: IJob[];
}

export const jobsContext = createContext<IJobsContext>({ jobs: [] });
