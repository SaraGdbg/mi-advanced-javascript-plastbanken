import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import { DigiNotificationErrorPage } from '@digi/arbetsformedlingen-react';

export const NotFound = () => {
  return (
    <>
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
      </DigiNotificationErrorPage>
    </>
  );
};
