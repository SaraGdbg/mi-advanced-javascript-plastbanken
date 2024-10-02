import { createContext } from 'react';
import { IFilterJobs } from '../models/IFilterJobs.ts';
import { defaultFilterState } from '../reducers/FilterReducer.ts';

export const FilterContext = createContext<IFilterJobs>(defaultFilterState);
