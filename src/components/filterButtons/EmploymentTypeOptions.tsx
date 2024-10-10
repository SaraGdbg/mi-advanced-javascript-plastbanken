import { useContext } from 'react';
import { FilterActionType } from '../../reducers/FilterReducer';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
import { FormRadiobuttonVariation } from '@digi/arbetsformedlingen';
import {
  DigiFormRadiobutton,
  DigiFormRadiogroup,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { DigiFormRadiobuttonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export const EmploymentTypeOptions = () => {
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const employmentTypes = ['0', '1', '2']; //send this
  const employmentTypeTitles = ['Alla', 'Heltid', 'Deltid']; //show this

  const checkRadioButton = (id: string) => {
    if (filters.workingHoursType === id) {
      return true;
    }
  };

  const setEmploymentType = (e: DigiFormRadiobuttonCustomEvent<MouseEvent>) => {
    const selectedItem = e.target.afId;

    dispatch({
      type: FilterActionType.SET_WORKING_HOURS_TYPE,
      payload: selectedItem,
    });
  };

  return (
    <DigiLayoutContainer afNoGutter>
      <DigiTypography>
        <h4>Arbetsomfattning</h4>
      </DigiTypography>
      <DigiFormRadiogroup>
        {employmentTypes.map((type) => (
          <div key={type}>
            <DigiFormRadiobutton
              afLabel={employmentTypeTitles[+type]}
              afVariation={FormRadiobuttonVariation.PRIMARY}
              onAfOnChange={setEmploymentType}
              afId={type.toString()}
              afChecked={checkRadioButton(type.toString())}
            ></DigiFormRadiobutton>
          </div>
        ))}
      </DigiFormRadiogroup>
    </DigiLayoutContainer>
  );
};
