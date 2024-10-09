import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const Salary = ({ job }: IJobProp) => {
  return (
    <>
      <DigiLayoutContainer afMarginTop={true}>
        <h3>
          Lön:
          {job.salary_description && <p>{job.salary_description}</p>}
          {job.salary_type.label && <p>{job.salary_type.label}</p>}
        </h3>
      </DigiLayoutContainer>
    </>
  );
};
