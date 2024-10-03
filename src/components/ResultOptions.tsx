// Placed a div as wrapper to ba able to style it's children
//import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { SortResults } from './SortResults';

interface IResultOptionProps {
  results: number;
}

export const ResultOptions = ({ results }: IResultOptionProps) => {
  // show number of hits (jobs.hits)
  //Add component for filtering -> filter functions (dispatch filterActionType: SORT_BY)

  return (
    <>
      <div className="sort-results-container">
        <h4>{results} träffar</h4>
        <SortResults></SortResults>
      </div>
    </>
  );
};
