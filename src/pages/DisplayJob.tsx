import { LayoutColumnsVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { IJobExt } from '../models/IJob';
import { ApplicationInfoCard } from '../components/individualJobAd/ApplicationInfoCard';
import { Qualifications } from '../components/individualJobAd/Qualifications';
import { BackToResultsBar } from '../components/individualJobAd/BackToResultsBar';
import { Headline } from '../components/individualJobAd/Headline';
import { SubHeadline } from '../components/individualJobAd/SubHeadline';
import { NumberOfVacancies } from '../components/individualJobAd/NumberOfVacancies';
import { Description } from '../components/individualJobAd/Description';
import { Salary } from '../components/individualJobAd/Salary';
import { ContactInfo } from '../components/individualJobAd/ContactInfo';
import { AdInfo } from '../components/individualJobAd/AdInfo';

export const DisplayJob = () => {
  const job = useLoaderData() as IJobExt;

  return (
    <>
      <BackToResultsBar></BackToResultsBar>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <DigiLayoutContainer className="job-info-container" afNoGutter={true}>
            <DigiTypography>
              <Headline job={job}></Headline>
              <SubHeadline job={job}></SubHeadline>
              <Qualifications job={job}></Qualifications>
              <NumberOfVacancies job={job}></NumberOfVacancies>
              <Description job={job}></Description>
              <Salary job={job}></Salary>
              <ContactInfo job={job}></ContactInfo>
              <AdInfo job={job}></AdInfo>
            </DigiTypography>
          </DigiLayoutContainer>
          <ApplicationInfoCard job={job}></ApplicationInfoCard>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
