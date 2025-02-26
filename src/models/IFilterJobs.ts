export interface IFilterJobs {
  // from text input
  queryFromInput: string;
  isRemote: boolean;
  requiresDrivingLicense: boolean;

  // use 'taxonomy/lau-2-code-2015' here, it's unique for each munipality and used for API query
  municipalitiesSelected: string[];

  // use 'taxonomy/national-nuts-level-3-code-2019' here, it's unique for each region and used for API query
  regionsSelected: string[];

  // use taxonomy/id here, it's unique for each occupation field and used for API query
  occupationFieldSelected: string[];

  // use 0,1 or 2 here. 0 is both full and part time. 1 is full time. 2 is part time.
  workingHoursType: string;

  // relevance, pubdate-desc, pubdate-asc, applydate-desc, applydate-asc, not sure if we need all of these, but using these options is preferable  since that is what is used in the API.
  sortBy: string;

  // number of items displayed per page
  limit: number;

  // which item that results is shown from, if 10, then results starts display from item 11.
  offset: number;

  // use format YYYY-mm-ddTHH:MM:SS or number of minutes (e.g 60 means published in the last hour)
  pubDate: string;
}
