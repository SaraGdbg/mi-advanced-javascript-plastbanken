import {
  InfoCardHeadingLevel,
  InfoCardBorderPosition,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export const DisplayJob = () => {
  return (
    <>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiButton>Tillbaka till sökning</DigiButton>
      </DigiLayoutBlock>

      <DigiLayoutBlock afMarginTop={true}>
      <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <DigiLayoutContainer>
            <DigiTypography>
              <h1>Titel</h1>
              <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
                <DigiLayoutContainer><h2>Underrubrik</h2><h2>Titel</h2><h2>Plats</h2></DigiLayoutContainer>
                <DigiLayoutContainer><h2>Omfattning</h2><h2>Varaktighet</h2><h2>Anställningsform</h2></DigiLayoutContainer>
              </DigiLayoutColumns>
              <DigiLayoutContainer afMarginTop={true}><h2>Kvalifikationer</h2></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><h2>Underrubrik</h2></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><p>Text om jobbet</p></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><h3>Körkort krävs</h3></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><h3>Adress + länk till arbetsgivaren</h3></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><h3>Kontaktperson info</h3></DigiLayoutContainer>
              <DigiLayoutContainer afMarginTop={true}><p>Annonsinfo osv</p></DigiLayoutContainer>
            </DigiTypography>
          </DigiLayoutContainer>

          <DigiInfoCard
            afHeading="Jag är ett infokort"
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.RELATED}
            afLinkHref="Frivillig länk"
            afLinkText="Frivillig länktext"
            afVariation={InfoCardVariation.SECONDARY}
            afBorderPosition={InfoCardBorderPosition.LEFT}
          ></DigiInfoCard>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};
