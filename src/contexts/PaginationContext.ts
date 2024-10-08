import { createContext } from 'react';

interface IPaginationContext {
  resetPagination: () => void;
  paginationRef: React.RefObject<HTMLDigiNavigationPaginationElement>;
}

const defaultPaginationContext: IPaginationContext = {
  resetPagination: () => {},
  paginationRef: { current: null },
};

export const PaginationContext = createContext<IPaginationContext>(
  defaultPaginationContext,
);
