import { DigiFormFilter } from '@digi/arbetsformedlingen-react';

export const SortResults = () => {
  //TODO: logic to only be able to check one of the checkboxes at a time
  // TODO: dispatches for each choice
  return (
    <>
      <DigiFormFilter
        afFilterButtonText="Sortera efter"
        afSubmitButtonText="Filtrera"
        afListItems={[
          { id: 'omr1', label: 'Relevans' },
          { id: 'omr2', label: 'Datum stigande' },
          { id: 'omr3', label: 'Datum fallande' },
        ]}
      ></DigiFormFilter>
    </>
  );
};
