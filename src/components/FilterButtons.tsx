import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { ResetFilter } from './filterButtons/ResetFilter.tsx';
import { FilterButtonWithMenu } from './filterButtons/FilterButtonWithMenu.tsx';
import { RegionMenu } from './filterButtons/RegionMenu.tsx';
import { OccupationMenu } from './filterButtons/OccupationMenu.tsx';
import { PublishDateMenu } from './filterButtons/PublishDateMenu.tsx';
import { OtherFilterOptions } from './filterButtons/OtherFilterOptions.tsx';

export const FilterButtons = () => {
  // const regionsOccupations = useContext(RegionsOccupationsContext);

  return (
    <>
      <DigiLayoutContainer>
        <section className="filter-buttons">
          <FilterButtonWithMenu
            btnText="Yrke"
            menuComponent={<OccupationMenu />}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Ort"
            menuComponent={<RegionMenu />}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Övriga filter"
            menuComponent={<OtherFilterOptions />}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Publiceringsdatum"
            menuComponent={<PublishDateMenu />}
          ></FilterButtonWithMenu>
          <ResetFilter></ResetFilter>
        </section>
      </DigiLayoutContainer>
    </>
  );
};
