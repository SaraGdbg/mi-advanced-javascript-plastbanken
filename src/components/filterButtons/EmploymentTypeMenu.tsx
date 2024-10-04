import { useContext, useState } from 'react';

import {
  DigiButton,
  DigiIconChevronRight,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import { DigiButtonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';
import { createQueryString } from '../../utils/createQueryString';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';

export const EmploymentTypeMenu = () => {
  const navigate = useNavigate();
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const employmentTypes = ['0', '1', '2']; //send this
  const employmentTypeTitles = ['Alla', 'Heltid', 'Deltid']; //show this

  const setEmploymentType = (e: DigiButtonCustomEvent<MouseEvent>) => {
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
    <div className="regionMenuContainer">
      <div className="regionContainer">
        {employmentTypes.map((type) => (
          <div key={type}>
            <DigiButton
              afSize={ButtonSize.SMALL}
              afVariation={ButtonVariation.SECONDARY}
              afFullWidth={true}
              afId={type.toString()}
              onAfOnClick={setEmploymentType}
            >
              {employmentTypeTitles[+type]}
              <DigiIconChevronRight slot="icon-secondary" />
            </DigiButton>

          </div>
        ))}
      </div>
    </div>
  );
};
