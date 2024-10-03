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
import { useContext, useState } from 'react';
import { FilterActionType } from '../reducers/FilterReducer';
import { useNavigate } from 'react-router-dom';
import { FilterDispatchContext } from '../contexts/FilterDispatchContext';
import { FilterContext } from '../contexts/FilterContext';
import { createQueryString } from '../utils/createQueryString';

export const ResultsPagination = (jobs: IJobsSearchResponse) => {
  const jobsTotal = jobs.total.value;

  const navigate = useNavigate();
  const dispatch = useContext(FilterDispatchContext);
  let filters = useContext(FilterContext);
  let totalPages = calculateAmountOfResultPages(jobsTotal, filters.limit);
  let currentResultStart = filters.offset + 1;
  let currentResultEnd = filters.offset + filters.limit;
  let totalResults = jobsTotal;
  let activePage = 1;

  const goToAnotherResultPage = (
    e: DigiNavigationPaginationCustomEvent<number>,
  ) => {
    dispatch({
      type: FilterActionType.SET_OFFSET,
      payload: (e.detail - 1) * filters.limit,
    });
    filters.offset = (e.detail - 1) * filters.limit;
    const searchText = createQueryString(filters);

    navigate(`/annonser/${searchText}`);
  };

  return (
    <>
      <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
        <p>{activePage}</p>
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
