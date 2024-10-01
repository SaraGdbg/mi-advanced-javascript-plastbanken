import {
  FormInputSearchVariation,
  FormInputType,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';

export const SearchBar = () => {
  return (
    <>
      <DigiFormInputSearch
        afLabel="Informativ text"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        //onAfOnSubmitSearch={getInput}
      ></DigiFormInputSearch>
    </>
  );
};
