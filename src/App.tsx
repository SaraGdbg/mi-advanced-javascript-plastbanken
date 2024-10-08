import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { useReducer } from 'react';
import { defaultFilterState, FilterReducer } from './reducers/FilterReducer.ts';
import { FilterContext } from './contexts/FilterContext.ts';
import { FilterDispatchContext } from './contexts/FilterDispatchContext.ts';
import { PaginationContext } from './contexts/PaginationContext.ts';
import { usePaginationReset } from './hooks/usePaginationReset.ts';

function App() {
  const [filters, dispatch] = useReducer(FilterReducer, defaultFilterState);
  const [paginationRef, resetPagination] = usePaginationReset();

  return (
    <>
      <FilterContext.Provider value={filters}>
        <FilterDispatchContext.Provider value={dispatch}>
          <PaginationContext.Provider
            value={{ resetPagination, paginationRef }}
          >
            <RouterProvider router={router}></RouterProvider>
          </PaginationContext.Provider>
        </FilterDispatchContext.Provider>
      </FilterContext.Provider>
    </>
  );
}

export default App;
