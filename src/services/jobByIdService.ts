import { IJobExt } from '../models/IJob.ts';
import { get } from './serviceBase.ts';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se/ad/';

export const getJob = async (id:string): Promise<IJobExt> => {
  const response = await get<IJobExt>(BASE_URL + id);
  console.log(response.data.headline); //Remove later I guess
  return response.data;
};
