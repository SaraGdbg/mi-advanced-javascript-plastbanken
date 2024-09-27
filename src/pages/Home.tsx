import {
  DigiTypography,
  DigiFormInputSearch,
  DigiLinkInternal,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiInfoCard,
} from '@digi/arbetsformedlingen-react';
import {
  TypographyVariation,
  FormInputType,
  FormInputSearchVariation,
  LinkVariation,
  LayoutBlockVariation,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  InfoCardSize,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export const Home = () => {
    const getInput = (e:DigiFormInputSearchCustomEvent<string>) => {console.log(e.target.value)}
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiLayoutContainer>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h1>Rubrik</h1>
          </DigiTypography>
        </DigiLayoutContainer>

        <DigiLayoutContainer>
          <DigiTypography>
            <DigiFormInputSearch
              afLabel="Informativ text"
              afVariation={FormInputSearchVariation.MEDIUM}
              afType={FormInputType.SEARCH}
              afButtonText="Knapp"
              onAfOnSubmitSearch={getInput}
            ></DigiFormInputSearch>
            <DigiLinkInternal
              afHref="/annonser"
              afVariation={LinkVariation.SMALL}
            >
              Avancerad sökning
            </DigiLinkInternal>
          </DigiTypography>
        </DigiLayoutContainer>

        <DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC}>
          <DigiInfoCard
            afHeading="Informativ text"
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.TIP}
            afVariation={InfoCardVariation.PRIMARY}
            afSize={InfoCardSize.STANDARD}
          ></DigiInfoCard>
        </DigiLayoutContainer>
      </DigiLayoutBlock>
    </>
  );
};
