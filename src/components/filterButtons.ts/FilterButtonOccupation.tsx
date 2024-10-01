import { DigiFormFilter } from '@digi/arbetsformedlingen-react';

export const FilterButtonOccupation = () => {
  return (
    <>
      <DigiFormFilter
        afFilterButtonText="Yrke"
        afSubmitButtonText="Filtrera"
        afListItems={[
          { id: 'omr1', label: 'Variabel för yrke' },
          { id: 'omr2', label: 'Variabel för yrke' },
          { id: 'omr3', label: 'Variabel för yrke' },
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
