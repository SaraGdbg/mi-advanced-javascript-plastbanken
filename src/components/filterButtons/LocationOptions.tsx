import { FilterContext } from '../../contexts/FilterContext';
import { FormCheckboxVariation } from '@digi/arbetsformedlingen';
import {
  DigiFormCheckbox,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { DigiFormCheckboxCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';
import { useContext } from 'react';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';

export const LocationOptions = () => {
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);
  const option = 'Möjlighet till distansarbete';

  const setLocation = (e: DigiFormCheckboxCustomEvent<MouseEvent>) => {
    const selectedOption = e.target.afChecked;
    console.log(selectedOption);

    dispatch({
      type: FilterActionType.TOGGLE_REMOTE,
      payload: selectedOption,
    });
  };

  return (
    <DigiLayoutContainer afNoGutter>
      <DigiTypography>
        <h4>Flexibilitet</h4>
      </DigiTypography>
      <DigiFormCheckbox
        afLabel={option}
        afVariation={FormCheckboxVariation.PRIMARY}
        onAfOnChange={setLocation}
        afChecked={filters.isRemote}
      />
    </DigiLayoutContainer>
  );
};
