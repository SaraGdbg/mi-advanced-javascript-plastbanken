// import {
//   DigiFormRadiobutton,
//   DigiFormRadiogroup,
// } from '@digi/arbetsformedlingen-react';
// import { useContext } from 'react';
// import { FilterContext } from '../../contexts/FilterContext';
// import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
//import { FormRadiobuttonVariation } from '@digi/arbetsformedlingen';
// import {
//   DigiFormCheckboxCustomEvent,
//   //DigiFormRadiobuttonCustomEvent,
//   FormCheckboxVariation,
// } from '@digi/arbetsformedlingen/dist/types/components';
// import { FilterActionType } from '../../reducers/FilterReducer';
// import { createQueryString } from '../../utils/createQueryString';
import { FormCheckboxVariation } from '@digi/arbetsformedlingen';
import { DigiFormCheckbox } from '@digi/arbetsformedlingen-react';
import { DigiFormCheckboxCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';
import { useContext } from 'react';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';

export const LocationOptions = () => {
  // const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const setLocation = (e: DigiFormCheckboxCustomEvent<MouseEvent>) => {
    const selectedOption = e.target.afChecked;
    console.log(selectedOption);

    dispatch({
      type: FilterActionType.TOGGLE_REMOTE,
      payload: selectedOption,
    });

    // const updatedFilters = { ...filters, workingHoursType: selectedItem };
    // const searchText = createQueryString(updatedFilters);
    // console.log('Filters:', filters);
    // console.log('searchText:', searchText);
  };

  return (
    <>
      <>
        Flexibilitet
        <DigiFormCheckbox
          afLabel="Möjlighet till distansarbete"
          afVariation={FormCheckboxVariation.PRIMARY}
          onAfOnChange={setLocation}
        />
      </>
    </>
  );
};

/* <DigiFormRadiogroup>
  {locationTypes.map((type) => (
    <div key={type}>
      <DigiFormRadiobutton
        afLabel={locationTypeTLabels[+type]}
        afVariation={FormRadiobuttonVariation.PRIMARY}
        onAfOnChange={setLocation}
        afId={type.toString()}
        //afChecked={checkRadioButton(type.toString())}
      ></DigiFormRadiobutton>
    </div>
  ))}
</DigiFormRadiogroup>; */
