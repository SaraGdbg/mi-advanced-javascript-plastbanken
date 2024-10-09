import {
  FooterVariation,
  LinkVariation,
  LogoColor,
  LogoVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiLink,
  DigiLogo,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/logo_light_tangerine.png';

const StyledDigiLogo = styled(DigiLogo)`
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

export const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <DigiFooterCard>
            <h2>Om Plastbanken</h2>
            <p>
              Plastbanken - där jobbsökandet blir ett nöje och filtrering är en
              konst. Vi är här för att ge dig en plats där du kan leta efter
              jobb utan att behöva möta ett hav av irrelevanta annonser (så
              länge du inte söker på 'Alla jobb' så klart).
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Kontakt</h2>
            <p>
              Har du frågor om hur du använder våra filter, eller vill du bara
              prata av dig lite? Skicka ett meddelande till
              <DigiLink afHref="#" afVariation={LinkVariation.SMALL}>
                kontakt@plastbanken.se
              </DigiLink>{' '}
              eller ring oss på 010&#8209;123&nbsp;45&nbsp;67. Vi lovar att
              lyssna - åtminstone mellan kl. 10 och 15.
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Sociala Medier</h2>
            <p>
              Följ oss på sociala medier för att få tips om jobbsökning, ta del
              av inspirerande historier och se hur vårt utvecklingsteam försöker
              förstå konceptet 'tidshantering'.
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
