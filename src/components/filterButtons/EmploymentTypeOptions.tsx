import { useContext } from 'react';
//import { useContext, useState } from 'react';
import { FilterActionType } from '../../reducers/FilterReducer';
import { createQueryString } from '../../utils/createQueryString';
//import { useNavigate } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
import { FormRadiobuttonVariation } from '@digi/arbetsformedlingen';
import {
  DigiFormRadiobutton,
  DigiFormRadiogroup,
} from '@digi/arbetsformedlingen-react';
import { DigiFormRadiobuttonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export const EmploymentTypeOptions = () => {
  //const navigate = useNavigate();
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
    console.log(e.target.afId);
    const selectedItem = e.target.afId;

    dispatch({
      type: FilterActionType.SET_WORKING_HOURS_TYPE,
      payload: selectedItem,
    });

    const updatedFilters = { ...filters, workingHoursType: selectedItem };
    const searchText = createQueryString(updatedFilters);
    console.log(filters);
    console.log(searchText);
  };

  return (
    <>
      Arbetsomfattning
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
    </>
  );
};
