import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { calculateAmountOfResultPages } from '../services/resultsPaginationService';

export const ResultsPagination = () => {
  // IJobSerachResponse -> total.value / IFilterJobs -> limit, rounded upwards.
  let totalPages = 5;
  // IFilterJobs -> offset / IFilterJobs -> limit,
  // Might only need to be a starting value.
  const activePage = 1;
  // is probably always one
  let currentResultStart = 1;
  // IFilterJobs -> limit
  let currentResultEnd = 25;
  // IJobSerachResponse -> total.value
  let totalResults = 1842;

  const goToAnotherResultPage = (
    t: DigiNavigationPaginationCustomEvent<number>,
  ) => {
    let tom = calculateAmountOfResultPages(totalResults, currentResultEnd);
    console.log(t.detail);
    let limit = 10;
    // send this to update resultsFilter
    let offset = t.detail * limit;
    console.log(offset);
    console.log(tom);
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
