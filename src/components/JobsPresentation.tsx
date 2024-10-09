import { JobShortPresentation } from './JobShortPresentation';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { ResultOptions } from './ResultOptions';
import { ResultsPagination } from './ResultsPagination.tsx';
import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';

interface IJobsPresentationProps {
  jobs: IJobsSearchResponse;
}

export const JobsPresentation = ({ jobs }: IJobsPresentationProps) => {
  let content = <></>;

  if (jobs.hits.length === 0) {
    content = (
      <div key="no-jobs">
        <h2 className="no-results">Tyvärr, inga träffar på vald sökning.</h2>
      </div>
    );
  } else {
    content = (
      <div key="jobs-list">
        <DigiLayoutContainer>
          <ResultOptions
            ads={jobs.total.value}
            positions={jobs.positions}
          ></ResultOptions>
        </DigiLayoutContainer>
        <ul>
          {jobs.hits.map((job) => (
            <JobShortPresentation job={job} key={job.id}></JobShortPresentation>
          ))}
        </ul>
        <ResultsPagination {...jobs}></ResultsPagination>
      </div>
    );
  }

  return <div>{content}</div>;
};
