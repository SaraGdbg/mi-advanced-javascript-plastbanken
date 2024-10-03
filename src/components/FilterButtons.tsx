import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { FilterButtonOccupation } from './filterButtons/FilterButtonOccupation';
import { FilterButtonRegion } from './filterButtons/FilterButtonRegion';
import { FilterButtonEmplymentType } from './filterButtons/FilterButtonEmploymentType';
import { FilterButtonQualifications } from './filterButtons/FilterButtonQualtifications';
import { FilterButtonPublishDate } from './filterButtons/FilterButtonPublishDate';
import { useContext } from 'react';
import { RegionsOccupationsContext } from '../contexts/RegionsOccupationsContext';

export const FilterButtons = () => {
  const regionsOccupations = useContext(RegionsOccupationsContext);

  return (
    <>
      <DigiLayoutContainer>
        <section className="filter-buttons">
          <FilterButtonOccupation></FilterButtonOccupation>
          <FilterButtonRegion></FilterButtonRegion>
          <FilterButtonEmplymentType></FilterButtonEmplymentType>
          <FilterButtonQualifications></FilterButtonQualifications>
          <FilterButtonPublishDate></FilterButtonPublishDate>
        </section>
      </DigiLayoutContainer>
    </>
  );
};
