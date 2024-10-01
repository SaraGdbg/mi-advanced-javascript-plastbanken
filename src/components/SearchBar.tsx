import {
  FormInputSearchVariation,
  FormInputType,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const navigate = useNavigate();

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
      ></DigiFormInputSearch>
    </>
  );
};
