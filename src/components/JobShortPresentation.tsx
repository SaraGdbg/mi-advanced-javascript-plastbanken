import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { IJob } from '../models/IJob';

interface IJobShortPresentationProps {
  job: IJob;
}

export const JobShortPresentation = ({ job }: IJobShortPresentationProps) => {
  return (
    <DigiLayoutContainer
      afVerticalPadding
      af-variation={LayoutContainerVariation.STATIC}
      af-no-gutter
      key={job.id}
    >
      <DigiTypography>
        <section className="job-details">
          <h3>{job.headline}</h3>
          <div className="job-details-time">
            Varaktighet: <h4>{job.duration.label}</h4>
            Omfattning: <h4>{job.working_hours_type.label}</h4>
          </div>
        </section>
        <h4>Ort: {job.workplace_address.municipality}</h4>
        <h4>Titel: {job.occupation.name}</h4>
        <h4>{job.application_deadline}</h4>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
