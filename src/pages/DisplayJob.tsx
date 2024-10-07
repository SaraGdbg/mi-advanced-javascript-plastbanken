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

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;
  const navigate = useNavigate();
  const filters = useContext(FilterContext);

  const handleSubmit = () => {
    const queryString = createQueryString(filters);
    navigate(`/annonser/${queryString}`);
  };

  const dateFormatter = (dateString: string, displayTime: boolean) => {
    const date = new Date(dateString);
    const datePart = date.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const timePart = date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (displayTime) {
      return `${datePart} klockan ${timePart}`;
    } else return datePart;
  };

  let formattedText = '';
  const descriptionFormatter = () => {
    const initialText = job.description.text_formatted;
    const breaks = initialText.split('\n').join('<br>');
    const listings = breaks.split('•').join('<br>•');
    formattedText = listings;
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
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
