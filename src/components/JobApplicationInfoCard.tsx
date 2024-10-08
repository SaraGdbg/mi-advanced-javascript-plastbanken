import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  InfoCardBorderPosition,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiInfoCard,
  DigiTypography,
  DigiButton,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../utils/dateFormatter';
import { IJobExt } from '../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const JobApplicationInfoCard = ({ job }: IJobProp) => {
  return (
    <>
      <div className="job-application-container">
        <DigiInfoCard
          afHeading="Sök jobbet"
          afHeadingLevel={InfoCardHeadingLevel.H3}
          afType={InfoCardType.RELATED}
          afVariation={InfoCardVariation.SECONDARY}
          afBorderPosition={InfoCardBorderPosition.LEFT}
        >
          <DigiTypography>
            {job.application_details.url && (
              <div>
                <h4>Via arbetsgivarens webbplats:</h4>
                <p></p>
                <Link to={job.application_details.url}>
                  <DigiButton afVariation={ButtonVariation.PRIMARY}>
                    Sök jobbet här
                  </DigiButton>
                </Link>
              </div>
            )}

            {job.application_details.email && (
              <div>
                <h4>Via mail:</h4>
                <p>
                  <Link to={`mailto:${job.application_details.email}`}>
                    {job.application_details.email}
                  </Link>
                </p>
              </div>
            )}

            {job.application_details.reference && (
              <div>
                <br></br>
                <p>
                  Ange referens{' '}
                  <span className="bold-text">
                    {job.application_details.reference}
                  </span>{' '}
                  i din ansökan
                </p>
              </div>
            )}

            <div>
              <br></br>
              <p>Ansök senast: </p>
              <p className="bold-text">
                {dateFormatter(job.application_deadline, false)}
              </p>
            </div>
          </DigiTypography>
        </DigiInfoCard>
      </div>
      ;
    </>
  );
};
