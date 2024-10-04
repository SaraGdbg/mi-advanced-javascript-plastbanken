import { DigiFormFilter } from '@digi/arbetsformedlingen-react';

export const FilterButtonQualifications = () => {
  return (
    <>
      <DigiFormFilter
        afFilterButtonText="Kvalifikationer"
        afSubmitButtonText="Filtrera"
        afListItems={[
          { id: 'omr1', label: 'Variabel för kvalifikation' },
          { id: 'omr2', label: 'Variabel för kvalifikation' },
          { id: 'omr3', label: 'Variabel för kvalifikation' },
        ]}
        //afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
        onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
        onAfResetFilter={() => console.log('reset filter')}
        onAfSubmitFilter={(e) =>
          console.log('submit filter', e.detail.listItems, e.detail.checked)
        }
        onAfCloseFilter={(e) =>
          console.log('submit filter', e.detail.listItems, e.detail.checked)
        }
      ></DigiFormFilter>
    </>
  );
};

// update filter with:
// education (concept_id: string, label: string, legacy_ams_taxonomy_is: string, weight: integer)
// add checkbox for driving-licence
// add radio buttons for education
//
