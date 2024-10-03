import React, { useContext, useState } from 'react';
import { IRegion } from '../../models/IRegion';
import {
  DigiButton,
  DigiIconChevronRight,
} from '@digi/arbetsformedlingen-react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { RegionsOccupationsContext } from '../../contexts/RegionsOccupationsContext';
import { DigiButtonCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { IMunicipality } from '../../models/IMunicipality';

export const RegionMenu = () => {
  const regionsOccupations = useContext(RegionsOccupationsContext);

  const [activeMuni, setActiveMuni] = useState<IMunicipality[]>([]);

  const setRegion = (e: DigiButtonCustomEvent<MouseEvent>) => {
    console.log(e.target.afId);
    const activeRegion = regionsOccupations.regions.find(
      (o) => o['taxonomy/id'] === e.target.afId,
    );
    if (activeRegion) {
      setActiveMuni(activeRegion.municipalities);
    }

    console.log(activeRegion?.municipalities);
  };
  console.log(activeMuni);

  const [regionsChecked, setRegionsChecked] = useState<string[]>([]);
  const [munisChecked, setMunisChecked] = useState<string[]>([]);
  return (
    <div className="regionMenuContainer">
      <div>
        {regionsOccupations.regions.map((region) => (
          <div key={region['taxonomy/id']}>
            <DigiButton
              afSize={ButtonSize.SMALL}
              afVariation={ButtonVariation.SECONDARY}
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
      <div>
        {activeMuni.map((muni) => (
          <div key={muni['taxonomy/id']}>
            <p>{muni['taxonomy/preferred-label']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
