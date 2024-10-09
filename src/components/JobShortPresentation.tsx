import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { IJob } from '../models/IJob';
import { Link } from 'react-router-dom';
import { StyledJobShortContainer } from './StyledJobShortContainer';

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
        <StyledJobShortContainer>
          <section className="job-details">
            <Link to={`/annonser/id/${job.id}`}>
              <h3>{job.headline}</h3>
            </Link>
            <div className="job-details-time">
              Varaktighet: <h4>{job.duration.label}</h4>
              Omfattning: <h4>{job.working_hours_type.label}</h4>
            </div>
          </section>
          <h4>Ort: {job.workplace_address.municipality}</h4>
          <h4>Titel: {job.occupation.label}</h4>
          <h4>{job.publication_date}</h4>
        </StyledJobShortContainer>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};

// <DigiTypography>
//   <div className="job-short-presentation">
//     <section className="job-details">
//       <Link to={`/annonser/id/${job.id}`}>
//         <h3>{job.headline}</h3>
//       </Link>
//       <div className="job-details-time">
//         Varaktighet: <h4>{job.duration.label}</h4>
//         Omfattning: <h4>{job.working_hours_type.label}</h4>
//       </div>
//     </section>
//     <h4>Ort: {job.workplace_address.municipality}</h4>
//     <h4>Titel: {job.occupation.label}</h4>
//     <h4>{job.publication_date}</h4>
//   </div>
// </DigiTypography>;
