import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { useReducer } from 'react';
import { defaultFilterState, FilterReducer } from './reducers/FilterReducer.ts';
import { FilterContext } from './contexts/FilterContext.ts';
import { FilterDispatchContext } from './contexts/FilterDispatchContext.ts';
import { PaginationProvider } from './contexts/PaginationContext.tsx';

function App() {
  const [filters, dispatch] = useReducer(FilterReducer, defaultFilterState);

  return (
    <>
      <FilterContext.Provider value={filters}>
        <FilterDispatchContext.Provider value={dispatch}>
          <PaginationProvider>
            <RouterProvider router={router}></RouterProvider>
          </PaginationProvider>
        </FilterDispatchContext.Provider>
      </FilterContext.Provider>
    </>
  );
}

export default App;
