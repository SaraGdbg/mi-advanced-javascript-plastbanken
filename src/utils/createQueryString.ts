import { IFilterJobs } from '../models/IFilterJobs.ts';

export const createQueryString = (filters: IFilterJobs): string => {
  const params = new URLSearchParams();

  if (filters.queryFromInput) params.append('q', filters.queryFromInput);

  if (filters.isRemote) params.append('remote', 'true');

  //ändra till false
  if (!filters.requiresDrivingLicense)
    params.append('driving-license-required', 'false');

  filters.municipalitiesSelected.forEach((municipality) => {
    params.append('municipality', municipality);
  });

  filters.regionsSelected.forEach((region) => {
    params.append('region', region);
  });

  filters.occupationFieldSelected.forEach((occupationField) => {
    params.append('occupation-field', occupationField);
  });

  if (filters.workingHoursType)
    params.append('worktime-extent', filters.workingHoursType);

  if (filters.sortBy) params.append('sort', filters.sortBy);

  if (filters.limit) params.append('limit', filters.limit.toString());

  if (filters.offset) params.append('offset', filters.offset.toString());

  if (filters.pubDate) params.append('published-after', filters.pubDate);

  return params.toString();
};
