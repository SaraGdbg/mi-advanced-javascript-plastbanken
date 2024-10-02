import { createContext } from 'react';
import { IRegion } from '../models/IRegion';
import { IOccupationFields } from '../models/IOccupationFields';

interface IRegionsOccupations {
    regions: IRegion[],
    occupations: IOccupationFields[]
}

export const RegionsOccupationsContext = createContext<IRegionsOccupations>({regions: [], occupations: []});