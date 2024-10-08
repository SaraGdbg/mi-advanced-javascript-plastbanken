import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';
import { Link } from 'react-router-dom';

interface IJobProp {
  job: IJobExt;
}

export const JobContactInfo = ({ job }: IJobProp) => {
  return (
    <>
      <DigiLayoutContainer afMarginTop={true}>
        <h3>
          Arbetsgivare:
          <p>{job.employer.name}</p>
        </h3>
      </DigiLayoutContainer>

      <DigiLayoutContainer afMarginTop={true}>
        <h3>
          Arbetsplatsen ligger i:{' '}
          <p>
            {job.workplace_address.municipality}
            {', '}
            {job.workplace_address.region}
          </p>
        </h3>
      </DigiLayoutContainer>

      {job.application_contacts[0] && (
        <DigiLayoutContainer afMarginTop={true}>
          <h3>Kontakt:</h3>
          <p>{job.application_contacts[0].name}</p>
          <p>{job.application_contacts[0].description}</p>
          <p>
            <Link to={`mailto:${job.application_contacts[0].email}`}>
              {job.application_contacts[0].email}
            </Link>
          </p>
          <p>{job.application_contacts[0].telephone}</p>
        </DigiLayoutContainer>
      )}
    </>
  );
};
