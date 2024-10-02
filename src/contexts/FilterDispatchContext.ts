import { createContext, Dispatch } from 'react';
import { FilterAction } from '../reducers/FilterReducer.ts';

export const FilterDispatchContext = createContext<Dispatch<FilterAction>>(
  () => {
    return;
  },
);
