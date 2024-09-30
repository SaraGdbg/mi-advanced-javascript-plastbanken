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
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: DigiFormInputSearchCustomEvent<string>) => {
    const inputText = e.target.value;
    let searchText = '';

    if (inputText) {
      searchText = `q=${encodeURIComponent(inputText)}`;
    }

    if (searchText) {
      navigate(`/annonser?${searchText}`);
    } else {
      navigate('/annonser');
    }
  };

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
              onAfOnSubmitSearch={handleSubmit}
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
