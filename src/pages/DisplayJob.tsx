import { LayoutColumnsVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { IJobExt } from '../models/IJob';
import { JobApplicationInfoCard } from '../components/JobApplicationInfoCard';
import { JobQualifications } from '../components/JobQualifications';
import { BackToResultsBar } from '../components/BackToResultsBar';
import { JobHeadline } from '../components/JobHeadline';
import { JobSubHeadline } from '../components/JobSubHeadline';
import { JobNumberOfVacancies } from '../components/JobNumberOfVacancies';
import { JobDescription } from '../components/JobDescription';
import { JobSalary } from '../components/JobSalary';
import { JobContactInfo } from '../components/JobContactInfo';
import { JobAdInfo } from '../components/JobAdInfo';

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
