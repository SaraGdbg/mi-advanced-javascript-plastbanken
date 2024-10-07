import {
  DigiFormRadiobutton,
  DigiFormRadiogroup,
} from '@digi/arbetsformedlingen-react';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
import { FormRadiobuttonVariation } from '@digi/arbetsformedlingen';
import { DigiFormRadiobuttonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';
import { createQueryString } from '../../utils/createQueryString';

export const LocationOptions = () => {
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const locationTypes = ['false', 'true']; //send this
  const locationTypeTLabels = ['På plats', 'Remote']; //show this

  // const checkRadioButton = (id: string) => {
  //   if (filters.isRemote.valueOf.toString() === id) {
  //     return true;
  //   }
  // };

  const setLocation = (e: DigiFormRadiobuttonCustomEvent<MouseEvent>) => {
    console.log(e.target.afId);
    const selectedItem = e.target.afId;

    dispatch({
      type: FilterActionType.TOGGLE_REMOTE,
      payload: selectedItem,
    });

    const updatedFilters = { ...filters, workingHoursType: selectedItem };
    const searchText = createQueryString(updatedFilters);
    console.log('Filters:', filters);
    console.log('searchText:', searchText);
  };

  return (
    <>
      <>
        Flexibilitet
        <DigiFormRadiogroup>
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
        </DigiFormRadiogroup>
      </>
    </>
  );
};
