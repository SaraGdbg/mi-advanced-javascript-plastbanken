import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';

import { useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import './filterButtonRegion.css';
import { OtherFilterOptions } from './OtherFilterOptions';

export const FilterButtonOtherFilters = () => {
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
              Övriga filter
              <DigiIconChevronDown slot="icon-secondary" />
            </DigiButton>
          </div>
          {viewMenu === true ? (
            <>
              <OtherFilterOptions></OtherFilterOptions>
            </>
          ) : (
            ''
          )}
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
