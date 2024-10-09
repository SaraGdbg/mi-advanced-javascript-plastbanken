import {
  DigiTypography,
  DigiLinkInternal,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiInfoCard,
  DigiInfoCardMulti,
  DigiInfoCardMultiContainer,
} from '@digi/arbetsformedlingen-react';
import {
  TypographyVariation,
  LinkVariation,
  LayoutBlockVariation,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  InfoCardSize,
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
} from '@digi/arbetsformedlingen';
import { SearchBar } from '../components/SearchBar';
import { createQueryString } from '../utils/createQueryString.ts';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext.ts';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledDigiLayoutBlock = styled(DigiLayoutBlock)`
  height: 100%;
  background-color: var(--white);
`;

const StyledDigiLayoutContainer = styled(DigiLayoutContainer)`
  --digi--layout-container--margin-bottom: 4rem;
  --digi--layout-container--margin-top: 4rem;
  .sc-digi-layout-container-s {
    background-color: rgba(var(--mint-var), 0.2);
  }
`;

const StyledDigiInfoCardMulti = styled(DigiInfoCardMulti)`
  --digi--info-card-multi--border: none;
  --digi--info-card--background-color: rgba(var(--mint-var), 0.2);
`;

const StyledDigiInfoCardMultiContainer = styled(DigiInfoCardMultiContainer)`
  .digi-info-card-multi-container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const Home = () => {
  const filters = useContext(FilterContext);
  const navigate = useNavigate();
  const queryString = createQueryString(filters);

  const handleClick = () => {
    navigate(`/annonser/${queryString}`);
  };

  return (
    <>
      <StyledDigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <StyledDigiLayoutContainer afVerticalPadding>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h1>Plastbanken - det är här det börjar!</h1>
          </DigiTypography>
          <SearchBar></SearchBar>
          <DigiLinkInternal
            afHref="#"
            afOverrideLink={true}
            afVariation={LinkVariation.SMALL}
            onAfOnClick={handleClick}
          >
            Avancerad sökning
          </DigiLinkInternal>
        </StyledDigiLayoutContainer>

        <DigiLayoutContainer>
          <DigiInfoCard
            afHeading="Din eviga framtid är här"
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.TIP}
            afVariation={InfoCardVariation.SECONDARY}
            afSize={InfoCardSize.STANDARD}
          >
            <p>
              Är du redo att hitta ditt nästa drömjobb? På Plastbanken matchar
              vi jobb med rätt kandidater, oavsett om du är ny på
              arbetsmarknaden eller en rutinerad veteran. Vi erbjuder en mängd
              möjligheter - från kontorsjobb till fysiska roller - allt för att
              du ska hitta den plats som passar dig bäst!
            </p>
          </DigiInfoCard>

          <StyledDigiInfoCardMultiContainer>
            <StyledDigiInfoCardMulti
              afHeading="Hur fungerar det?"
              afHeadingLevel={InfoCardMultiHeadingLevel.H2}
              afType={InfoCardMultiType.RELATED}
            >
              <p>
                Bläddra bland våra jobbannonser och använd våra filter för att
                hitta precis vad du söker. Vill du hitta något inom ett
                specifikt område? Inga problem. Söker du kanske ett jobb som
                inte innebär tidiga morgnar? Vi förstår dig - sök på 'Sovmorgon'
                så kanske du hittar rätt.
              </p>
            </StyledDigiInfoCardMulti>
            <StyledDigiInfoCardMulti
              afHeading="Optimera dina filter"
              afHeadingLevel={InfoCardMultiHeadingLevel.H2}
              afType={InfoCardMultiType.RELATED}
            >
              <p>
                Med våra smarta filter kan du enkelt skräddarsy sökresultaten.
                Oavsett om du vill filtrera bort måndagsmöten eller hitta jobb
                som ger dig en chans att sitta vid fönstret - vi har lösningen.
                Sätt dina filter och låt oss göra resten!
              </p>
            </StyledDigiInfoCardMulti>
          </StyledDigiInfoCardMultiContainer>
        </DigiLayoutContainer>
      </StyledDigiLayoutBlock>
    </>
  );
};
