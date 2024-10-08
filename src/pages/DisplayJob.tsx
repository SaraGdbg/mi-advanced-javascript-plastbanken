import {
  InfoCardHeadingLevel,
  InfoCardBorderPosition,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
  ButtonVariation,
  LayoutMediaObjectAlignment,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiLayoutMediaObject,
  DigiMediaImage,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { IJobExt } from '../models/IJob';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import { createQueryString } from '../utils/createQueryString';
import { dateFormatter } from '../utils/dateFormatter';
import { descriptionFormatter } from '../utils/descriptionFormatter';
import { JobApplicationInfoCard } from '../components/JobApplicationInfoCard';

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;
  const navigate = useNavigate();
  const filters = useContext(FilterContext);

  const handleSubmit = () => {
    const queryString = createQueryString(filters);
    navigate(`/annonser/${queryString}`);
  };

  return (
    <>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiButton onAfOnClick={handleSubmit}>
          Tillbaka till sökning
        </DigiButton>
      </DigiLayoutBlock>

      <DigiLayoutBlock afMarginTop={true}>
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <DigiLayoutContainer className="job-info-container" afNoGutter={true}>
            <DigiTypography>
              {job.logo_url && (
                <DigiLayoutMediaObject
                  afAlignment={LayoutMediaObjectAlignment.START}
                >
                  <DigiMediaImage
                    afSrc={job.logo_url}
                    afAlt={`Logotyp för ${job.employer.name}`}
                  ></DigiMediaImage>
                </DigiLayoutMediaObject>
              )}

              <h1>{job.headline}</h1>

              <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
                <DigiLayoutContainer>
                  <h3>{job.employer.name}</h3>
                  <h3>{job.occupation.label}</h3>
                  <h3>{job.workplace_address.municipality}</h3>
                </DigiLayoutContainer>

                <DigiLayoutContainer>
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

              <DigiLayoutContainer afMarginTop={true}>
                <h3>
                  Antal jobb:
                  <p>{job.number_of_vacancies}</p>
                </h3>
              </DigiLayoutContainer>

              <DigiLayoutContainer afMarginTop={true}>
                <h3>Om jobbet:</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: descriptionFormatter(
                      job.description.text_formatted,
                    ),
                  }}
                />
              </DigiLayoutContainer>

              <DigiLayoutContainer afMarginTop={true}>
                <h3>
                  Lön:
                  {job.salary_description && <p>{job.salary_description}</p>}
                  {job.salary_type.label && <p>{job.salary_type.label}</p>}
                </h3>
              </DigiLayoutContainer>

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

              <DigiLayoutContainer afMarginTop={true} afMarginBottom={true}>
                <h3>Annonsinformation:</h3>
                <p>Annons-id: {job.id}</p>
                <p>Publicerad: {dateFormatter(job.publication_date, true)}</p>
              </DigiLayoutContainer>
            </DigiTypography>
          </DigiLayoutContainer>
          <JobApplicationInfoCard job={job}></JobApplicationInfoCard>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
