import {
  FormInputSearchVariation,
  FormInputType,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterDispatchContext } from '../contexts/FilterDispatchContext.ts';
import { FilterActionType } from '../reducers/FilterReducer.ts';
import { FilterContext } from '../contexts/FilterContext.ts';
import { createQueryString } from '../utils/createQueryString.ts';
import { PaginationContext } from '../contexts/PaginationContext.ts';

export const SearchBar = () => {
  const { resetPagination } = useContext(PaginationContext);
  const navigate = useNavigate();
  const dispatch = useContext(FilterDispatchContext);
  const filters = useContext(FilterContext);

  const handleChange = (e: DigiFormInputSearchCustomEvent<string>) => {
    dispatch({
      type: FilterActionType.SET_QUERY_FROM_INPUT,
      payload: e.target.value,
    });
  };

  const handleSubmit = async () => {
    filters.offset = 0;
    dispatch({
      type: FilterActionType.SET_OFFSET,
      payload: filters.offset,
    });

    resetPagination();
    const queryString = createQueryString(filters);
    navigate(`/annonser/${queryString}`);
  };

  return (
    <>
      <DigiFormInputSearch
        afLabel="Sök på ett eller flera ord"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        onAfOnSubmitSearch={handleSubmit}
        onAfOnChange={handleChange}
        afValue={filters.queryFromInput}
      ></DigiFormInputSearch>
    </>
  );
};
