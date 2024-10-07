import {
  InfoCardHeadingLevel,
  InfoCardBorderPosition,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { IJobExt } from '../models/IJob';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import { createQueryString } from '../utils/createQueryString';

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;
  const navigate = useNavigate();
  const filters = useContext(FilterContext);

  const handleSubmit = () => {
    const queryString = createQueryString(filters);
    navigate(`/annonser/${queryString}`);
  };

  const date = new Date(job.publication_date);
  const datePart = date.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const timePart = date.toLocaleTimeString('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = `${datePart} klockan ${timePart}`;

  let formattedText = '';
  const descriptionFormatter = () => {
    const initialText = job.description.text_formatted;
    formattedText = initialText.split('\n').join('<br>');
  };

  descriptionFormatter();

  return (
    <>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiButton onAfOnClick={handleSubmit}>
          Tillbaka till sökning
        </DigiButton>
      </DigiLayoutBlock>

      <DigiLayoutBlock afMarginTop={true}>
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <DigiLayoutContainer className="job-info-container">
            <DigiTypography>
              <h1>{job.headline}</h1>
              <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
                <DigiLayoutContainer>
                  <ul>
                    <li>
                      <h3>{job.employer.name}</h3>
                    </li>

                    <li>
                      <h3>{job.occupation.label}</h3>
                    </li>
                    <li>
                      <h3>{job.workplace_address.municipality}</h3>
                    </li>
                  </ul>
                </DigiLayoutContainer>
                <DigiLayoutContainer>
                  <ul>
                    {job.working_hours_type.label && (
                      <li>
                        <h3>{job.working_hours_type.label}</h3>
                      </li>
                    )}

                    {job.duration.label && (
                      <li>
                        <h3>{job.duration.label}</h3>
                      </li>
                    )}

                    {job.employment_type.label && (
                      <li>
                        <h3>{job.employment_type.label}</h3>
                      </li>
                    )}
                  </ul>
                </DigiLayoutContainer>
              </DigiLayoutColumns>
              <DigiLayoutContainer afMarginTop={true}>
                <h3>Kvalifikationer</h3>
              </DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formattedText,
                  }}
                />
              </DigiLayoutContainer>

              {job.driving_license_required && (
                <DigiLayoutContainer afMarginTop={true}>
                  <h3>
                    Körkortsbehörighet: <p>{job.driving_license?.[0].label}</p>
                  </h3>
                </DigiLayoutContainer>
              )}

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
                    {job.workplace_address.municipality} kommun,{' '}
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

              <DigiLayoutContainer afMarginTop={true} afMarginBottom={true}>
                <p>Annons-id: {job.id}</p>
                <p>Publicerad: {formattedDate}</p>
              </DigiLayoutContainer>
            </DigiTypography>
          </DigiLayoutContainer>
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
              </DigiTypography>
            </DigiInfoCard>
          </div>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
