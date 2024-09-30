import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJob[];

  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.headline}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};
