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
  //const job = useContext(jobsContext);
  return (
    <DigiLayoutContainer
      afVerticalPadding
      af-variation={LayoutContainerVariation.STATIC}
      af-no-gutter
    >
      <DigiTypography>
        <div className="job-short-presentation">
          <section className="job-details">
            <h3>{job.headline}</h3>
            <div className="job-details-time">
              Varaktighet: <h4>{job.duration.label}</h4>
              Omfattning: <h4>{job.working_hours_type.label}</h4>
            </div>
          </section>
          <h4>Ort: {job.workplace_address.municipality}</h4>
          <h4>Titel: {job.occupation.label}</h4>
          <h4>{job.application_deadline}</h4>
        </div>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
