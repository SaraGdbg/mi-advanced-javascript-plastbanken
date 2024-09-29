import { IJobExt } from '../models/IJob.ts';
import { get } from './serviceBase.ts';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se/ad/';

export const getJob = async (id:number): Promise<IJobExt> => {
  const response = await get<IJobExt>(BASE_URL + id);
  return response.data;
};
