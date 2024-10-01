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
import { FilterButtonOccupation } from '../components/filterButtons.ts/FilterButtonOccupation';
import { FilterButtonRegion } from '../components/filterButtons.ts/FilterButtonRegion';
import { FilterButtonQualifications } from '../components/filterButtons.ts/FilterButtonQualtifications';
import { FilterButtonEmplymentType } from '../components/filterButtons.ts/FilterButtonEmploymentType';
import { FilterButtonPublishDate } from '../components/filterButtons.ts/FilterButtonPublishDate';

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJob[];
  console.log('DisplayJobs:', jobs);

  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <DigiLayoutContainer>
            <h2>Sökresultat</h2>
            <DigiFormInputSearch
              afLabel="Informativ text"
              afVariation={FormInputSearchVariation.MEDIUM}
              afType={FormInputType.SEARCH}
              afButtonText="Knapp"
              //onAfOnSubmitSearch={getInput}
            ></DigiFormInputSearch>
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
