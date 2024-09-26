import { useState } from 'react';
import { getAPIstuff } from './services/test';
import { IMunicipalities } from './models/IMunicipalities';
import { IJobSearchResult } from './models/IJobsearchResult';
import { IJob } from './models/IJob';

function App() {
  const [searchText, setSearchText] = useState('');
  const [jobs, setJobs] = useState<IJob[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const test = async () => {
    const searchQuery = searchText;
    // getting area code
    const taxonomySearchUrl = `https://jobsearch.api.jobtechdev.se/search?q=${searchQuery}&offset=0&limit=10`;
    const searchResult = await getAPIstuff<IJobSearchResult>(taxonomySearchUrl);

    console.log(searchResult);
    console.log(searchResult.total.value);
    setJobs(searchResult.hits);
    console.log(jobs);
  };

  return (
    <>
      <input type="text" onChange={handleNameChange} value={searchText}></input>
      <button onClick={test}>TEST</button>

      {jobs.map((job) => (
        <div>
          <h2>{job.headline}</h2>

          <p>{job.employer.name}</p>
        </div>
      ))}
      <p></p>
    </>
  );
}

// Clear everything in App.tsx above this line before merging

// function App() {
//   return <></>;

export default App;
