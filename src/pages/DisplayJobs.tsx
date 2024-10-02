import { useLoaderData } from 'react-router-dom';

import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { FilterButtonOccupation } from '../components/filterButtons/FilterButtonOccupation';
import { FilterButtonRegion } from '../components/filterButtons/FilterButtonRegion';
import { FilterButtonQualifications } from '../components/filterButtons/FilterButtonQualtifications';
import { FilterButtonEmplymentType } from '../components/filterButtons/FilterButtonEmploymentType';
import { FilterButtonPublishDate } from '../components/filterButtons/FilterButtonPublishDate';
import { SearchBar } from '../components/SearchBar';

import { useState } from 'react';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { JobsPresentation } from '../components/JobsPresentation';

export const DisplayJobs = () => {
  const loaderJobs = useLoaderData() as IJobsSearchResponse;
  // To find the jobs use jobs.hits
  const [jobs, setJobs] = useState<IJobsSearchResponse>(loaderJobs);
  // setJobs will be used to change the state when filters are applied

  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <DigiLayoutContainer>
            <h2>Sökresultat</h2>
            <SearchBar></SearchBar>
          </DigiLayoutContainer>

          <DigiLayoutContainer>
            <section className="filter-buttons">
              <FilterButtonOccupation></FilterButtonOccupation>
              <FilterButtonRegion></FilterButtonRegion>
              <FilterButtonEmplymentType></FilterButtonEmplymentType>
              <FilterButtonQualifications></FilterButtonQualifications>
              <FilterButtonPublishDate></FilterButtonPublishDate>
            </section>
          </DigiLayoutContainer>

          <JobsPresentation jobs={jobs}></JobsPresentation>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
