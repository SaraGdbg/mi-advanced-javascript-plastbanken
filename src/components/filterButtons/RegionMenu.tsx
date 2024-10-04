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
import { DigiButtonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export const RegionMenu = () => {
  const regionsOccupations = useContext(RegionsOccupationsContext);

  const [activeMuni, setActiveMuni] = useState<IMunicipality[]>([]);
  const [activeRegion, setActiveRegion] = useState(['', '']);
  // const [regionsChecked, setRegionsChecked] = useState<string[]>([]);
  // const [munisChecked, setMunisChecked] = useState<string[]>([]);

  const setRegion = (e: DigiButtonCustomEvent<MouseEvent>) => {
    const activeRegion = regionsOccupations.regions.find(
      (o) => o['taxonomy/id'] === e.target.afId,
    );
    if (activeRegion) {
      setActiveMuni(activeRegion.municipalities);
      if (e.target.textContent)
        setActiveRegion([e.target.afId, e.target.textContent]);
    }
  };

  return (
    <div className="regionMenuContainer">
      <div className="regionContainer">
        {regionsOccupations.regions.map((region) => (
          <div key={region['taxonomy/id']}>
            <DigiButton
              afSize={ButtonSize.SMALL}
              afVariation={
                activeRegion[0] === region['taxonomy/id']
                  ? ButtonVariation.PRIMARY
                  : ButtonVariation.SECONDARY
              }
              afFullWidth={true}
              afId={region['taxonomy/id']}
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
              />
            }
            {/* <p>{muni['taxonomy/preferred-label']}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
