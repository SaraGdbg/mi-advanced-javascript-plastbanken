import {
  InfoCardHeadingLevel,
  InfoCardBorderPosition,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
  LayoutContainerVariation,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiIconEnvelopeFilled,
  DigiIconPhone,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Link, useLoaderData } from 'react-router-dom';
import { IJobExt } from '../models/IJob';

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;

  return (
    <>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiButton>Tillbaka till sökning</DigiButton>
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
                    <li>
                      <h3>{job.working_hours_type.label}</h3>
                    </li>

                    <li>
                      <h3>{job.duration.label}</h3>
                    </li>
                    <li>
                      <h3>{job.employment_type.label}</h3>
                    </li>
                  </ul>
                </DigiLayoutContainer>
              </DigiLayoutColumns>
              <DigiLayoutContainer afMarginTop={true}>
                <h3>Kvalifikationer</h3>
              </DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}>
                <h3>Underrubrik</h3>
              </DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.description.text_formatted,
                  }}
                />
              </DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}>
                <h3>
                  Körkortsbehörighet: <p>{job.driving_license?.[0].label}</p>
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
              <DigiLayoutContainer afMarginTop={true}>
                <h3>Kontaktperson:</h3>
                <p>{job.application_contacts[0].name}</p>
                <p>
                  <Link to={`mailto:${job.application_contacts[0].email}`}>
                    {job.application_contacts[0].email}
                  </Link>
                </p>
                <p>{job.application_contacts[0].telephone}</p>
              </DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}>
                <p>Annonsinfo osv</p>
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
                    <DigiButton afVariation={ButtonVariation.PRIMARY}>
                      Sök jobbet här
                    </DigiButton>
                  </div>
                )}

                {job.application_details.email && (
                  <div>
                    <h4>Via mail:</h4>
                    <p>
                      <Link to={`mailto:${job.application_details.email}`}>
                        {job.application_contacts[0].email}
                      </Link>
                    </p>
                  </div>
                )}

                {job.application_details.reference && (
                  <div>
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
