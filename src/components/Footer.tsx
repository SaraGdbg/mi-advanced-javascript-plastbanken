import {
  FooterVariation,
  LogoColor,
  LogoVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiLogo,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDigiLogo = styled(DigiLogo)`
  svg {
    display: none;
  }

  .digi-logo__img {
    background-image: url('/img/logo_light_tangerine.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
  }
`;

export const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
        </div>
        <div slot="content-bottom-left">
          <Link to="/">
            <StyledDigiLogo
              afVariation={LogoVariation.LARGE}
              afColor={LogoColor.SECONDARY}
              afSystemName="Plastbanken"
            ></StyledDigiLogo>
          </Link>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </>
  );
};
