import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { JobShortPresentation } from './JobShortPresentation';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';

interface IJobsPresentationProps {
  jobs: IJobsSearchResponse;
}

export const JobsPresentation = ({ jobs }: IJobsPresentationProps) => {
  return (
    <>
      <DigiLayoutContainer>
        {jobs.hits.length > 0 ? (
          <ul>
            {jobs?.hits.map((job) => (
              <JobShortPresentation
                job={job}
                key={job.id}
              ></JobShortPresentation>
            ))}
          </ul>
        ) : (
          <h4>Tyvärr, inga träffar på vald sökning.</h4>
        )}
      </DigiLayoutContainer>
    </>
  );
};
