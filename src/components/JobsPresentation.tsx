import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { JobShortPresentation } from './JobShortPresentation';
import { IJobsSearchResponse } from '../models/IJobsSearchResponse';

interface IJobsPresentationProps {
  jobs: IJobsSearchResponse;
}

export const JobsPresentation = ({ jobs }: IJobsPresentationProps) => {
  console.log('JobsPresentation');
  console.log(jobs.hits.length);

  return (
    <>
      <DigiLayoutContainer>
        {jobs.hits.length === 0 ? (
          <h4>Tyvärr, inga träffar på vald sökning.</h4>
        ) : (
          <ul>
            {jobs.hits.map((job) => (
              <JobShortPresentation
                job={job}
                key={job.id}
              ></JobShortPresentation>
            ))}
          </ul>
        )}
      </DigiLayoutContainer>
    </>
  );
};

//   if (jobs.hits.length === 0) {
//     console.log('IF JobsPresentation');

//     return (
//       <>
//         <DigiLayoutContainer>
//           <h4>Tyvärr, inga träffar på vald sökning.</h4>;
//         </DigiLayoutContainer>
//       </>
//     );
//   } else {
//     console.log('ELSE JobsPresentation');

//     return (
//       <>
//         <DigiLayoutContainer>
//           <ul>
//             {jobs.hits.map((job) => (
//               <JobShortPresentation
//                 job={job}
//                 key={job.id}
//               ></JobShortPresentation>
//             ))}
//           </ul>
//         </DigiLayoutContainer>
//       </>
//     );
//   }
// };

// // {
//   jobs?.hits?.length > 0 ? (
//     <ul>
//       {jobs.hits.map((job) => (
//         <JobShortPresentation
//           job={job}
//           key={job.id}
//         ></JobShortPresentation>
//       ))}
//     </ul>
//   ) : (
//     <h4>Tyvärr, inga träffar på vald sökning.</h4>
//   );
// }
