import { LayoutContainerVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiNavigationPagination,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  calculateAmountOfResultPages,
  setCurrentResultEnd,
} from '../services/resultsPaginationService';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { useContext } from 'react';
import { FilterActionType } from '../reducers/FilterReducer';
import { useNavigate } from 'react-router-dom';
import { FilterDispatchContext } from '../contexts/FilterDispatchContext';
import { FilterContext } from '../contexts/FilterContext';
import { createQueryString } from '../utils/createQueryString';
import { PaginationContext } from '../contexts/PaginationContext.ts';

export const ResultsPagination = (jobs: IJobsSearchResponse) => {
  const jobsTotal = jobs.total.value;
  const { paginationRef } = useContext(PaginationContext);

  const navigate = useNavigate();
  const dispatch = useContext(FilterDispatchContext);
  const filters = useContext(FilterContext);
  const totalPages = calculateAmountOfResultPages(jobsTotal, filters.limit);
  const currentResultStart = filters.offset + 1;
  const currentResultEnd = setCurrentResultEnd(
    jobsTotal,
    filters.offset,
    filters.limit,
  );
  const totalResults = jobsTotal;
  const activePage = Math.floor(filters.offset / filters.limit) + 1;

  const goToAnotherResultPage = (
    e: DigiNavigationPaginationCustomEvent<number>,
  ) => {
    console.log(activePage);

    let offset = (e.detail - 1) * filters.limit;
    // 2000 is the hard coded limit from the API for max amount of offset
    if (offset > 2000) {
      offset = 2000;
    }
    dispatch({
      type: FilterActionType.SET_OFFSET,
      payload: offset,
    });
    filters.offset = offset;
    const searchText = createQueryString(filters);

    navigate(`/annonser/${searchText}`);
  };

  return (
    <>
      <div>
        {filters.offset >= 2000 ? (
          <div className="centeredDiv">
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afMarginBottom={true}
            >
              <DigiTypography>
                <p className="textCenter">
                  Detta är slutet av de 2000 första annonserna i sökresultatet,
                  vilket är maxantalet vi kan visa. För att se andra annonser,
                  gör en ny sökning med andra sökkriterier.
                </p>
              </DigiTypography>
            </DigiLayoutBlock>
          </div>
        ) : (
          ''
        )}
        <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
          <DigiNavigationPagination
            ref={paginationRef}
            afInitActivePage={activePage}
            afTotalPages={totalPages}
            afCurrentResultStart={currentResultStart}
            afCurrentResultEnd={currentResultEnd}
            afTotalResults={totalResults}
            afResultName="annonser"
            onAfOnPageChange={goToAnotherResultPage}
          ></DigiNavigationPagination>
        </DigiLayoutContainer>
      </div>
    </>
  );
};
