import {
  DigiHeader,
  DigiNavigationSidebarButton,
} from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';
import logo from '../assets/img/logo_dark_green.png';

const StyledDigiHeader = styled(DigiHeader)`
  svg {
    display: none;
  }

  .digi-logo__img {
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
  }
`;

export const Nav = () => {
  return (
    <>
      <StyledDigiHeader
        afSystemName="Plastbanken"
        afHideSystemName={false}
        afMenuButtonText="Meny"
      >
        <a slot="header-logo" aria-label="Startsida" href="/"></a>
        <div slot="header-content">
          <DigiNavigationSidebarButton afText="Meny"></DigiNavigationSidebarButton>
        </div>
        <div slot="header-navigation"></div>
      </StyledDigiHeader>
    </>
  );
};
