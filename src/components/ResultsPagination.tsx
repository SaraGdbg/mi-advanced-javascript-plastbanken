import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import {
  calculateAmountOfResultPages,
  setCurrentPage,
} from '../services/resultsPaginationService';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { useReducer } from 'react';
import { defaultFilterState, FilterReducer } from '../reducers/FilterReducer';

export const ResultsPagination = (jobs: IJobsSearchResponse) => {
  const jobsTotal = jobs.total.value;
  console.log(jobsTotal);

  const [state, dispatch] = useReducer(FilterReducer, defaultFilterState);

  const filters = state;

  console.log(filters.limit);

  const test = setCurrentPage(filters.offset, filters.limit);
  console.log(test);

  // IJobSerachResponse -> total.value / IFilterJobs -> limit, rounded upwards.
  let totalPages = calculateAmountOfResultPages(jobsTotal, filters.limit);
  // IFilterJobs -> offset / IFilterJobs -> limit,
  // Might only need to be a starting value.
  let activePage = setCurrentPage(filters.offset, filters.limit);
  // is probably always one
  const currentResultStart = 1;
  // IFilterJobs -> limit
  let currentResultEnd = filters.limit;
  // IJobSerachResponse -> total.value
  let totalResults = totalPages;

  const goToAnotherResultPage = (
    t: DigiNavigationPaginationCustomEvent<number>,
  ) => {
    // console.log(hits);
    let tom = calculateAmountOfResultPages(totalResults, currentResultEnd);
    console.log(t.detail);
    let limit = 10;
    // send this to update resultsFilter
    let offset = t.detail * limit;
  };

  return (
    <>
      <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
        <DigiNavigationPagination
          afTotalPages={totalPages}
          afInitActive-page={activePage}
          afCurrentResultStart={currentResultStart}
          afCurrentResultEnd={currentResultEnd}
          afTotalResults={totalResults}
          afResultName="annonser"
          onAfOnPageChange={goToAnotherResultPage}
        ></DigiNavigationPagination>
      </DigiLayoutContainer>
    </>
  );
};
