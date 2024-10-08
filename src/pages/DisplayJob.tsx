import { LayoutColumnsVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { IJobExt } from '../models/IJob';
import { JobApplicationInfoCard } from '../components/individualJobAd/JobApplicationInfoCard';
import { JobQualifications } from '../components/individualJobAd/JobQualifications';
import { BackToResultsBar } from '../components/individualJobAd/BackToResultsBar';
import { JobHeadline } from '../components/individualJobAd/JobHeadline';
import { JobSubHeadline } from '../components/individualJobAd/JobSubHeadline';
import { JobNumberOfVacancies } from '../components/individualJobAd/JobNumberOfVacancies';
import { JobDescription } from '../components/individualJobAd/JobDescription';
import { JobSalary } from '../components/individualJobAd/JobSalary';
import { JobContactInfo } from '../components/individualJobAd/JobContactInfo';
import { JobAdInfo } from '../components/individualJobAd/JobAdInfo';

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;

  return (
    <>
      <BackToResultsBar></BackToResultsBar>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <DigiLayoutContainer className="job-info-container" afNoGutter={true}>
            <DigiTypography>
              <JobHeadline job={job}></JobHeadline>
              <JobSubHeadline job={job}></JobSubHeadline>
              <JobQualifications job={job}></JobQualifications>
              <JobNumberOfVacancies job={job}></JobNumberOfVacancies>
              <JobDescription job={job}></JobDescription>
              <JobSalary job={job}></JobSalary>
              <JobContactInfo job={job}></JobContactInfo>
              <JobAdInfo job={job}></JobAdInfo>
            </DigiTypography>
          </DigiLayoutContainer>
          <JobApplicationInfoCard job={job}></JobApplicationInfoCard>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
