import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';
import { useState, useRef } from 'react';
import { PublishDateMenu } from './PublishDateMenu.tsx';

export const FilterButtonPublishDate = () => {
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
              Publiceringsdatum
              <DigiIconChevronDown slot="icon-secondary" />
            </DigiButton>
          </div>
          {viewMenu === true ? <PublishDateMenu /> : ''}
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
