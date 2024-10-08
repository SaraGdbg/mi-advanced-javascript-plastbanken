import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';

import { useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import './filterButtonRegion.css';
import { RegionMenu } from './RegionMenu';
import { useOutsideClick } from '../../services/handleClickOutside';

// TO BE DELETED, USING FilterButtonsWithMenu INSTEAD

export const FilterButtonRegion = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setViewMenu(!viewMenu);
  };

  const ref = useOutsideClick(() => {
    setViewMenu(false);
  });

  return (
    <>
      <div>
        <div className="menuContainer" ref={ref}>
          <div className="filterButtonContainer" ref={dropdownRef}>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.SECONDARY}
              afFullWidth={false}
              onClick={toggleMenu}
            >
              Ort
              <DigiIconChevronDown slot="icon-secondary" />
            </DigiButton>
          </div>
          {viewMenu === true ? (
            <div>
              <RegionMenu></RegionMenu>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
