export const calculateAmountOfResultPages = (
  totalJobs: number,
  limit: number,
) => {
  return Math.floor(totalJobs / limit) + 1;
};

export const setCurrentPage = (offset: number, limit: number) => {
  return offset / limit + 1;
};
