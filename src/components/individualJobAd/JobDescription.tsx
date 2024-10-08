import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';
import { descriptionFormatter } from '../../utils/descriptionFormatter';

interface IJobProp {
  job: IJobExt;
}

export const JobDescription = ({ job }: IJobProp) => {
  return (
    <>
      <DigiLayoutContainer afMarginTop={true}>
        <h3>Om jobbet:</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: descriptionFormatter(job.description.text_formatted),
          }}
        />
      </DigiLayoutContainer>
    </>
  );
};
