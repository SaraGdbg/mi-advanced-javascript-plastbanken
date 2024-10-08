import { LayoutMediaObjectAlignment } from '@digi/arbetsformedlingen';
import {
  DigiLayoutMediaObject,
  DigiMediaImage,
} from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';

interface IJobProp {
  job: IJobExt;
}

export const JobHeadline = ({ job }: IJobProp) => {
  return (
    <>
      {job.logo_url && (
        <DigiLayoutMediaObject afAlignment={LayoutMediaObjectAlignment.START}>
          <DigiMediaImage
            afSrc={job.logo_url}
            afAlt={`Logotyp för ${job.employer.name}`}
          ></DigiMediaImage>
        </DigiLayoutMediaObject>
      )}
      <h1>{job.headline}</h1>
    </>
  );
};