import { useLoaderData } from 'react-router-dom';

import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { SearchBar } from '../components/SearchBar';
import { JobShortPresentation } from '../components/JobShortPresentation';
import { useState, useEffect } from 'react';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';
import { getOccupations } from '../services/occupationsService';
import { IOccupationFields } from '../models/IOccupationFields';
import { FilterButtons } from '../components/FilterButtons';
import { IRegion } from '../models/IRegion';
import { getLocations } from '../services/locationsService';
import { RegionsOccupationsContext } from '../contexts/RegionsOccupationsContext';

export const DisplayJobs = () => {
  const loaderJobs = useLoaderData() as IJobsSearchResponse;
  // To find the jobs use jobs.hits
  const [jobs, setJobs] = useState<IJobsSearchResponse>(loaderJobs);
  // setJobs will be used to change the state when filters are applied
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
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <DigiLayoutContainer>
            <h2>Sökresultat</h2>
            <SearchBar></SearchBar>
          </DigiLayoutContainer>

          <RegionsOccupationsContext.Provider value={{ regions, occupations }}>
            <FilterButtons></FilterButtons>
          </RegionsOccupationsContext.Provider>

          <DigiLayoutContainer>
            <ul>
              {jobs?.hits.map((job) => (
                <JobShortPresentation
                  job={job}
                  key={job.id}
                ></JobShortPresentation>
              ))}
            </ul>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
