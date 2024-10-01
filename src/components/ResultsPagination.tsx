import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export const ResultsPagination = () => {
  const totalPages = 5;
  const activePage = 1;
  const currentResultStart = 1;
  const currentResultEnd = 10;
  const totalResults = 42;

  const goToAnotherResultPage = (
    t: DigiNavigationPaginationCustomEvent<number>,
  ) => {
    console.log(t.detail);
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
