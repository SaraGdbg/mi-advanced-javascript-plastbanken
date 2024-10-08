import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const JobQualifications = ({ job }: IJobProp) => {
  return (
    <DigiLayoutContainer afMarginTop={true}>
      <h3>Kvalifikationer:</h3>
      {job.driving_license_required && (
        <h4>
          Körkortsbehörighet: <p>{job.driving_license?.[0].label}</p>
        </h4>
      )}
      {job.experience_required && (
        <h4>
          Erfarenhet: <p>{job.occupation.label}</p>
        </h4>
      )}
    </DigiLayoutContainer>
  );
};
