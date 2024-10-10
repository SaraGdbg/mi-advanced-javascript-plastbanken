import {
  DigiButton,
  DigiIconChevronDown,
} from '@digi/arbetsformedlingen-react';
import { ReactNode, useRef, useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import './filterButtonWithMenu.css';
import { useOutsideClick } from '../../services/handleClickOutside';
import styled from 'styled-components';

type FilterBtnProps = {
  btnText: string;
  menuComponent: ReactNode;
  isFilterApplied?: boolean;
};

const StyledDigiButton = styled(DigiButton)<{ $isFilterApplied: boolean }>`
  text-decoration: ${(props) =>
    props.$isFilterApplied ? 'underline' : 'none'};
  text-decoration-color: var(--atomic-tangerine);
`;

const StyledIconChevronDown = styled(DigiIconChevronDown)<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

export const FilterButtonWithMenu = ({
  btnText,
  menuComponent,
  isFilterApplied = false,
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
      <div className="menuContainer" ref={ref}>
        <div className="filterButtonContainer" ref={dropdownRef}>
          <StyledDigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={
              viewMenu ? ButtonVariation.PRIMARY : ButtonVariation.SECONDARY
            }
            afFullWidth={false}
            onClick={toggleMenu}
            $isFilterApplied={isFilterApplied}
          >
            {btnText}
            <StyledIconChevronDown slot="icon-secondary" $isOpen={viewMenu} />
          </StyledDigiButton>
        </div>
        {viewMenu ? <div>{menuComponent}</div> : ''}
      </div>
    </>
  );
};
