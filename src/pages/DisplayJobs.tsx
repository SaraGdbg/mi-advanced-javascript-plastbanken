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
import { JobShortPresentation } from '../components/JobShortPresentation';
//Remove this import and component at row 46
import { ResultsPagination } from '../components/ResultsPagination';
import { useState } from 'react';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';

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
          <DigiLayoutContainer>
            <ul>
              {jobs?.hits.map((job) => (
                <JobShortPresentation
                  job={job}
                  key={job.id}
                ></JobShortPresentation>
              ))}
            </ul>
          </DigiLayoutContainer>
          <ResultsPagination></ResultsPagination>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
