import { DigiHeader } from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';
import logo from '../assets/img/logo_dark_green.png';
import { Link } from 'react-router-dom';

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
        <Link slot="header-logo" aria-label="Startsida" to={'/'}></Link>
        <div slot="header-navigation"></div>
      </StyledDigiHeader>
    </>
  );
};
