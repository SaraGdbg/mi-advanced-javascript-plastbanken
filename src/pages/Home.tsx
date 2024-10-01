import {
  DigiTypography,
  DigiLinkInternal,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiInfoCard,
} from '@digi/arbetsformedlingen-react';
import {
  TypographyVariation,
  LinkVariation,
  LayoutBlockVariation,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  InfoCardSize,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: DigiFormInputSearchCustomEvent<string>) => {
    const inputText = e.target.value;
    let searchText = '';

    if (inputText) {
      searchText = `q=${inputText}`;
    }

    if (searchText) {
      navigate(`/annonser/${searchText}`);
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
            <SearchBar></SearchBar>
            <DigiLinkInternal
              afHref="/annonser"
              afVariation={LinkVariation.SMALL}
            >
              Avancerad sökning
            </DigiLinkInternal>
          </DigiTypography>
        </DigiLayoutContainer>

        <DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC} 
        afMarginTop={true}
        afMarginBottom={true}>
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
