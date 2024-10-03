import { JobShortPresentation } from './JobShortPresentation';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';

interface IJobsPresentationProps {
  jobs: IJobsSearchResponse;
}

export const JobsPresentation = ({ jobs }: IJobsPresentationProps) => {
  let content = <></>;

  if (jobs.hits.length === 0) {
    content = (
      <div key="no-jobs">
        <h4>Tyvärr, inga träffar på vald sökning.</h4>
      </div>
    );
    console.log('JobsPresentation IF:', jobs.hits);
  } else {
    console.log('JobsPresentation ELSE:', jobs.hits);

    content = (
      <div key="jobs-list">
        <ul>
          {jobs.hits.map((job) => (
            <JobShortPresentation job={job} key={job.id}></JobShortPresentation>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{content}</div>;
};
