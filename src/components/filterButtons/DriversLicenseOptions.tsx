import { FilterContext } from '../../contexts/FilterContext';
import { createQueryString } from '../../utils/createQueryString';
import { FormCheckboxVariation } from '@digi/arbetsformedlingen';
import { DigiFormCheckbox } from '@digi/arbetsformedlingen-react';
import { DigiFormCheckboxCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';
import { useContext } from 'react';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';

export const DriversLicenseOptions = () => {
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);
  const option = 'Utan krav på körkort';

  const setDriversLicense = (e: DigiFormCheckboxCustomEvent<MouseEvent>) => {
    const selectedOption = !e.target.afChecked;
    console.log(selectedOption);

    dispatch({
      type: FilterActionType.TOGGLE_DRIVING_LICENSE,
      payload: selectedOption,
    });

    const updatedFilters = {
      ...filters,
      requiresDrivingLicense: selectedOption,
    };
    const searchText = createQueryString(updatedFilters);
    console.log('Filters:', updatedFilters);
    console.log('searchText:', searchText);
  };
  return (
    <>
      <>
        Flexibilitet
        <DigiFormCheckbox
          afLabel={option}
          afVariation={FormCheckboxVariation.PRIMARY}
          onAfOnChange={setDriversLicense}
          afChecked={!filters.requiresDrivingLicense}
        />
      </>
    </>
  );
};
