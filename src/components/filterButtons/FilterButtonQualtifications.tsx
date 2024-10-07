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

//TODO:
// add checkbox for requires driving-licence (change deafult to true)
// when clicked => false 0 => add to query string to search for jobs without drivers license requirements
// add radiob button for remote, hybrid or in office work
// add my buttons to Johans filter button
// add states to keep track of buttons

// TODO: update IFilter? Check IJobExt if what I put in there is helpful.......
