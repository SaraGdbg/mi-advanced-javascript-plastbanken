import { useContext, useState } from 'react';

import { RegionsOccupationsContext } from '../../contexts/RegionsOccupationsContext';

import { IMunicipality } from '../../models/IMunicipality';

import {
  DigiButton,
  DigiFormCheckbox,
  DigiIconChevronRight,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
  FormCheckboxVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButtonCustomEvent,
  DigiFormCheckboxCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
import { FilterActionType } from '../../reducers/FilterReducer';

export const RegionMenu = () => {
  const regionsOccupations = useContext(RegionsOccupationsContext);
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const [activeMuni, setActiveMuni] = useState<IMunicipality[]>([]);
  const [activeRegion, setActiveRegion] = useState(['', '']);
  let munisChecked: string[] = [];
  let regionsChecked: string[] = [];

  const setRegion = (e: DigiButtonCustomEvent<MouseEvent>) => {
    const activeRegion = regionsOccupations.regions.find(
      (o) => o['taxonomy/national-nuts-level-3-code-2019'] === e.target.afId,
    );
    if (activeRegion) {
      setActiveMuni(activeRegion.municipalities);
      if (e.target.textContent)
        setActiveRegion([e.target.afId, e.target.textContent]);
    }
  };

  const updateLocationsChecked = (e: DigiFormCheckboxCustomEvent<any>) => {
    const queryValue = e.target.value;
    const isChecked = e.target.checked;
    console.log(filters.municipalitiesSelected);

    if (queryValue.length === 4) {
      if (isChecked) {
        filters.municipalitiesSelected.push(queryValue);
        dispatch({
          type: FilterActionType.SET_MUNICIPALITIES,
          payload: filters.municipalitiesSelected,
        });
      } else {
        // munisChecked = munisChecked.filter((muni) => muni !== queryValue);
        filters.municipalitiesSelected = filters.municipalitiesSelected.filter(
          (muni) => muni !== queryValue,
        );
      }
    } else {
      if (isChecked) {
        filters.regionsSelected.push(queryValue);
        dispatch({
          type: FilterActionType.SET_REGIONS,
          payload: filters.regionsSelected,
        });
      } else {
        regionsChecked = regionsChecked.filter((muni) => muni !== queryValue);
      }
    }
  };

  const isMuniChecked = (id: string) => {
    if (filters.municipalitiesSelected.find((muni) => id === muni)) {
      return true;
    } else {
      return false;
    }
  };
  const isRegionChecked = (id: string) => {
    if (filters.regionsSelected.find((region) => id === region)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="regionMenuContainer">
      <div className="regionContainer">
        {regionsOccupations.regions.map((region) => (
          <div key={region['taxonomy/national-nuts-level-3-code-2019']}>
            <DigiButton
              afSize={ButtonSize.SMALL}
              afVariation={
                activeRegion[0] ===
                region['taxonomy/national-nuts-level-3-code-2019']
                  ? ButtonVariation.PRIMARY
                  : ButtonVariation.SECONDARY
              }
              afFullWidth={true}
              afId={region['taxonomy/national-nuts-level-3-code-2019']}
              onAfOnClick={setRegion}
            >
              {region['taxonomy/preferred-label']}
              <DigiIconChevronRight slot="icon-secondary" />
            </DigiButton>
            {/* <p>{region['taxonomy/preferred-label']}</p> */}
          </div>
        ))}
      </div>
      <div className="muniContainer">
        {activeMuni.length > 0 ? (
          <div>
            <DigiFormCheckbox
              afLabel={activeRegion[1]}
              afVariation={FormCheckboxVariation.SECONDARY}
              afChecked={isRegionChecked(activeRegion[0])}
              onAfOnChange={updateLocationsChecked}
              afValue={activeRegion[0]}
            />
            <br></br>
          </div>
        ) : (
          ''
        )}
        {activeMuni.map((muni) => (
          <div key={muni['taxonomy/id']}>
            {
              <DigiFormCheckbox
                afLabel={muni['taxonomy/preferred-label']}
                afVariation={FormCheckboxVariation.SECONDARY}
                afChecked={isMuniChecked(muni['taxonomy/lau-2-code-2015'])}
                onAfOnChange={updateLocationsChecked}
                afValue={muni['taxonomy/lau-2-code-2015']}
              />
            }
            {/* <p>{muni['taxonomy/preferred-label']}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
