import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { AdsPerPageMenu } from './filterButtons/AdsPerPageMenu';
import { SortResults } from './SortResults';

interface IResultOptionProps {
  ads: number;
  positions: number;
}

export const ResultOptions = ({ ads, positions }: IResultOptionProps) => {
  return (
    <>
      <DigiLayoutContainer>
        <div className="sort-results-container">
          <h3>
            <span className="bold-text">Hittade {ads} annonser</span> med{' '}
            {positions} jobb
          </h3>
          <div className="result-options-container">
            <AdsPerPageMenu></AdsPerPageMenu>
            <SortResults></SortResults>
          </div>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
