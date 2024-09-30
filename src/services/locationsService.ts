import { IMunicipality } from '../models/IMunicipality';
import { IRegion } from '../models/IRegion';
import { get } from './serviceBase';

const TAXONOMY_URL =
  'https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/';

const getMunicipalities = async () => {
  const response = await get<IMunicipality[]>(TAXONOMY_URL + 'municipality');
  return response.data;
};

const getRegions = async () => {
  const response = await get<IRegion[]>(TAXONOMY_URL + 'region');
  return response.data.filter(
    (region) =>
      region['taxonomy/national-nuts-level-3-code-2019'] !== undefined,
  );
};

const mergeMunicipalitiesIntoRegions = (
  regions: IRegion[],
  municipalities: IMunicipality[],
) => {
  for (let i = 0; i < regions.length; i++) {
    const regionID = regions[i]['taxonomy/national-nuts-level-3-code-2019'];
    for (let j = 0; j < municipalities.length; j++) {
      const muniID = municipalities[j]['taxonomy/lau-2-code-2015'].substring(
        0,
        2,
      );
      if (muniID === regionID) {
        if (regions[i].municipalities === undefined) {
          regions[i].municipalities = [municipalities[j]];
        } else {
          regions[i].municipalities = [
            ...regions[i].municipalities,
            municipalities[j],
          ];
        }
      }
    }
  }
  return regions;
};

export const getLocations = async () => {
  const regions = await getRegions();
  const municipalities = await getMunicipalities();
  return mergeMunicipalitiesIntoRegions(regions, municipalities);
};
