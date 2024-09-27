import axios from 'axios';
import { LoaderFunction } from 'react-router-dom';

export const jobLoader: LoaderFunction = async () => {
  // Exchange for call to Oskars service
  const jobs = await axios.get(
    'https://jobsearch.api.jobtechdev.se/search?q=Örebro',
  );
  console.log(jobs.data.hits);

  return jobs.data.hits;
};
