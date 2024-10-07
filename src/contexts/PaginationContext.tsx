import { createContext, useRef, ReactNode } from 'react';

export const PaginationContext = createContext<{
  resetPagination: () => void;
  paginationRef: React.RefObject<HTMLDigiNavigationPaginationElement>;
} | null>(null);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const paginationRef = useRef<HTMLDigiNavigationPaginationElement>(null);

  const resetPagination = () => {
    console.log('called!');
    paginationRef.current?.afMSetCurrentPage(1);
  };

  return (
    <PaginationContext.Provider value={{ resetPagination, paginationRef }}>
      {children}
    </PaginationContext.Provider>
  );
};
