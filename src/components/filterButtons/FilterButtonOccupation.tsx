import { DigiFormFilter } from '@digi/arbetsformedlingen-react';
import { useContext } from 'react';
import { RegionsOccupationsContext } from '../../contexts/RegionsOccupationsContext';

export const FilterButtonOccupation = () => {
  const regionsOccupations = useContext(RegionsOccupationsContext);
  //console.log(regionsOccupations.regions);
  console.log(regionsOccupations.occupations);
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
