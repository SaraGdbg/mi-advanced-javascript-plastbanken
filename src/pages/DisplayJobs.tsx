import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';

import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormInputSearch,
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

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJob[];
  console.log('DisplayJobs:', jobs);

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
                <DigiLayoutContainer
                  afVerticalPadding
                  af-variation={LayoutContainerVariation.STATIC}
                  af-no-gutter
                  key={job.id}
                >
                  <h3>{job.headline}</h3>
                </DigiLayoutContainer>
              ))}
            </ul>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};

//  <ul>
//    {jobs.map((job) => (
//      <li key={job.id}>
//        <h2>{job.headline}</h2>
//      </li>
//    ))}
//  </ul>;
