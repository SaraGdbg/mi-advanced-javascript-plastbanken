import { LayoutColumnsVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutColumns,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const SubHeadline = ({ job }: IJobProp) => {
  return (
    <>
    <DigiLayoutContainer>
      <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
        <DigiLayoutContainer className='container-highlight' afVerticalPadding={true}>
          <h3>{job.employer.name}</h3>
          <h3>{job.occupation.label}</h3>
          <h3>{job.workplace_address.municipality}</h3>
        </DigiLayoutContainer>

        <DigiLayoutContainer className='container-highlight' afVerticalPadding={true}>
          {job.working_hours_type.label && (
            <h4>
              Omfattning: <p>{job.working_hours_type.label}</p>
            </h4>
          )}

          {job.duration.label && (
            <h4>
              Varaktighet: <p>{job.duration.label}</p>
            </h4>
          )}

          {job.employment_type.label && (
            <h4>
              Anställningsform: <p>{job.employment_type.label}</p>
            </h4>
          )}
        </DigiLayoutContainer>
      </DigiLayoutColumns>
      </DigiLayoutContainer>
    </>
  );
};
