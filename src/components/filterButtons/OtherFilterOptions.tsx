import { LocationOptions } from './LocationOptions';
import { EmploymentTypeOptions } from './EmploymentTypeOptions';
import { DriversLicenseOptions } from './DriversLicenseOptions';

export const OtherFilterOptions = () => {
  return (
    <div className="regionMenuContainer">
      <div className="regionContainer">
        <EmploymentTypeOptions></EmploymentTypeOptions>
        <LocationOptions></LocationOptions>
        <DriversLicenseOptions></DriversLicenseOptions>
      </div>
    </div>
  );
};
