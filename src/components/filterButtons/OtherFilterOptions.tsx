import { LocationOptions } from './LocationOptions';
import { EmploymentTypeOptions } from './EmploymentTypeOptions';
import { DriversLicenseOptions } from './DriversLicenseOptions';

export const OtherFilterOptions = () => {
  return (
    <div className="filterMenuContainer">
      <div className="leftMenuContainer filterMenuColumn">
        <EmploymentTypeOptions></EmploymentTypeOptions>
        <LocationOptions></LocationOptions>
        <DriversLicenseOptions></DriversLicenseOptions>
      </div>
    </div>
  );
};
