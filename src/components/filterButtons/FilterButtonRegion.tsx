import {
  DigiButton,
  DigiIconArrowDown,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';
import { IRegion } from '../../models/IRegion';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import './filterButtonRegion.css';
import { RegionMenu } from './RegionMenu';

export const FilterButtonRegion = (regionsArray: IRegion[]) => {
  const [regionsChecked, setRegionsChecked] = useState<string[]>([]);
  const [munisChecked, setMunisChecked] = useState<string[]>([]);

  const [viewMenu, setViewMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const close = (e: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(e.target as Node)
  //     ) {
  //       setViewMenu(false);
  //     }
  //   };
  //   document.addEventListener('click', close, true);

  //   return () => {
  //     document.removeEventListener('click', close, true);
  //   };
  // });

  const toggleMenu = () => {
    setViewMenu(!viewMenu);

    console.log(viewMenu);
  };

  return (
    <>
      <div className="menuContainer">
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
        {viewMenu === true ? <RegionMenu></RegionMenu> : ''}
      </div>
    </>
  );
};
