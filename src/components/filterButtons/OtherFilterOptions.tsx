import { LocationOptions } from './LocationOptions';
import { EmploymentTypeOptions } from './EmploymentTypeOptions';
import { DriversLicenseOptions } from './DriversLicenseOptions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const OtherFilterOptions = () => {
  return (
    <div className="filterMenuContainer">
      <StyledDiv className="leftMenuContainer filterMenuColumn">
        <EmploymentTypeOptions></EmploymentTypeOptions>
        <LocationOptions></LocationOptions>
        <DriversLicenseOptions></DriversLicenseOptions>
      </StyledDiv>
    </div>
  );
};
