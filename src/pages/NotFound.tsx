import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import {
  DigiLinkInternal,
  DigiNotificationErrorPage,
} from '@digi/arbetsformedlingen-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const NotFound = () => {
  return (
    <>
      <Nav></Nav>
      <DigiNotificationErrorPage
        afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
        afCustomHeading="Hoppsan, här har något gått fel!"
      >
        <p slot="bodytext">
          Feliz Navidad Feliz Navidad Feliz Navidad Próspero año y felicidad
          Feliz Navidad Feliz Navidad Feliz Navidad Próspero año y felicidad
          Feliz Navidad Feliz Navidad Feliz Navidad Próspero año y felicidad
          Feliz Navidad Feliz Navidad Feliz Navidad Próspero año y felicidad
        </p>
        <ul slot="links">
          <li>
            <DigiLinkInternal afHref="/" afVariation="small">
              Till startsidan
            </DigiLinkInternal>
          </li>
        </ul>
      </DigiNotificationErrorPage>
      <Footer></Footer>
    </>
  );
};
