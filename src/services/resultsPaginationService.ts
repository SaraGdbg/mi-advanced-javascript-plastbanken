export const calculateAmountOfResultPages = (
  totalJobs: number,
  limit: number,
) => {
  return Math.floor(totalJobs / limit) + 1;
};

export const setCurrentPage = (offset: number, limit: number) => {
  console.log(offset + '   ' + limit);
  return offset / limit + 1;
};

export const setCurrentResultEnd = (
  totalJobs: number,
  offset: number,
  limit: number,
) => {
  if (offset + limit > totalJobs) {
    return totalJobs;
  } else {
    return offset + limit;
  }
};
