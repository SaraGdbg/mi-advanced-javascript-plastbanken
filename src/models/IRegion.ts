import { IMunicipality } from './IMunicipality';

export interface IRegion {
  // used when searching for jobs
  'taxonomy/national-nuts-level-3-code-2019': string;
  'taxonomy/id': string;
  'taxonomy/type': string;
  // used to display name of region
  'taxonomy/preferred-label': string;
  municipalities: IMunicipality[];
}
