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

  return (
    <>
      <DigiLayoutContainer>
        <section className="filter-buttons">
          <FilterButtonWithMenu
            btnText="Yrke"
            component={<OccupationMenu />}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Ort"
            component={<RegionMenu />}
          ></FilterButtonWithMenu>
          <FilterButtonEmploymentType></FilterButtonEmploymentType>
          <FilterButtonQualifications></FilterButtonQualifications>
          <FilterButtonWithMenu
            btnText="Publiceringsdatum"
            component={<PublishDateMenu />}
          ></FilterButtonWithMenu>
          <ResetFilter></ResetFilter>
        </section>
      </DigiLayoutContainer>
    </>
  );
};
