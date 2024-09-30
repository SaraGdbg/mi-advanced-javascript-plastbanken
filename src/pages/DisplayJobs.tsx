import { Link, useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJob[];

  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/annonser/id/${job.id}`}>{job.headline}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
