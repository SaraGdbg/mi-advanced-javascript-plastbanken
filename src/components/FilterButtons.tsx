import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { ResetFilter } from './filterButtons/ResetFilter.tsx';
import { FilterButtonWithMenu } from './filterButtons/FilterButtonWithMenu.tsx';
import { RegionMenu } from './filterButtons/RegionMenu.tsx';
import { OccupationMenu } from './filterButtons/OccupationMenu.tsx';
import { PublishDateMenu } from './filterButtons/PublishDateMenu.tsx';
import { OtherFilterOptions } from './filterButtons/OtherFilterOptions.tsx';
import styled from 'styled-components';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext.ts';

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 0.3rem;
  padding-top: 1rem;
`;

export const FilterButtons = () => {
  const filters = useContext(FilterContext);
  const isDrivingLicenseFilterApplied = !filters.requiresDrivingLicense;
  const isRemoteFilterApplied = filters.isRemote;
  const isEmploymentTypeFilterApplied = filters.workingHoursType !== '';

  const isOtherFiltersApplied =
    isDrivingLicenseFilterApplied ||
    isRemoteFilterApplied ||
    isEmploymentTypeFilterApplied;

  return (
    <>
      <DigiLayoutContainer>
        <StyledSection className="filter-buttons">
          <FilterButtonWithMenu
            btnText="Yrke"
            menuComponent={<OccupationMenu />}
            isFilterApplied={filters.occupationFieldSelected.length > 0}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Ort"
            menuComponent={<RegionMenu />}
            isFilterApplied={filters.municipalitiesSelected.length > 0}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Publiceringsdatum"
            menuComponent={<PublishDateMenu />}
            isFilterApplied={filters.pubDate !== ''}
          ></FilterButtonWithMenu>
          <FilterButtonWithMenu
            btnText="Övriga filter"
            menuComponent={<OtherFilterOptions />}
            isFilterApplied={isOtherFiltersApplied}
          ></FilterButtonWithMenu>
          <ResetFilter></ResetFilter>
        </StyledSection>
      </DigiLayoutContainer>
    </>
  );
};
