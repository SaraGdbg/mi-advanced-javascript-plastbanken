import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';
import { IRegion } from '../models/IRegion';
import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export const DisplayJobs = () => {
  const jobs = useLoaderData() as IJob[];
  console.log('DisplayJobs:', jobs);

  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <DigiLayoutContainer>
            <h2>Sökresultat</h2>
            <DigiFormInputSearch
              afLabel="Informativ text"
              afVariation={FormInputSearchVariation.MEDIUM}
              afType={FormInputType.SEARCH}
              afButtonText="Knapp"
              //onAfOnSubmitSearch={getInput}
            ></DigiFormInputSearch>
          </DigiLayoutContainer>

          <DigiLayoutContainer>
            <DigiFormFilter
              afFilterButtonText="Ort"
              afSubmitButtonText="Filtrera"
              afListItems={[
                { id: 'omr1', label: 'Variabel för region' },
                { id: 'omr2', label: 'Variabel för region' },
                { id: 'omr3', label: 'Variabel för region' },
              ]}
              afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
              onAfChangeFilter={(e) =>
                console.log(e.detail.id, e.detail.isChecked)
              }
              onAfResetFilter={() => console.log('reset filter')}
              onAfSubmitFilter={(e) =>
                console.log(
                  'submit filter',
                  e.detail.listItems,
                  e.detail.checked,
                )
              }
              onAfCloseFilter={(e) =>
                console.log(
                  'submit filter',
                  e.detail.listItems,
                  e.detail.checked,
                )
              }
            ></DigiFormFilter>
            <DigiFormFilter
              afFilterButtonText="Yrke"
              afSubmitButtonText="Filtrera"
              afListItems={[
                { id: 'omr1', label: 'Variabel för yrke' },
                { id: 'omr2', label: 'Variabel för yrke' },
                { id: 'omr3', label: 'Variabel för yrke' },
              ]}
              afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
              onAfChangeFilter={(e) =>
                console.log(e.detail.id, e.detail.isChecked)
              }
              onAfResetFilter={() => console.log('reset filter')}
              onAfSubmitFilter={(e) =>
                console.log(
                  'submit filter',
                  e.detail.listItems,
                  e.detail.checked,
                )
              }
              onAfCloseFilter={(e) =>
                console.log(
                  'submit filter',
                  e.detail.listItems,
                  e.detail.checked,
                )
              }
            ></DigiFormFilter>
          </DigiLayoutContainer>

          <DigiLayoutContainer>
            <ul>
              {jobs.map((job) => (
                <DigiLayoutContainer
                  afVerticalPadding
                  af-variation={LayoutContainerVariation.STATIC}
                  af-no-gutter
                  key={job.id}
                >
                  <h3>{job.headline}</h3>
                </DigiLayoutContainer>
              ))}
            </ul>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};

//  <ul>
//    {jobs.map((job) => (
//      <li key={job.id}>
//        <h2>{job.headline}</h2>
//      </li>
//    ))}
//  </ul>;
