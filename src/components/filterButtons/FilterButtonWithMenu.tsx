import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';

import { ReactNode, useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import './filterButtonRegion.css';
import { useOutsideClick } from '../../services/handleClickOutside';

type FilterBtnProps = {
  btnText: string;
  component: ReactNode;
};

export const FilterButtonWithMenu = ({
  btnText,
  component,
}: FilterBtnProps) => {
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
              afVariation={
                viewMenu ? ButtonVariation.PRIMARY : ButtonVariation.SECONDARY
              }
              afFullWidth={false}
              onClick={toggleMenu}
            >
              {btnText}
              <DigiIconChevronDown slot="icon-secondary" />
            </DigiButton>
          </div>
          {viewMenu ? <div>{component}</div> : ''}
        </div>
      </div>
    </>
  );
};
