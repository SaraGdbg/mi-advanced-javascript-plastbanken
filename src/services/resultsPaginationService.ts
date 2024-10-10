export const calculateAmountOfResultPages = (
  totalJobs: number,
  limit: number,
) => {
  // 2000 is the hard coded limit from the API for max amount of offset
  if (totalJobs > 2000) {
    return Math.floor(2000 / limit) + 1;
  } else {
    return Math.floor(totalJobs / limit) + 1;
  }
};

export const setCurrentPage = (offset: number, limit: number) => {
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
