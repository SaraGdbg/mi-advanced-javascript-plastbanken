import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';

import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { FilterButtonOccupation } from '../components/FilterButtonOccupation';
import { FilterButtonRegion } from '../components/FilterButtonRegion';
import { FilterButtonQualifications } from '../components/FilterButtonQualtifications';
import { FilterButtonEmplymentType } from '../components/FilterButtonEmploymentType';
import { FilterButtonPublishDate } from '../components/FilterButtonPublishDate';

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

          <DigiLayoutContainer className="filter-buttons">
            <FilterButtonOccupation></FilterButtonOccupation>
            <FilterButtonRegion></FilterButtonRegion>
            <FilterButtonEmplymentType></FilterButtonEmplymentType>
            <FilterButtonQualifications></FilterButtonQualifications>
            <FilterButtonPublishDate></FilterButtonPublishDate>
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
