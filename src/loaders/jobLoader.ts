import { LoaderFunction, Params } from 'react-router-dom';
import { getJob } from '../services/jobByIdService';

interface IJobByIdLoader {
  params: Params<string>;
}

export const jobLoader: LoaderFunction = async ({ params }: IJobByIdLoader) => {
  const { id } = params;
  if (id) {
    const job = getJob(id);
    return job;
  }
};
