export interface IFilterJobs {
  // from text input
  queryFromInput: string;
  isRemote: boolean;
  requiresDrivingLicense: boolean;

  // use 'taxonomy/lau-2-code-2015' here, it's unique for each munipality and used for API query
  municipalitiesSelected: string[];

  // use 'taxonomy/national-nuts-level-3-code-2019' here, it's unique for each region and used for API query
  regionsSelected: string[];

  // use id here, it's unique for each occupation field and used for API query
  occupationFieldSelected: string[];

  // though is, 0,1 or 2 here. With each number representing Full time, Part time or both. Which number to which options is unclear, but it needs to be the same for both api call function and for page rendering
  workingHoursType: string;

  // relevance, pubdate-desc, pubdate-asc, applydate-desc, applydate-asc, not sure if we need all of these, but using these options is preferable  since that is what is used in the API.
  sortBy: string;

  // number of items displayed per page
  limit: number;

  // which item that results is shown from, if 10, then results starts display from item 11.
  offset: number;

  // pubDate: string; we might want this one, maybe
}

// If we find any other items we need for page representation and/or API call , we should add them to the interface
