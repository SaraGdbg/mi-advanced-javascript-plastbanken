import {
  LayoutContainerVariation,
  TypographyTimeVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';
import { IJob } from '../models/IJob';
import { Link } from 'react-router-dom';
import { StyledJobShortContainer } from './StyledJobShortContainer';

interface IJobShortPresentationProps {
  job: IJob;
}

export const JobShortPresentation = ({ job }: IJobShortPresentationProps) => {
  const date = job.publication_date;
  const dateObject = new Date(date);

  const formatDate = dateObject.toLocaleString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
  });

  return (
    <DigiLayoutContainer
      afVerticalPadding
      af-variation={LayoutContainerVariation.STATIC}
      af-no-gutter
    >
      <DigiTypography>
        <StyledJobShortContainer>
          <section>
            <Link to={`/annonser/id/${job.id}`}>
              <h3>{job.headline}</h3>
            </Link>
            <div>
              {job.duration.label && <h4>Varaktighet: {job.duration.label}</h4>}
              {job.working_hours_type.label && (
                <h4>Omfattning: {job.working_hours_type.label}</h4>
              )}
            </div>
          </section>
          <h4>Ort: {job.workplace_address.municipality}</h4>
          <h4>Titel: {job.occupation.label}</h4>
          <h4>
            Publicerad:
            <DigiTypographyTime
              afVariation={TypographyTimeVariation.PRIMARY}
              afDateTime={job.publication_date}
              afLocale="sv-SE"
            ></DigiTypographyTime>
          </h4>
        </StyledJobShortContainer>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};

//<h4>Publicerad: {formatDate}</h4>
