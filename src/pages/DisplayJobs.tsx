import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';
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
import { useState } from 'react';

export const DisplayJobs = () => {
  const loaderJobs = useLoaderData() as IJob[];
  const [jobs, setJobs] = useState<IJob[]>([]);

  setJobs(loaderJobs);

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
              {jobs.map((job) => (
                <JobShortPresentation job={job}></JobShortPresentation>
              ))}
            </ul>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
