import { useLoaderData } from 'react-router-dom';
import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { SearchBar } from '../components/SearchBar';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { getOccupations } from '../services/occupationsService';
import { IOccupationFields } from '../models/IOccupationFields';
import { FilterButtons } from '../components/FilterButtons';
import { IRegion } from '../models/IRegion';
import { getLocations } from '../services/locationsService';
import { RegionsOccupationsContext } from '../contexts/RegionsOccupationsContext';
import { useState, useEffect } from 'react';
import { JobsPresentation } from '../components/JobsPresentation.tsx';
import styled from 'styled-components';

const StyledDigiLayoutBlock = styled(DigiLayoutBlock)`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJobsSearchResponse;
  const [occupations, setOccupations] = useState<IOccupationFields[]>([]);
  const [regions, setRegions] = useState<IRegion[]>([]);
  const [fetchedOccupations, setFetchedOccupations] = useState(false);
  const [fetchedRegions, setFetchedRegions] = useState(false);

  useEffect(() => {
    if (fetchedOccupations) return;
    const getData = async () => {
      const data = await getOccupations();
      setOccupations(data);
      setFetchedOccupations(true);
    };
    getData();
  });

  useEffect(() => {
    if (fetchedRegions) return;
    const getData = async () => {
      const data = await getLocations();
      setRegions(data);
      setFetchedRegions(true);
    };
    getData();
  });

  return (
    <>
      <StyledDigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <DigiLayoutContainer>
            <h2>Sökresultat</h2>
            <SearchBar></SearchBar>
          </DigiLayoutContainer>
          <RegionsOccupationsContext.Provider value={{ regions, occupations }}>
            <FilterButtons></FilterButtons>
          </RegionsOccupationsContext.Provider>

          <JobsPresentation jobs={jobs}></JobsPresentation>
        </DigiTypography>
      </StyledDigiLayoutBlock>
    </>
  );
};
