// Placed a div as wrapper to ba able to style it's children
//import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { SortResults } from './SortResults';

interface IResultOptionProps {
  ads: number;
  positions: number;
}

export const ResultOptions = ({ ads, positions }: IResultOptionProps) => {
  // show number of hits (jobs.hits)
  //Add component for filtering -> filter functions (dispatch filterActionType: SORT_BY)

  return (
    <>
      <div className="sort-results-container">
        <h3>
          <span className="bold-text">Hittade {ads} annonser</span> med{' '}
          {positions} jobb
        </h3>
        <SortResults></SortResults>
      </div>
    </>
  );
};
