export const calculateAmountOfResultPages = (
  totalJobs: number,
  limit: number,
) => {
  return Math.floor(totalJobs / limit) + 1;
};
