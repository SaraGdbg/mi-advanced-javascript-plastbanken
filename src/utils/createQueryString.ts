import { IFilterJobs } from '../models/IFilterJobs.ts';

export const createQueryString = (filters: IFilterJobs): string => {
  const params = new URLSearchParams();

  if (filters.queryFromInput) params.append('q', filters.queryFromInput);

  if (filters.isRemote) params.append('remote', 'true');

  if (filters.requiresDrivingLicense)
    params.append('driving-license-required', 'true');

  filters.municipalitiesSelected.forEach((municipality) => {
    params.append('municipality', municipality);
  });

  filters.regionsSelected.forEach((region) => {
    params.append('region', region);
  });

  if (filters.workingHoursType) params.append('q', filters.queryFromInput);

  if (filters.sortBy) params.append('sort', filters.sortBy);

  const limitValue = filters.limit ?? 10;
  params.append('limit', limitValue.toString());

  const offsetValue = filters.offset ?? 0;
  params.append('offset', offsetValue.toString());

  /* MAYBE
  Fetch job ads published after specified date and time. 
  Accepts either datetime (format YYYY-mm-ddTHH:MM:SS) or 
  number of minutes (e.g 60 means published in the last hour)

  if (filters.pubDate) params.append('published-after', filters.pubDate)
  */

  return params.toString();
};
