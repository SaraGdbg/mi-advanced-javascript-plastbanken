import { IOccupationFields } from '../models/IOccupationFields';
import { get } from './serviceBase';

const TAXONOMY_URL =
  'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field';

export const getOccupations = async () => {
  const response = await get<IOccupationFields[]>(TAXONOMY_URL);
  return response.data;
};
