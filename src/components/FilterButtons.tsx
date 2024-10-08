import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { FilterButtonEmploymentType } from './filterButtons/FilterButtonEmploymentType';
import { FilterButtonQualifications } from './filterButtons/FilterButtonQualtifications';
import { ResetFilter } from './filterButtons/ResetFilter.tsx';
import { FilterButtonWithMenu } from './filterButtons/FilterButtonWithMenu.tsx';
import { RegionMenu } from './filterButtons/RegionMenu.tsx';
import { OccupationMenu } from './filterButtons/OccupationMenu.tsx';
import { PublishDateMenu } from './filterButtons/PublishDateMenu.tsx';

export const FilterButtons = () => {
  // const regionsOccupations = useContext(RegionsOccupationsContext);
  //const regionsOccupations = useContext(RegionsOccupationsContext);

  return (
    <>
      <DigiLayoutContainer>
        <section className="filter-buttons">
          <FilterButtonOccupation></FilterButtonOccupation>
          <FilterButtonRegion></FilterButtonRegion>
          <FilterButtonEmploymentType></FilterButtonEmploymentType>
          <FilterButtonQualifications></FilterButtonQualifications>
          <FilterButtonPublishDate></FilterButtonPublishDate>
        </section>
      </DigiLayoutContainer>
    </>
  );
};
