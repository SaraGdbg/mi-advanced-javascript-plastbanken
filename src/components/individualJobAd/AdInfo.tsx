import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import { IJobExt } from '../../models/IJob';
import { dateFormatter } from '../../utils/dateFormatter';

interface IJobProp {
  job: IJobExt;
}

export const AdInfo = ({ job }: IJobProp) => {
  return (
    <>
      <DigiLayoutContainer afMarginTop={true} afMarginBottom={true}>
        <h3>Annonsinformation:</h3>
        <p>Annons-id: {job.id}</p>
        <p>Publicerad: {dateFormatter(job.publication_date, true)}</p>
      </DigiLayoutContainer>
    </>
  );
};
