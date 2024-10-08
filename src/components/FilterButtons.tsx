import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { FilterButtonOccupation } from './filterButtons/FilterButtonOccupation';
import { FilterButtonRegion } from './filterButtons/FilterButtonRegion';
import { FilterButtonEmploymentType } from './filterButtons/FilterButtonEmploymentType';
import { FilterButtonQualifications } from './filterButtons/FilterButtonQualtifications';
import { FilterButtonPublishDate } from './filterButtons/FilterButtonPublishDate';
// import { useContext } from 'react';
// import { RegionsOccupationsContext } from '../contexts/RegionsOccupationsContext';
import { ResetFilter } from './filterButtons/ResetFilter.tsx';
import { FilterButtonWithMenu } from './filterButtons/FilterButtonWithMenu.tsx';
import { RegionMenu } from './filterButtons/RegionMenu.tsx';

export const FilterButtons = () => {
  // const regionsOccupations = useContext(RegionsOccupationsContext);

  return (
    <>
      <DigiLayoutContainer>
        <section className="filter-buttons">
          <FilterButtonOccupation></FilterButtonOccupation>
          {/* <FilterButtonRegion></FilterButtonRegion> */}
          <FilterButtonWithMenu
            btnText="Ort"
            component={<RegionMenu />}
          ></FilterButtonWithMenu>
          <FilterButtonEmploymentType></FilterButtonEmploymentType>
          <FilterButtonQualifications></FilterButtonQualifications>
          <FilterButtonPublishDate></FilterButtonPublishDate>
          <ResetFilter></ResetFilter>
        </section>
      </DigiLayoutContainer>
    </>
  );
};
