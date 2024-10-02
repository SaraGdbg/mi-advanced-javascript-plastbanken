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

export const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useContext(FilterDispatchContext);
  const filters = useContext(FilterContext);

  const handleChange = (e: DigiFormInputSearchCustomEvent<string>) => {
    dispatch({
      type: FilterActionType.SET_QUERY_FROM_INPUT,
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e: DigiFormInputSearchCustomEvent<string>) => {
    const inputText = e.target.value;
    let searchText = '';

    if (inputText) {
      searchText = `q=${inputText}`;
    }

    if (searchText) {
      navigate(`/annonser/${searchText}`);
    } else {
      navigate('/annonser');
    }
  };

  return (
    <>
      <DigiFormInputSearch
        afLabel="Informativ text"
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
