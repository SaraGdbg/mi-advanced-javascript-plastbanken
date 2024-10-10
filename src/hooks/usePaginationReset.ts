import { useRef } from 'react';

export const usePaginationReset = (): [
  React.RefObject<HTMLDigiNavigationPaginationElement>,
  () => void,
] => {
  const paginationRef = useRef<HTMLDigiNavigationPaginationElement>(null);

  const resetPagination = () => {
    paginationRef.current?.afMSetCurrentPage(1);
  };

  return [paginationRef, resetPagination];
};
