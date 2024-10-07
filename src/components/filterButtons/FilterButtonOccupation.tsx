import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';
import { useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { OccupationMenu } from './OccupationMenu.tsx';

export const FilterButtonOccupation = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <>
      <div>
        <div className="menuContainer">
          <div className="filterButtonContainer" ref={dropdownRef}>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.SECONDARY}
              afFullWidth={false}
              onClick={toggleMenu}
            >
              Yrke
              <DigiIconChevronDown slot="icon-secondary" />
            </DigiButton>
          </div>
          {viewMenu === true ? <OccupationMenu /> : ''}
        </div>
        {viewMenu === true ? (
          <div className="overlay" onClick={toggleMenu}></div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
