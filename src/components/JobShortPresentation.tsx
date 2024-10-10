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
import { Link, useNavigate } from 'react-router-dom';
import { StyledJobShortContainer } from './StyledJobShortContainer';
import { StyledSpan } from './StyledSpan';

interface IJobShortPresentationProps {
  job: IJob;
}

export const JobShortPresentation = ({ job }: IJobShortPresentationProps) => {
  const navigate = useNavigate();

  const showJobPresentation = () => {
    navigate(`/annonser/id/${job.id}`);
  };

  return (
    <DigiLayoutContainer
      afVerticalPadding
      af-variation={LayoutContainerVariation.STATIC}
      af-no-gutter
    >
      <DigiTypography>
        <StyledJobShortContainer onClick={showJobPresentation}>
          <section>
            <Link to={`/annonser/id/${job.id}`}>
              <h3>{job.headline}</h3>
            </Link>
            <div>
              {job.duration.label && (
                <h4>
                  Varaktighet: <StyledSpan>{job.duration.label}</StyledSpan>
                </h4>
              )}
              {job.working_hours_type.label && (
                <h4>
                  Omfattning:{' '}
                  <StyledSpan>{job.working_hours_type.label}</StyledSpan>
                </h4>
              )}
            </div>
          </section>
          {job.workplace_address.municipality && (
            <h4>
              Ort: <StyledSpan>{job.workplace_address.municipality}</StyledSpan>
            </h4>
          )}
          <h4>
            Titel: <StyledSpan>{job.occupation.label}</StyledSpan>
          </h4>
          <h4>
            Publicerad:{' '}
            <StyledSpan>
              <DigiTypographyTime
                afVariation={TypographyTimeVariation.DISTANCE}
                afDateTime={job.publication_date}
                afLocale="sv-SE"
              ></DigiTypographyTime>
            </StyledSpan>
          </h4>
        </StyledJobShortContainer>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};