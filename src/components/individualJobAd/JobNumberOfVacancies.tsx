import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const JobNumberOfVacancies = ({ job }: IJobProp) => {
  return (
    <>
      <DigiLayoutContainer afMarginTop={true}>
        <h3>
          Antal jobb:
          <p>{job.number_of_vacancies}</p>
        </h3>
      </DigiLayoutContainer>
    </>
  );
};
