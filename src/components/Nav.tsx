import {
  DigiHeader,
  DigiNavigationSidebarButton,
} from '@digi/arbetsformedlingen-react';

export const Nav = () => {
  return (
    <>
      <DigiHeader
        afSystemName="Plastbanken"
        afHideSystemName={false}
        afMenuButtonText="Meny"
      >
        <a slot="header-logo" aria-label="Startsida" href="/"></a>
        <div slot="header-content">
          {' '}
          <DigiNavigationSidebarButton afText="Meny">
          </DigiNavigationSidebarButton>
        </div>
        <div slot="header-navigation"></div>
      </DigiHeader>
    </>
  );
};
